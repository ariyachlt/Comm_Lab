// adding an event to turn the home button white when the cursor is hovering over it and back to black when it leaves
let homeButton = document.getElementById("home_button")
homeButton.style.color = "black";
homeButton.addEventListener('mouseenter', () => {
    homeButton.style.color = "white";
})
homeButton.addEventListener('mouseleave', () => {
    homeButton.style.color = "black";
})

// adding an event to turn the projects button white when the cursor is hovering over it and back to black when it leaves
let projectsButton = document.getElementById("projects_button")
projectsButton.style.color = "black";
projectsButton.addEventListener('mouseenter', () => {
    projectsButton.style.color = "white";
})
projectsButton.addEventListener('mouseleave', () => {
    projectsButton.style.color = "black";
})

// adding an event to toggle between the on and off status of the hamburger menu
let hamburgerIcon = document.getElementById("imgClickAndChange")
let displayMenuOptions = document.getElementById("display_menu")
hamburgerIcon.addEventListener('click', () => {
    // condition to check which image (of the hamburger menu) is displayed when click
    if(hamburgerIcon.src == "https://i.imgur.com/vVVlQlT.png"){
        hamburgerIcon.src = "https://i.imgur.com/rjH7EKR.png"
        displayMenuOptions.style.display = "flex"                       // changing the attribute to "flex" displays the home and program buttons
    } else {
        hamburgerIcon.src = "https://i.imgur.com/vVVlQlT.png"
        displayMenuOptions.style.display = "none"                       // changing the attribute back to "none" hides the home and program buttons
    }
})