let btn = document.querySelector(".submit");
let ul = document.querySelector("ul");

let username = document.querySelector(".username");
let post = document.querySelector(".post");

btn.addEventListener("click", function(){
    let item = document.createElement("li");

    let h4name = document.createElement("h4");
    let ppost = document.createElement("p");

    if(username.value == "" || post.value == ""){
        alert("Fill the Blanks")
    }

    h4name.innerText = "@" + username.value;
    ppost.innerText = post.value;

    console.log(ppost)
    console.log(h4name)

    item.appendChild(h4name);
    item.appendChild(ppost);
    ul.appendChild(item);

    delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete"); 

    item.appendChild(delBtn);

    username.value = "";
    post.value = "";
    console.log("ButtonClicked!");
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        event.target.parentElement.remove()
        console.log("Delete Button Pressed!!");
    }
})


// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     console.log("selected");
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }