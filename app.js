let arr = [];

const container = document.querySelector('.data-container');
const containerList = document.querySelectorAll('.data-container');
const ul = document.createElement('ul');

container.insertBefore(ul, container.firstChild);
const dataTarget = document.body.querySelector('ul');
var i = 0;


while (i < data.length ) {
  arr.push(data[i].first_name + ' ' + data[i].last_name);
  i = i + 1;
}


for ( var x = 0; x < arr.length; x++ ) {
  const newItem = document.createElement('li');
  dataTarget.appendChild(newItem);
  dataTarget.children[x].id = x;
  dataTarget.children[x].innerHTML = arr[x];
}

const input = document.getElementById('search');
input.addEventListener( 'keyup', () => {

  var self = input;
  var val = self.value;
  val = val.toLowerCase();
  if ( !val == '') {
    console.log(val);
    arrSearch(dataTarget, val);
  } else {
    arrSearch(dataTarget, '')
  }

}, false);


function arrSearch(list, val) {

  var i = 0;
  while ( i < list.children.length ) {
    var getItem = list.children[i].innerHTML;
    getItem = getItem.toLowerCase();
    if (getItem.includes(val)) {
      list.children[i].style.display = '';
    } else {
      list.children[i].style.display = 'none';
    }
    i++
  }
}
