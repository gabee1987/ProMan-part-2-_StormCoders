function main() {
    $('#addBoardButton').on('click', function(){
        setBoardsToStorage();
    });
    $('.view-board').on('click', function(){
        getCards();
    });
}

$(document).ready(main());