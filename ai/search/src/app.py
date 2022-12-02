from flask import Flask, render_template, request, jsonify
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.metrics.pairwise import cosine_similarity

df = pd.read_pickle("df.pkl")

app = Flask(__name__)
df = pd.read_pickle("df.pkl")

def function(df, input2):
    df.dropna(inplace=True)
    cv = CountVectorizer(stop_words='english')
    doc_term_matrix = cv.fit_transform(df['Lines'])
    cv.get_feature_names_out()
    word_counts = pd.DataFrame(doc_term_matrix.toarray(), index=df["Lines"], columns=cv.get_feature_names_out())
    idfs = TfidfTransformer() 
    idfs.fit(doc_term_matrix)
    idfs_df = pd.DataFrame(idfs.idf_, index=cv.get_feature_names_out(), columns=["idfs"]) 
    idfs_df.sort_values(by=['idfs'], ascending=False)
    tf_idfs = idfs.transform(doc_term_matrix)
    doc = 0
    col = "tf-idf for doc {}".format(doc)
    tf_idf_doc = pd.DataFrame(tf_idfs[doc].T.todense(), index=cv.get_feature_names_out(), columns=[col])
    tf_idf_all_docs = pd.DataFrame(tf_idfs.T.todense(), index=cv.get_feature_names_out())
    tf_idf_all_docs_nicer = pd.DataFrame(np.transpose(tf_idfs.T.toarray()), index=df["Lines"], columns=cv.get_feature_names_out())
    query = str(input2)
    query_term_matrix = cv.transform([query])
    query_counts = pd.DataFrame(query_term_matrix.toarray(), columns=cv.get_feature_names_out())
    results = cosine_similarity(tf_idfs, query_term_matrix)
    results = results.reshape((-1,))
    a =[]
    for i in results.argsort()[:-20:-1]:
        if results[i] > 0:
            a.append("({})- {}: {} {}%".format(i, df.iloc[i, 0], df.iloc[i, 1], round(100*results[i])))
    return a
@app.route('/')
def index():
    return render_template("test.html")

@app.route('/success', methods=['POST'])
def success():
    if request.method == "POST":
        searchword = request.get_json()
        b = function(df, searchword)
        return jsonify({"searchword": b})
    else:
        pass
    
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080)
    