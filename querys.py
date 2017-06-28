'''
    ProMan - part 2 TW assaignment
    queries module
    Contain the queries, saved to variables.
    by StormCoders
'''

save_board = """INSERT INTO boards (title, state) \
                    VALUES ('%s', '%s');"""


get_boards = """SELECT id, title, state FROM boards;"""
