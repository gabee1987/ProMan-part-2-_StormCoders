from flask import Flask, render_template, request, redirect, session, url_for, flash, jsonify, Response
import json
from querys import *
from database_handler import *
import collections


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


@app.route('/save-card', methods=['POST'])
def save_card():
    json_card_data = request.json['JsonCard']
    print(json_card_data)
    print(type(json_card_data))
    print('\n')
    card_object = json.loads(json_card_data)
    print(card_object)
    print(type(card_object))
    print('\n')
    query = save_card_query
    print(query)
    data_to_query = (
                    card_object['cardObject']['boardId'],
                    card_object['cardObject']['title'],
                    card_object['cardObject']['status']
                    )
    print(data_to_query)
    print(type(data_to_query))
    print('\n')
    handle_database(query, data_to_query)
    return redirect(url_for('index'))


@app.route('/get-boards')
def get_boards():
    rows = handle_database(get_boards_query)

    objects_list = []
    for row in rows:
        d = collections.OrderedDict()
        d['id'] = row[0]
        d['title'] = row[1]
        d['state'] = row[2]
        objects_list.append(d)
    datas_in_json = json.dumps(objects_list)
    print(datas_in_json)
    return datas_in_json


if __name__ == '__main__':
    app.run(debug=True)
