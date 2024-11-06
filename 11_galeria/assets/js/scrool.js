let scrollContainer = document.querySelectorAll(".galeria_box")
console.log(scrollContainer)
for (let sCr of scrollContainer){
    sCr.addEventListener("wheel", (event) =>{
        event.preventDefault();
        console.log(event.deltaY)
        sCr.scrollLeft += event.deltaY;
        console.log(sCr.scrollLeft)
    });
}