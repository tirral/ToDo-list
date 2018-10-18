var mainButton = document.getElementById('add');
var toDoList = [];





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
}






function out (){

var out = '';
for (var key in toDoList){

out += toDoList[key].todo + '<br>';

}

document.getElementById('out').innerHTML = out;

}
