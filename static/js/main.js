function main() {

    function getBoards() {
    $.ajax({
            type : 'GET',
            url : '/get-boards',
            contentType: 'application/json;charset=UTF-8',
            success : function(response) {
                console.log(response);
            },
            error: function(error) {
                alert('Failed get boards!');
            },
            dataType: 'json'
        });
    }
    getBoards();
    
    $('#addBoardButton').on('click', function() {
        var boardTitle = $('#addBoardTitle').val();
        var boardState = 'active';
        //if input is empty alert the user
        if($('#addBoardTitle').val() == '') {
            $('#alert').html('<strong>Warning!</strong> You left the title empty');
            $('#alert').fadeIn().delay(1000).fadeOut();
            return false;
        };
        saveBoard(boardTitle, boardState);
    });
    
    $('#addCardButton').on('click', function() {
        var boardId = 1 //$('#boardId').data('boardId');
        var cardTitle = $('#addCardTitle').val();
        var cardStatus = 'new';
        saveCard(boardId, cardTitle, cardStatus);
    });
}

$(document).ready(main());