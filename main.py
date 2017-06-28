
from flask import Flask, render_template, request, redirect, session, url_for, flash, jsonify
import json
from querys import *
from database_handler import *


app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/save-board', methods=['POST'])
def saveboard():
    json_board_data = request.json['JSONBoard']
    board_data = json.loads(json_board_data)
    query = save_board
    data_to_query = (board_data['boardObj']['title'], board_data['boardObj']['state'])
    handle_database(query, data_to_query)
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)
