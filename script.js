// adds 1 in input
let btn1 = document.getElementById("vaule1");
btn1.addEventListener('click',function(){
    let input = document.getElementById("value")
    input.value += '1'
})    
// adds 2 in input
let btn2 = document.getElementById("vaule2");
btn2.addEventListener('click',function(){
    let input = document.getElementById("value")
    input.value += '2'
})
// adds 3 in input
let btn3 = document.getElementById("vaule3");
btn3.addEventListener('click',function(){
    let input = document.getElementById("value")
    input.value += '3'
})
// adds 4 in input
let btn4 = document.getElementById("vaule4");
btn4.addEventListener('click',function(){
    let input = document.getElementById("value")
    input.value += '4'
})
// adds 5 in input
let btn5 = document.getElementById("vaule5");
btn5.addEventListener('click',function(){
    let input = document.getElementById("value")
    input.value += '5'
})

// adds 6 in input
let btn6 = document.getElementById("vaule6");
btn6.addEventListener('click',function(){
    let input = document.getElementById("value")
    input.value += '6'
})
// adds 7 in input
let btn7 = document.getElementById("vaule7");
btn7.addEventListener('click',function(){
    let input = document.getElementById("value")
    input.value += '7'
})

// adds 8 in input
let btn8 = document.getElementById("vaule8");
btn8.addEventListener('click',function(){
    let input = document.getElementById("value")
    input.value += '8'
})

// adds 9 in input
let btn9 = document.getElementById("vaule9");
btn9.addEventListener('click',function(){
    let input = document.getElementById("value")
    input.value += '9'
})
// adds 0 in input
let btn0 = document.getElementById("vaule0");
btn0.addEventListener('click',function(){
    let input = document.getElementById("value")
    input.value += '0';
})

//adds . in input
let btnKet = document.getElementById("ket");
btnKet.addEventListener("click",function(){
    let input = document.getElementById('value')
    for(let i = 0; i < input.value.length - 1;i++){
        if(input.value[i] === '.'){
            input.value += '';
        }
    }
    input.value += '.';
})



let havasar = document.getElementById('havasar');
havasar.addEventListener('click',function(){
    let input = document.getElementById('value');
    if(input.value[input.value.length - 1] === '+' || input.value[input.value.length - 1] === '-' || input.value[input.value.length - 1] === '/' || input.value[input.value.length - 1] === '*'){
        return alert("sxala");
    }
    let result = eval(input.value);
    input.value = result;
})

// delete input value
let jnjel = document.getElementById('jnjel');
jnjel.addEventListener('click',function(){
    let input = document.getElementById('value')
    input.value = '';
})

function chechk(value){
    let input = document.getElementById('value')
    let lastValue = input.value.slice(-1);

    if (opertor(lastValue) && opertor(value)) {
      input.value = input.value.slice(0, -1) + value;
    } else {
      input.value += value;
    }
  }
  
  function opertor(value) {
    return ['+', '-', '*', '/'].includes(value);
  }