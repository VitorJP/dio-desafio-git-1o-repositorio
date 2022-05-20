function mapComThis(arr, arg){
    newArr = arr.map(
        function(item){
            return item * this.value;
        }, arg
    );
    return newArr;
}

function mapSemThis(arr, arg){
    newArr = arr.map(
        function(item){
            return item * arg;
        }, arg
    );
    return newArr;
}

function filterPares(arr){
    newArr = arr.filter(pares);
    return newArr;

    function pares(item){
        return item % 2 == 0;
    }
}

function reduceSoma(arr){
    result = arr.reduce(
        function(prev, current){
            return prev + current;
        }
    );
    return result;
}

function reduceSubtraçao(arr){
    result = arr.reduce(
        function(prev, current){
            return prev - current;
        }, 50
    )
    return result;
}

array = [1, 2, 3, 4, 5];

const multiplicador = {
    value: 5,
}
const mult = 3;

console.log(mapComThis(array, multiplicador))
console.log(mapSemThis(array, mult))
console.log(filterPares(array))
console.log(reduceSoma(array))
console.log(reduceSubtraçao(array))
