'''
    ProMan - part 2 TW assaignment
    queries module
    Contain the queries, saved to variables.
    by StormCoders
'''


get_boards_query = """SELECT id, title, state FROM boards_proman;"""

save_board = """INSERT INTO boards_proman (title, state) \
                    VALUES (%s, %s)"""

