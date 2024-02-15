document.addEventListener("DOMContentLoaded", function () {
    loadAndInsertYoutubeLinks();
});

function loadAndInsertYoutubeLinks() {
    fetch("../src/json/youtubeLinks.json") // Pfad zur JSON-Datei
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            const container = document.getElementById("youtubeLinks");
            container.innerHTML = ""; // Vorhandene Inhalte löschen

            // Kopfzeilen hinzufügen
            const headers = ["Link", "Themen", "Kanal"];
            headers.forEach((header) => {
                const headerDiv = document.createElement("div");
                headerDiv.classList.add("bold");
                headerDiv.textContent = header;
                container.appendChild(headerDiv);
            });

            // Video-Informationen aus der JSON-Datei einfügen
            data.videos.forEach((video) => {
                const videoDiv = document.createElement("div");
                videoDiv.innerHTML = `<span class="arrow"></span><a href="${video.link}" target="_blank">${video.title}</a>`;
                container.appendChild(videoDiv);

                const topicsDiv = document.createElement("div");
                video.topics.forEach((topic, index) => {
                    topicsDiv.innerHTML += `<a href="${
                        topic.link
                    }" class="intern">${topic.name}</a>${
                        index < video.topics.length - 1 ? ", " : ""
                    }`;
                });
                container.appendChild(topicsDiv);

                const channelDiv = document.createElement("div");
                channelDiv.innerHTML = `<span class="arrow"></span><a href="${video.channelLink}" target="_blank">${video.channel}</a>`;
                container.appendChild(channelDiv);
            });
        })
        .catch((error) =>
            console.error("Fehler beim Laden der YouTube-Links:", error)
        );
}
