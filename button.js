const button1 = document.getElementById("buttonofi");

button1.addEventListener("click", function () {
    if (button1.style.right != "500px") {
        button1.style.backgroundColor = "#000000";
        button1.style.color = "#ffffff";
        button1.style.transform = "rotate(90deg)";
        button1.style.right = 500 + "px";
    } else {
        button1.style.backgroundColor = "";
        button1.style.color = "";
        button1.style.transform = "rotate(0deg)";
        button1.style.right = 10 + "px";
    }
});