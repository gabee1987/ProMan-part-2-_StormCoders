function saveBoard(boardTitle, boardState) {
    var boardObj = {
                'title': boardTitle,
                'state': boardState
            };

    var JSONBoard = JSON.stringify({boardObj});
    $.ajax({
            type : 'POST',
            url : '/save-board',
            contentType: 'application/json;charset=UTF-8',
            data : JSON.stringify({JSONBoard}),
            success : function(response) {
                alert('Successfully added the board!');
                console.log(response);
                addBootCard(boardTitle, boardState)
            },
            error: function(error) {
                alert('Failed to add board!');
                console.log(error);
            }
        });
}

function saveCard(boardId, cardTitle, cardStatus) {
    var cardObject = {
        'boardId': boardId,
        'title': cardTitle,
        'status': cardStatus
    }
    console.log(cardObject);

    var JsonCard = JSON.stringify({cardObject});
    console.log(JsonCard);
    $.ajax({
            type : 'POST',
            url : '/save-card',
            contentType: 'application/json;charset=UTF-8',
            data : JSON.stringify({JsonCard}),
            success : function(response) {
                alert('Successfully added the card!');
                console.log(response);
            },
            error: function(error) {
                alert('Failed to add the card!');
                console.log(error);
            }
        });
}