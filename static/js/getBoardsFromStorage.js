function getBoards() {
        var boardsData = JSON.parse(localStorage.getItem('boards'));
        if (boardsData) {
            var boardsLength = boardsData.length;
            //debugger;

            for (i = 0; i < boardsLength; i++) {
                let newBoard = $('#board-templates').clone();
                newBoard.find('#viewBoard').attr("data-id-holder", boardsData[i]["id"]);
                newBoard.attr('id', '').toggle();
                newBoard.find('.card-title').html(boardsData[i]["title"]);
                newBoard.find('.task-template').toggle();
                // debugger;
                newBoard.appendTo('#boards-wrapper');

                if (boardsData[i]['cards']) {
                    var tasks = boardsData[i]['cards'];
                    var tasksLength = tasks.length
                    // debugger;
                    var taskTemplate = $('#board-templates .task-template');

                    for(j = 0; j < tasksLength; j++) {
                        var newTask = taskTemplate.clone();
                        newTask.find(".task-title").html(tasks[j]['title']);
                        newTask.find(".task-status").html(tasks[j]['status']);
                        newBoard.find('.card-title').after(newTask);
                    }
                };
            };
        }
}

$(document).ready(getBoards());