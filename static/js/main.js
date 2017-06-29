function main() {

<<<<<<< HEAD
    function getBoards() {
    $.ajax({
            type : 'GET',
            url : '/get-boards',
            contentType: 'application/json;charset=UTF-8',
            success : function(response) {
                for (let b = 0; b < response.length; b++) {
                    createBoard(response[b]['title'], response[b]['state'])
                }
            },
            error: function(error) {
                alert('Failed get boards!');
            },
            dataType: 'json'
        });
    }
=======
>>>>>>> develop
    getBoards();


    $('#addBoardButton').on('click', function() {
        var boardTitle = $('#addBoardTitle').val();
        var boardState = 'active';
        //if input is empty alert the user
        if($('#addBoardTitle').val() == '') {
            $('#alert-main').html('<strong>Warning!</strong> You left the title empty');
            $('#alert-main').fadeIn().delay(1000).fadeOut();
            return false;
        };
        saveBoard(boardTitle, boardState);
    });


    $('#viewBoard').on('click', function(){
        var boardId = $(this).attr('data-id');
        getCards(boardId);

    });
    
    $('#add-card-button').on('click', function() {
        var boardId = $('.card-title').data('boardid');
        var cardTitle = $('#add-card-title').val();
        var cardStatus = 'new';
        //if input is empty alert the user
        if($('#addBoardTitle').val() == '') {
            $('#alert-main').html('<strong>Warning!</strong> You left the title empty');
            $('#alert-main').fadeIn().delay(1000).fadeOut();
            return false;
        };
        saveCard(boardId, cardTitle, cardStatus);
    });

    $('.btn btn-primary btn-sm float-right').on('click', function() {
        boardId = $(this).data('boardid');
        
    });

    $('#detailed-board-modal-title').on('hidden.bs.modal', function () {
        $(this).find('.modal-body').text('');
        $(this).find('.modal-title')
    });
    
}

$(document).ready(main());