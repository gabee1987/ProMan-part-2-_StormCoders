$(document).ready(function () {
    $('#domCardEementCreator').on('click', function(){
        var boardId = 'Card';
        var cardStatus = 'new';
        var cardTitle = 'lofakk';
        domCardEementCreator(boardId, cardStatus, cardTitle);
    });

});

function domCardEementCreator(boardId, cardStatus, cardTitle) {
    var deck = $('.card-deck');
    var card = $(
                `<div class="card mb-4">
                    <div class="card-block">
                        <h4 class="card-title"> ${cardTitle} </h4>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Status: ${cardStatus} </small>
                        <a href="#" class="btn btn-primary btn-sm float-right">View</a>
                    </div>
                </div>`
                );
    deck.append(card);
    var id = $('').data('boardId')
    )
    $('body').append(`<div class="card" ${cardTitle} `
    )
}

        <div id="addCardForm" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Add card form content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title"> Add a board </h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="addCardTitle" class="form-control-label"> Board title: </label>
                            <input id="addCardTitle" type="text" class="form-control">
                        </div>
                        <div id="alert-main">
                            <!-- alert will be displayed here -->
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button id="addCardButton" type="submit" class="btn btn-default" data-dismiss="modal"> Add </button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>