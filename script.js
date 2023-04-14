let input = document.getElementById('value')
function tivAvelachnum(value){
    let input = document.getElementById('value')
    input.value += value;    
}


////------add .
let bool;
let number = function(start,end){
  for(let i = start; i <= end;i++){
    if(input.value[i] === '.'){
     return bool = false;
    }
  }
  return bool = true;
}

function dot(){
  let start = 0;
  let end = input.value.length - 1;
  for(let i = 0; i <= end; i++){
    if(input.value[i] === '+'){
      number(start,i);
      number(i,end);
      start = i;
    }
    if(input.value[i] === '*'){
      number(start,i)
      number(i,end);
      start = i;
    }
    if(input.value[i] === '-'){
      number(start,i)
      number(i,end);
      start = i;
    }
    if(input.value[i] === '/'){
      number(start,i)
      number(i,end);
      start = i;
    }
  }
  
}
function dotAdd(){
  dot()
  if(bool === true){
    input.value += '.'
  }
}
///----
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
