from flask import Flask,render_template,request,jsonify
from predict_sentiment import predict_sent
from Cosine_Search import function, df

app = Flask(__name__)
@app.route('/dd')
def index():
    print(new_model.summary())
    return "과연"
 #"joy":0, "sadness":1, "neutral":2, "anger":3, "fear":4, "surprise":5, "love":6, "disgust":7
@app.route('/predict',methods=['POST'])
def predict():
    if request.method=='POST':
        feeling = request.get_json()###수정 request.form["feeling"]
        mode_predited=predict_sent(feeling)
        print(mode_predited)
        return jsonify({
            "emotion": mode_predited ###수정예정
        })

@app.route('/success', methods=['POST'])
def success():
    if request.method == "POST":
        searchword = request.get_json()
        b = function(df, searchword)
        return jsonify({"searchword": b})
    else:
        pass

if __name__ == "__main__": 
    app.run(host = '127.0.0.1', port=8080)
