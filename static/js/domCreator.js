/* Service add board button
$(document).ready(function () {
    $('#addBootCard').on('click', function(){
        var boardTitle = 'Board';
        var boardState = 'active';
        addBootCard(boardTitle, boardState);
    });

}); */

function createBoard(boardTitle, boardState) {
    var deck = $('.card-deck');
    var board = $(
                `<div class="card mb-4">
                    <div class="card-block">
                        <h4 class="card-title"> ${boardTitle} </h4>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Card 1</li>
                            <li class="list-group-item">Card 2</li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Status: ${boardState} </small>
                        <a href="#" class="btn btn-primary btn-sm float-right" data-toggle="modal" data-target="#detailedBoard">View</a>
                    </div>
                </div>`
                );
    deck.append(board);
}


