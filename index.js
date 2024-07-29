const btns = document.getElementById("btn");
const close = document.getElementById("close");
const container = document.getElementById("container");
btns.addEventListener('click',function () {
    document.getElementById('card2').style.visibility = "visible";
    const x = container.classList.add("modal2")
    
})

close.addEventListener('click',function () {
    document.getElementById('card2').style.visibility = "hidden";
    container.classList.remove("modal2")
})