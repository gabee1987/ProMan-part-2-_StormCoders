function setBoard() {
    $('#add').on('click', function() {
        var boardsData = JSON.parse(localStorage.getItem('boards'));
        id = idGenerator(boardsData);

        var boardTitle = $('#addBoardTitle').val();
        var boardState = $('#boardState').val();
        var boardObj = {
                'id': id,
                'title': boardTitle
            };
        //if input is empty alert the user
        if($('#addBoardTitle').val() == '') {
            $('#alert').html('<strong>Warning!</strong> You left the title empty');
            $('#alert').fadeIn().delay(1000).fadeOut();
            return false;
        };
        if (boardsData) {
            // If the item exists in local storage push the new board to the array and save
            boardsData.push(boardObj);
            localStorage.setItem('boards', JSON.stringify(boardsData));
        }
        else {
            // If the item doesn't exist in local storage set the item to a new array containing new board
            localStorage.setItem('boards', JSON.stringify([boardObj]));
        };
        location.reload();
    });
}



$(document).ready(setBoard());
