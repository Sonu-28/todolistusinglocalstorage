const list = document.getElementById('ul-list');
const input = document.getElementById('item');
const btn = document.getElementById('btn');
const del = document.getElementsByClassName('fa-solid');
console.log(del)
let arr = [];
window.addEventListener('load', ()=>{
    arr = JSON.parse(localStorage.getItem('todo')) || [];
    arr.forEach(element => {
        list.innerHTML += element;
    });
})

 btn.addEventListener('click', function(e){
      e.preventDefault();
      if(input.value != ""){
        list.innerHTML += `<li>${input.value}<i class="fa-solid fa-trash-can"></i></li>`;
        arr.push(`<li>${input.value}<i class="fa-solid fa-trash-can"></i></li>`);
        localStorage.setItem("todo", JSON.stringify(arr));
    } else {
        alert('Input Field is empty');
    }
    input.value = "";
 })

//  for(var i = 0; i< del.length; i++){
//      del[i].addEventListener('click', function(){
//         del[i].parentElement.remove();
//      })
//  }

// const del = document.getElementById('del');

// del.addEventListener('click', )