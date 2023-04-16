let input = document.getElementById('value')
let bool;
let index;
let checkDot1;
function tivAvelachnum(value){
    let input = document.getElementById('value')
    input.value += value;
}
////--------.
let number = function(start,end){
  for(let i = start; i <= end;i++){
    if(input.value[i] === '.'){
     return bool = false;
    }
  }
  return bool = true;
}

function dot(){
  let end = input.value.length - 1;
  for(let i = 0; i <= end; i++){
    if(input.value[i] === '+'){
      number(i,end);
    }
    if(input.value[i] === '*'){
      number(i,end);
    }
    if(input.value[i] === '-'){
      number(i,end);
    }
    if(input.value[i] === '/'){
      number(i,end);
    }
  }
}


function checkDot(){

  for(let i = 0;i <= input.value.length - 1; i++){
    if(input.value[i] === '+'){
      return checkDot1 = false;
    }
    if(input.value[i] === '-'){
      return checkDot1 = false;
    }
    if(input.value[i] === '*'){
      return checkDot1 = false;
    }
    if(input.value[i] === '/'){
      return checkDot1 = false;
    }
    if(input.value[i] === '.'){
      return checkDot1 = false;
    }
  }
  return checkDot1 = true;
}

function dotAdd(){
  let lastValue = input.value.slice(-1)
  if(lastValue === '+'){
    return input.value += '0.'
  }
  if(lastValue === '*'){
    return input.value += '0.'
  }
  if(lastValue === '-'){
    return input.value += '0.'
  }
  if(lastValue === '/'){
    return input.value += '0.'
  }
  if(lastValue === ''){
    return input.value += ''
  }
  dot()
  checkDot()
  if(checkDot1 === true){
    input.value += '.'
  }
  if(bool === true){
    input.value += '.'
  }
}
///--------.....

//let havasar = document.getElementById('havasar');
function havasar(){
    let input = document.getElementById('value');
    if(input.value[input.value.length - 1] === '+' || input.value[input.value.length - 1] === '-' || input.value[input.value.length - 1] === '/' || input.value[input.value.length - 1] === '*'){
        return alert("sxala");
    }
    let result = eval(input.value);
    input.value = result;
}

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
        if(lastValue === '.'){
          input.value += `0` 
        }
        input.value += value;
    }
}
  
  function opertor(value) {
    return ['+', '-', '*', '/'].includes(value);
}




input.addEventListener('keypress',function(e){
  if(e.key === 'Enter'){
    havasar()
  }
})