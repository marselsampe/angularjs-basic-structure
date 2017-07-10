function errorHandler(){
    function throwError( exception ){
        console.log('Error \nname : ' + exception.name + '\nmessage : ' + exception.message + '\ndetail : ' + exception.stack);
    }

    return throwError;
}