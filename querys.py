'''
    ProMan - part 2 TW assaignment
    queries module
    Contain the queries, saved to variables.
    by StormCoders
'''




get_boards = """SELECT id, title, state FROM boards;"""

save_board = """INSERT INTO boards_proman (title, state) \
                    VALUES (%s, %s)"""

