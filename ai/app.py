from flask import Flask,render_template,request,jsonify
from predict_s import predict_s
from Cosine_Search import function, df

app = Flask(__name__)
@app.route('/dd')
def index():
    print(new_model.summary())
    return "과연"
@app.route('/predict',methods=['POST'])
def predict():
    if request.method=='POST':
        feeling = request.get_json()
        mode_predited=predict_s(feeling)
        print(mode_predited)
        return jsonify({
            "emotion": mode_predited 
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
