/* Open the sidenav */
var daddy = document.getElementById("header1");
var newItem = document.createElement("button");
newItem.id = "backArrow";
daddy.insertBefore(newItem, daddy.firstChild);

/* Close/hide the sidenav */
newItem.onclick = function closeNav () {
    newItem.style.display = "none";
    document.getElementById("menuContainer").style.display = "inline-block";
    document.getElementById("mySidenav").style.width = "0";
}

function openNav() {
    document.getElementById("menuContainer").style.display = "none";
    newItem.style.display = "block";
    document.getElementById("mySidenav").style.width = "100%";
}

