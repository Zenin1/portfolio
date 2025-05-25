function renderImportantProjects() {
    const buttonContainer = document.querySelector(".buttonContainer");
    const displayContainer = document.querySelector(".container");

    buttonContainer.innerHTML = "";
    displayContainer.innerHTML = "";

    const tags = [
        { name: "ASSEMBLY", icon: "fas fa-globe" },
        { name: "MACHINE VISION", icon: "fas fa-desktop" },
        { name: "MICROPROCESSOR", icon: "fas fa-microchip" },
        { name: "HDL", icon: "fas fa-code" },
        { name: "NETWORKING", icon: "fas fa-network-wired" }
    ];

    const projects = [
        {
            name: "T Flip Flop",
            tag: "HDL",
            image: "https://via.placeholder.com/300x180?text=Portfolio",
            description: "A personal responsive portfolio website built with HTML, CSS, and JavaScript.",
            github: "https://github.com/Zenin1/Hardware-Description-Language",
            video: "https://www.youtube.com/embed/ZH2OT8uI8LA" // Embed link
        },
        {
            name: "Alert Vision",
            tag: "MACHINE VISION",
            image: "Alert.png",
            description: "A machine learning system that detect various types of object, but in this project it is use to detect a person and sends an email to the users email if it does.",
            github: "https://github.com/Zenin1/Machine-Vision/tree/main",
            video: "https://www.youtube.com/embed/w0ky4NdzH50" // Embed link
        },
        {
            name: "4-BIT to 13 SEGMENT DISPLAY",
            tag: "HDL",
            image: "https://via.placeholder.com/300x180?text=HDL+Project",
            description: "This is a simulation of a project I did in logic that displays the value given to us.",
            github: "https://github.com/Zenin1/Hardware-Description-Language",
            video: "https://www.youtube.com/embed/LlTlN6UiLUE" // Embed link
        },
        {
            name: "Sumobot & Hockeybot",
            tag: "MICROPROCESSOR",
            image: "https://via.placeholder.com/300x180?text=Hardware",
            description: "A bot that has 2 purpose one being a sumobot that pushes enemies off the ring and the other being a hockeybot that scores goal by being agile.",
            github: "https://github.com/Zenin1/Micropocessor",
            video: "https://www.youtube.com/embed/waIe42ua4qA" // Embed link
        },
        {
            name: "JK Flip Flop",
            tag: "HDL",
            image: "https://via.placeholder.com/300x180?text=Networking",
            description: "Real-time network traffic visualizer.",
            github: "https://github.com/Zenin1/Hardware-Description-Language",
            video: "https://www.youtube.com/embed/jBbMnLC7F04" // Embed link
        },
        {
            name: "Shift Register",
            tag: "HDL",
            image: "https://via.placeholder.com/300x180?text=Chat+App",
            description: "A real-time web chat app using WebSockets.",
            github: "https://github.com/Zenin1/Hardware-Description-Language",
            video: "https://www.youtube.com/embed/YOUR_VIDEO_ID" // Embed link
        },
        {
            name: "Network topology",
            tag: "NETWORKING",
            image: "https://via.placeholder.com/300x180?text=Sensor+Logger",
            description: "Logs sensor data over serial to SD card.",
            github: "https://github.com/yourusername/sensor-logger",
            video: "https://www.youtube.com/embed/YOUR_VIDEO_ID" // Embed link
        },
        {
            name: "UB Days simulation ",
            tag: "NETWORKING",
            image: "https://via.placeholder.com/300x180?text=Router+Sim",
            description: "Software-defined networking simulator.",
            github: "https://github.com/yourusername/router-emulator",
            video: "https://www.youtube.com/embed/YOUR_VIDEO_ID" // Embed link
        },
        {
            name: "4-BIT counter",
            tag: "HDL",
            image: "https://via.placeholder.com/300x180?text=Dashboard",
            description: "Modern desktop dashboard UI.",
            github: "https://github.com/Zenin1/Hardware-Description-Language",
            video: "https://www.youtube.com/embed/YOUR_VIDEO_ID" // Embed link
        }
    ];

    // Create tag buttons
    tags.forEach(tag => {
        const btn = document.createElement("button");
        btn.className = "tab-button icon-button";
        btn.innerHTML = `<i class="${tag.icon}"></i> ${tag.name}`;
        btn.addEventListener("click", () => renderProjects(tag.name));
        buttonContainer.appendChild(btn);
    });

    renderProjects("WEB"); // default
    function renderProjects(tag) {
        displayContainer.innerHTML = "";

        const grid = document.createElement("div");
        grid.className = "project-grid";

        projects.filter(p => p.tag === tag).forEach(project => {
            const card = document.createElement("div");
            card.className = "project-card";

            const img = document.createElement("img");
            img.src = project.image;
            img.alt = project.name;
            img.className = "project-img";
            img.addEventListener("click", () => renderProjectDetails(project));

            card.appendChild(img);
            grid.appendChild(card);
        });

        displayContainer.appendChild(grid);
    }

    function renderProjectDetails(project) {
    displayContainer.innerHTML = "";

    const detail = document.createElement("div");
    detail.className = "project-detail";

    const backBtn = document.createElement("button");
    backBtn.textContent = "← Back to Projects";
    backBtn.className = "back-button";
    backBtn.addEventListener("click", () => renderProjects(project.tag));

    const title = document.createElement("h2");
    title.textContent = project.name;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const videoContainer = document.createElement("div");
    videoContainer.className = "video-container";

    const video = document.createElement("iframe");
    video.width = "560";
    video.height = "315";
    video.src = project.video || "https://www.youtube.com/embed/dQw4w9WgXcQ";
    video.title = "Project Demo";
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video.allowFullscreen = true;

    const link = document.createElement("a");
    link.href = project.github;
    link.target = "_blank";
    link.textContent = "View on GitHub";
    link.className = "github-link";

    videoContainer.append(video, link);
    detail.append(backBtn, title, desc, videoContainer);
    displayContainer.appendChild(detail);

}


}
