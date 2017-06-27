function idGenerator(boardsData){
    allId = [];
    var maxId = 1;
    if (typeof boardsData !== 'undefined' && boardsData !== null) {
        var numberOfId = boardsData.length
        for(var i=0; i<numberOfId; i++) {
            var id = parseInt(boardsData[i]["id"]);
            debugger;
            maxId = id > maxId ? id : maxId;
        };
        return maxId + 1;
    } else {
        return maxId = 1;
    }
}