document.addEventListener("DOMContentLoaded", function () {
    loadAndInsertInternetLinks();
});

function loadAndInsertInternetLinks() {
    fetch("../src/json/internetLinks.json") // Pfad zur JSON-Datei anpassen
        .then((response) => response.json())
        .then((data) => {
            const container = document.getElementById("internetLinks");
            container.innerHTML = ""; // Vorhandene Inhalte löschen

            // Kopfzeilen hinzufügen
            const headers = ["Link", "Themen", "letzter Zugriff"];
            headers.forEach((header) => {
                const headerDiv = document.createElement("div");
                headerDiv.classList.add("bold");
                headerDiv.textContent = header;
                container.appendChild(headerDiv);
            });

            // Daten für jeden Link einfügen
            data.links.forEach((link) => {
                const urlDiv = document.createElement("div");
                urlDiv.innerHTML = `<span class="arrow"></span><a href="${link.url}" target="_blank">${link.url}</a>`;
                container.appendChild(urlDiv);

                const topicsDiv = document.createElement("div");
                link.topics.forEach((topic, index) => {
                    topicsDiv.innerHTML += `<a href="SIGA_${topic}.html" class="intern">${topic}</a>${
                        index < link.topics.length - 1 ? ", " : ""
                    }`;
                });
                container.appendChild(topicsDiv);

                const lastAccessDiv = document.createElement("div");
                lastAccessDiv.textContent = link.lastAccess;
                container.appendChild(lastAccessDiv);
            });
        })
        .catch((error) =>
            console.error("Fehler beim Laden der Internet-Links:", error)
        );
}
