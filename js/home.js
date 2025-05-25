function renderHome() {
    buttonContainer.innerHTML = ""; // Clear existing

    // Add responsive grid container
    buttonContainer.style.display = "grid";
    buttonContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(180px, 1fr))";
    buttonContainer.style.gap = "1rem";
    buttonContainer.style.padding = "1rem";

    importantProjects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.style.backgroundColor = "#2a2a2a";
        card.style.borderRadius = "10px";
        card.style.overflow = "hidden";
        card.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.transition = "transform 0.2s";
        card.onmouseover = () => card.style.transform = "scale(1.03)";
        card.onmouseout = () => card.style.transform = "scale(1)";

        // Thumbnail (dummy for now)
        const img = document.createElement("img");
        img.src = project.thumbnail || "https://via.placeholder.com/300x200?text=Project"; // Replace with real thumbnail
        img.alt = project.title;
        img.style.width = "100%";
        img.style.height = "auto";
        img.style.aspectRatio = "16/9";
        img.style.objectFit = "cover";

        const content = document.createElement("div");
        content.style.padding = "0.5rem";
        content.style.fontSize = "0.8rem";
        content.style.color = "#fff";

        const title = document.createElement("h4");
        title.textContent = project.title;
        title.style.margin = "0 0 0.3rem";
        title.style.fontSize = "1em";
        title.style.color = "#bb86fc";

        const desc = document.createElement("p");
        desc.textContent = project.description;
        desc.style.margin = "0";
        desc.style.lineHeight = "1.2";

        content.appendChild(title);
        content.appendChild(desc);

        card.appendChild(img);
        card.appendChild(content);

        buttonContainer.appendChild(card);
    });
}