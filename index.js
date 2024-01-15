//select the elements to be modified
let listElements = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");


//loops through all list elements and adds the function to it
for(let list of listElements){
    list.addEventListener("dragstart", function(e){
        let selected = e.target;
//prevents the default settings in the right box which prevents it from dropping in elements
        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
//allows us to drop objects in the box and appends the info in the selected variable
        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        })
//prevents the default settings in the left box which prevents it from dropping in elements
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        })
//allows us to drop objects in the box and appends the info in the selected variable
        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        })


    })
}