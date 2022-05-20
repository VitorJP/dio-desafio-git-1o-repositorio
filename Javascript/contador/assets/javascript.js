var numberWrapper = document.getElementById('number');
var count = 0;

function increment() {
    if(count<10){
        count++;
        numberWrapper.innerHTML = count;
    }
}

function decrement() {
    if(count>0){
        count--;
        numberWrapper.innerHTML = count;
    }
}
