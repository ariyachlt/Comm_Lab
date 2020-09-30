let hamburgerIcon = document.getElementById("imgClickAndChange")
hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.src = hamburgerIcon.bln ? "hamburger_open.png" : "hamburger_close.png";
    //text = "<a id='home_button' href='index.html'>home</a>"
    //homeButton.innerText = text
    hamburgerIcon.bln = !hamburgerIcon.bln;
})

console.log(hamburgerIcon.src)
console.log(hamburgerIcon.bln)

let homeButton = document.getElementById("home_button")
homeButton.style.color = "black";
homeButton.addEventListener('mouseenter', () => {
    homeButton.style.color = "white";
})
homeButton.addEventListener('mouseleave', () => {
    homeButton.style.color = "black";
})

let projectsButton = document.getElementById("projects_button")
projectsButton.style.color = "black";
projectsButton.addEventListener('mouseenter', () => {
    projectsButton.style.color = "white";
})
projectsButton.addEventListener('mouseleave', () => {
    projectsButton.style.color = "black";
})