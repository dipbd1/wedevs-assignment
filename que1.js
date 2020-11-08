let n = 5;
let message = "hello world"

function printer(n , message){
    if( n != 0){
        console.log(message);
        n--
        return printer(n, message)
    }
}

printer(n, message);