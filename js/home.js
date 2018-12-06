$(function() {
    var cfgPlayer = {
        draggable: true,
        position: 'start',
        onDragStart: onDragStartPlayer,
        onDrop: onDropPlayer,
        onSnapEnd: onSnapEndPlayer
    };
    var cfgComputer = {
        draggable: true,
        position: 'start',
        onDragStart: onDragStartComputer,
        onDrop: onDropComputer,
        onSnapEnd: onSnapEndComputer
    };
    playerBoard = ChessBoard('playerBoard', cfgPlayer);
    computerBoard = ChessBoard('computerBoard', cfgComputer);
    $('#myModal .save').click(function (e) {
        e.preventDefault();
        addImage(5);
        $('#myModal').modal('hide');
        //$(this).tab('show')
        return false;
    });
});