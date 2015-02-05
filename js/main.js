function howdy() {
    console.log( "Richard Kalehoff says hi!" );
}

howdy();

var numba = function stringLengthChecker( string ) {
    if (string.length < 7 ){
        console.log( "What a short little word!" );
    } else if (string.length > 7 ){
        console.log( "I'm sorry, but that’s too many to count." );
    } else {
        console.log( "7, what a perfect choice!" );
    }
}

numba( "7" );
numba( "seventy" );
numba( "university" );

function inception( callback, value ) {
    callback( value );
}

function functionGettingPassed( messageBeingReceived ) {
    console.log( messageBeingReceived );
}

inception( functionGettingPassed, "LOTR is a fantastic movie." );
