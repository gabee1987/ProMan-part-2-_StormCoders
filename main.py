
from flask import Flask, render_template, request, redirect, session, url_for, flash, jsonify
import json
import querys
import collections


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


@app.route('/get-boards')
def get_boards():
    rows = handle_database(get_boards)

    objects_list = []
    for row in rows:
        d = collections.OrderedDict()
        d['id'] = row[0]
        d['title'] = row[1]
        d['state'] = row.[2]
        objects_list.append(d)
    datas_in_json = json.dumps(objects_list)
    return datas_in_json


if __name__ == '__main__':
    app.run(debug=True)
