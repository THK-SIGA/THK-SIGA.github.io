document.addEventListener("DOMContentLoaded", function () {
    loadAndInsertContent();
});

function loadAndInsertContent() {
    fetch("../src/json/toolLinks.json") // Passen Sie den Pfad zur JSON-Datei an
        .then((response) => response.json())
        .then((data) => {
            insertContent(data); // Ruft Ihre bereits definierte Funktion auf
        })
        .catch((error) =>
            console.error("Fehler beim Laden der JSON-Daten:", error)
        );
}

// Funktion zum Einfügen der Inhalte, wie bereits definiert
function insertContent(data) {
    const container = document.getElementById("toolLinks");
    container.innerHTML = ""; // Leert den Container vor dem Einfügen neuer Inhalte
    data.tools.forEach((tool) => {
        const toolDiv = document.createElement("div");
        toolDiv.classList.add("tool");
        const linkDiv = document.createElement("div");
        linkDiv.classList.add("link");
        const descDiv = document.createElement("div");
        descDiv.classList.add("description");

        toolDiv.textContent = tool.name;
        linkDiv.innerHTML = `<span class="arrow"></span><a href="${tool.link}" target="_blank">${tool.link}</a>`;
        descDiv.textContent = tool.description;

        container.appendChild(toolDiv);
        container.appendChild(linkDiv);
        container.appendChild(descDiv);
    });
}
