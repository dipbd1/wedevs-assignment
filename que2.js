let notifications = [
	{ message: 'Lorem', read: true },
	{ message: 'Ipsum', read: true },
	{ message: 'Dolor', read: true },
	{ message: 'Sit', read: false },
	{ message: 'Amet', read: true },
];
let allRead = false;

let length = 0;
let firstTime = 0;
let falseCounter = 0;

function readCheck(notifi){
    if(length == 0 && firstTime ==0){
        length = notifi.length
        firstTime++;
    }
    length--;
    if(length == -1 && falseCounter>0){
        console.log('came here false');
        return false;
    }
    if(length == -1 && falseCounter == 0){
        console.log('came here true');
        return true;
    }
    if(notifi[length]['read'] == false){
        falseCounter++;
    }
    return readCheck(notifications);
}

let i = readCheck(notifications);

console.log(i);