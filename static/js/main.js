function main() {
    $('#addBoardButton').on('click', function(){
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
    
}

$(document).ready(main());