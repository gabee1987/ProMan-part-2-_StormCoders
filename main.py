
from flask import Flask, render_template, request, redirect, session, url_for, flash, jsonify
import json
import querys


app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/saveboard', methods=['POST'])
def saveboard():
    json_board_data = request.json['JSONBoard']
    board_data = json.loads(json_board_data)
    query = querys.save_board
    data_to_query = (board_data['boardObj']['title'], board_data['boardObj']['state'])
    # result = handle_database(query, values)
    print(json_board_data)
    print(board_data)
    print(board_data['boardObj']['title'])
    print(board_data['boardObj']['state'])
    print(data_to_query)
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)
