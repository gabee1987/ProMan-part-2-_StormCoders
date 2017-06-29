'''
    ProMan - part 2 TW assaignment
    queries module
    Contain the queries, saved to variables.
    by StormCoders
'''


get_boards_query = """SELECT id, title, state FROM boards_proman;"""


get_cards_query = """SELECT cards_proman.title, boards_proman.title
                FROM cards_proman
                INNER JOIN boards_proman
                ON cards_proman.id = boards_proman.id
                WHERE boards_proman.id = %s"""


save_board = """INSERT INTO boards_proman (title, state) \
                    VALUES (%s, %s)"""
