from flask import Flask
from flask import request
from flask import jsonify
app = Flask(__name__)

@app.route('/calc_IMC')
def calc_IMC():
    height = float(request.args.get('height'))
    mass = float(request.args.get('mass'))
    IMC = mass/height/height
    IMC_dict = {'IMC': IMC}
    response = jsonify(IMC_dict)
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', '*')
    return response

if __name__ == '__main__':
    app.run(port=5000)