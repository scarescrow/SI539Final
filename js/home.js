var quotes = [
    {
        "id": 1,
        "quote": "Avoid the crowd. Do your own thinking independently. Be the chess player, not the chess piece.",
        "author": "Ralph Charell"
    },
    {
        "id": 2,
        "quote": "I have come to the personal conclusion that while all artists are not chess players, all chess players are artists.",
        "author": "Marcel Duchamp"
    },
    {
        "id": 3,
        "quote": "Every chess master was once a beginner.",
        "author": "Irving Chernev"
    },
    {
        "id": 4,
        "quote": "Chess makes men wiser and clear-sighted.",
        "author": "Vladimir Putin"
    },
    {
        "id": 5,
        "quote": "Chess is the gymnasium of the mind.",
        "author": "Blaise Pascal"
    },
    {
        "id": 6,
        "quote": "Chess is a war over the board. The object is to crush the opponent’s mind.",
        "author": "Bobby Fischer"
    },
    {
        "id": 7,
        "quote": "Chess is life in miniature. Chess is a struggle, chess battles.",
        "author": "Garry Kasparov"
    },
    {
        "id": 8,
        "quote": "Chess, like love, like music, has the power to make men happy.",
        "author": "Siegbert Tarrasch"
    },
    {
        "id": 9,
        "quote": "n life, as in chess, forethought wins.",
        "author": "Charles Buxton"
    },
    {
        "id": 10,
        "quote": "Play the opening like a book, the middlegame like a magician, and the endgame like a machine.",
        "author": "Rudolph Spielmann"
    },
]

prevId = 1;
function quoteCHangeFunction() {
    $(".home-quote").fadeOut(1000, function() {
        item = {'id': 1}
        while (item['id'] == prevId)
            item = quotes[Math.floor(Math.random() * quotes.length)];
        $('.home-quote-text').text('"' + item['quote'] + '"');
        $('.home-author').text('-' + item['author']);
        $('.home-quote').fadeIn(1000);
    });
}

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
    setInterval(quoteCHangeFunction, 5000);
});