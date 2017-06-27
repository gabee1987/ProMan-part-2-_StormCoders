function getCards() {
    debugger;
    var currentBoard = $(".view-board").attr("data-id-holder");
    var boardsData = JSON.parse(localStorage.getItem('boards'));
    var boardsLength = boardsData.length;
    var currentCards = null;

    debugger;
    for(let i = 0; i < boardsLength; i++) {
        if(boardsData[i]['id'] == currentBoard){
            currentCards = boardsData[i]['cards'];
            break;
        };
    };
    debugger;
    if(currentCards === null){
    } else {
        for(let j = 0; j < currentCards.length; j++) {
            let showCardTitle = $('.thing-title').clone();
            showCardTitle.attr('class', '');
            let cardTitle = currentCards[j]['title'];
            showCardTitle.html(cardTitle);
            showCardTitle.toggle();
            showCardTitle.appendTo('.card-properties');

            let showCardStatus = $('.thing-status').clone();
            showCardStatus.attr('class', '');
            let cardStatus = currentCards[j]['status'];
            showCardStatus.html(cardStatus);
            showCardStatus.toggle();
            showCardStatus.appendTo('.card-properties');
    };
    };
}

$(document).ready(getCards());