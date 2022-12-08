from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from keras.preprocessing.text import Tokenizer
from keras_preprocessing.sequence import pad_sequences
from nltk.corpus import stopwords
import pandas as pd
import tensorflow as tf
import re
import nltk
import pdb
import pickle
from collections import Counter

def modefinder(numbers):
    c = Counter(numbers)
    order = c.most_common()
    maximum = order[0][1]

    modes = []
    for num in order:
        if num[1] == maximum:
            modes.append(num[0])
    return modes
with open('data_senteces.pkl','rb') as f:
      sentences = pickle.load(f)
nltk.download('punkt')
nltk.download('stopwords')

new_model = tf.keras.models.load_model('my_model.h5')

def token_sent(sentence):
  stop_words = set(stopwords.words("english"))
  stemmer = PorterStemmer()
  tokenizer = Tokenizer(oov_token="UNK") 
  tokenizer.fit_on_texts(sentences) 
  stemming_sentence_input = []
  for s in sentence['Utterance']:
    word_token = word_tokenize(s)
    word_token = [stemmer.stem(word) for word in word_token if not word in stop_words]
    stemming_sentence_input.append(word_token)
  X_input=tokenizer.texts_to_sequences(stemming_sentence_input)
  print("X_input",X_input) 
  X_input_pad=pad_sequences(X_input,maxlen=59,padding='post')
  return X_input_pad
##pickle로 토크나이저 저장해보고 확인
def split_feeling(feeling):
    feeling = re.sub(r'\n', ' ', feeling)
    sent_list = feeling.split('.')
    sent_list = [n for n in sent_list if n]
    sent_df = pd.DataFrame(sent_list)
    sent_df.rename(columns={0:'Utterance'},inplace=True)
    return sent_df
## 처리되는지 얼마나 걸리는지
feeling_dict={
    "joy":0, 
    "sadness":1, 
    "neutral":2, 
    "anger":3, 
    "fear":4, 
    "surprise":5, 
    "love":6, 
    "disgust":7
}
feeling_dict_reverse ={v:k for k,v in feeling_dict.items()}
def predict_sent(feeling):
    print("feeling ",feeling)
    split_feel = split_feeling(feeling["feeling"])
    print("split_feel",split_feel)
    w_token = token_sent(split_feel)
    y_prob = new_model.predict(w_token,verbose=0)
    predicted = y_prob.argmax(axis=-1)
    print("pred ",predicted)
    result_pred= [feeling_dict_reverse.get(i) for i in predicted]
    mode_predited=modefinder(result_pred)
    return mode_predited

# if __name__ == "__main__":
#     text="i'm so happy"
#     print(predict_sent((text)))