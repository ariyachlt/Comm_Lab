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

let hamburgerIcon = document.getElementById("imgClickAndChange")
let displayMenuOptions = document.getElementById("display_menu")
hamburgerIcon.addEventListener('click', () => {
    if(hamburgerIcon.src == "https://i.imgur.com/vVVlQlT.png"){
        hamburgerIcon.src = "https://i.imgur.com/rjH7EKR.png"
        displayMenuOptions.style.display = "flex"
    } else {
        hamburgerIcon.src = "https://i.imgur.com/vVVlQlT.png"
        displayMenuOptions.style.display = "none"
    }
})


/*

    if (displayMenuOptions.style.display == "none") {
        displayMenuOptions.style.display = "flex";
    } else {
        displayMenuOptions.style.display = "none";
    }


*/