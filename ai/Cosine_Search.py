import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.metrics.pairwise import cosine_similarity

df = pd.read_pickle("df.pkl")

def function(df, input2):
    df.dropna(inplace=True)
    cv = CountVectorizer(stop_words='english')
    doc_term_matrix = cv.fit_transform(df['Lines'])
    cv.get_feature_names_out()
    idfs = TfidfTransformer()
    idfs.fit(doc_term_matrix)
    idfs_df = pd.DataFrame(idfs.idf_, index=cv.get_feature_names_out(),
                           columns=["idfs"])
    idfs_df.sort_values(by=['idfs'], ascending=False)
    tf_idfs = idfs.transform(doc_term_matrix)
    query = str(input2)
    query_term_matrix = cv.transform([query])
    results = cosine_similarity(tf_idfs, query_term_matrix)
    results = results.reshape((-1,))
    a = []
    for i in results.argsort()[:-20:-1]:
        if results[i] > 0:
            a.append("({}) {} - {}: {} {}%".format(i, df.iloc[i, 0],
                                                   df.iloc[i, 1],
                                                   df.iloc[i, 2],
                                                   round(100*results[i])))
    return a