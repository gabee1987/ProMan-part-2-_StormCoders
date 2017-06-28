function saveBoard(boardTitle, boardState) {
    var boardObj = {
                'title': boardTitle,
                'state': boardState
            };

    var JSONBoard = JSON.stringify({boardObj});
    console.log(boardObj);
    console.log(JSONBoard);
    $.ajax({
            type : 'POST',
            url : '/save-board',
            contentType: 'application/json;charset=UTF-8',
            data : JSON.stringify({JSONBoard}),
            success : function(response) {
                alert('Successfully added the board!');
                console.log(response);
            },
            error: function(error) {
                alert('Failed to add board!');
                console.log(error);
            }
        });
}