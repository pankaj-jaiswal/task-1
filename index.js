console.log('THis is todo list project ');

let add = document.querySelector('#add');
let list = document.querySelector('#list');

add.onclick = (e) =>{
    e.preventDefault();
    let listItem = document.querySelector('#listItem');
    console.log(listItem);



    if(listItem.value !== ''){
        let el = document.createElement('li');
        el.innerHTML = listItem.value;
        let removebtn =document.createElement("button");
        removebtn.className = "close";
        removebtn.innerHTML = "\u00D7";
        el.appendChild(removebtn);
        list.appendChild(el);
        listItem.value="";
        el.addEventListener("click", (e) => {
            e.target.style.textDecoration = "line-through";

        })
        removebtn.addEventListener("click", (e) => {
            e.target.parentElement.style.display = "none";
        
        });

    }else{
        alert("No input\n Write Something!!");
    }
    

}