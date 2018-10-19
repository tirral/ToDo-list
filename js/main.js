var mainButton = document.getElementById('add');
var toDoList = [];

if (localStorage.getItem('todo') != undefined){
  toDoList = JSON.parse(localStorage.getItem('todo'));
  out();
}



mainButton.addEventListener('click', mainButtonClick );

function mainButtonClick () {

var inputValue = document.getElementById('in').value;
var tmp = {};
tmp.todo = inputValue;
tmp.chek = false;
var i = toDoList.length;
toDoList[i] = tmp;

console.log(toDoList);
out ();
localStorage.setItem('todo', JSON.stringify(toDoList));

}






function out (){

var out = '';
for (var key in toDoList){
if (toDoList[key].check == true){
  out += '<input type ="checkbox" checked >'
}
else{
  out += '<input type ="checkbox">'
}




out += toDoList[key].todo + '<br>';

}

document.getElementById('out').innerHTML = out;

}
