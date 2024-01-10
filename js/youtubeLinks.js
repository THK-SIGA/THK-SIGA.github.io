// Funktion zum Abrufen der JSON-Daten
async function fetchJSONData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

// Funktion zum direkten Hinzufügen des HTML-Codes zum Ziel-DIV
function addToYoutubeLinks(data) {
    const youtubeLinksDiv = document.getElementById('youtubeLinks');
    if (!youtubeLinksDiv) {
        console.error('Element with ID "youtubeLinks" not found');
        return;
    }

    data.forEach(item => {
        const div = document.createElement('div');
        const a = document.createElement('a');
        a.href = item.url;
        a.textContent = item.title;

        if (item.isExternal) {
            a.target = '_blank';
            const span = document.createElement('span');
            span.className = 'arrow';
            div.appendChild(span);
        } else {
            a.className = 'intern';
        }

        div.appendChild(a);
        youtubeLinksDiv.appendChild(div);
    });
}

fetchJSONData('../src/json/youtubeLinks.json').then(addToYoutubeLinks);