document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".icon-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove 'pressed' class from all buttons
      buttons.forEach(btn => btn.classList.remove("pressed"));

      // Add 'pressed' class to the clicked button
      button.classList.add("pressed");
    });
  });
});
function setActiveButton(buttonId) {
    // Reset all buttons
    document.querySelectorAll('.nav-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Set the clicked one as active
    const button = document.getElementById(buttonId);
    if (button) button.classList.add('active');

    // Get containers
    const buttonContainer = document.querySelector(".buttonContainer");
    const contentContainer = document.querySelector(".container");

    // Clear containers
    buttonContainer.innerHTML = "";
    contentContainer.innerHTML = "";

    // Show appropriate content based on buttonId
    if (buttonId === "homeButton") {
        renderHome();
    } else if (buttonId === "profileButton") {
        renderProfile();
    } else if (buttonId === "teamButton") {
        renderTeam();
    } else if (buttonId === "projectsButton") {
        renderImportantProjects(); // Make sure this is defined in projects.js
    }
}
