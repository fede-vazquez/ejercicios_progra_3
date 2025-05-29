const containerEl = document.getElementById("character-container");
const firstBtn = document.getElementById("first");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const lastBtn = document.getElementById("last");

let currentApi = "https://dragonball-api.com/api/characters";

async function fetchCharacter(url) {
    containerEl.innerHTML = `<span class="loader"></span>`;
    try {
        const res = await fetch(url);
        const data = await res.json();

        containerEl.innerHTML = "";
        displayCharacter(data.items);
        updatePagination(data.links);
    } catch (err) {
        containerEl.innerHTML = "<h1>Error al cargar los personajes</h1>";
        console.log(err);
    }
}

fetchCharacter(currentApi);
function displayCharacter(characters) {
    characters.forEach(({ image, name, race, ki }) => {
        const card = document.createElement("div");
        card.className = "character-card";
        card.innerHTML = `
        <img src=${image} alt="imagen de ${name}">
        <h3>${name}</h3>
        <p>${race}</p>
        <p>${ki}</p>
        `;
        containerEl.appendChild(card);
    });
}

function updatePagination(links) {
    if (links.previous) {
        firstBtn.onclick = () => fetchCharacter(links.first);
        prevBtn.onclick = () => fetchCharacter(links.previous);
        firstBtn.disabled = false;
        prevBtn.disabled = false;
    } else {
        firstBtn.disabled = true;
        prevBtn.disabled = true;
    }

    if (links.next) {
        nextBtn.onclick = () => fetchCharacter(links.next);
        lastBtn.onclick = () => fetchCharacter(links.last);
        nextBtn.disabled = false;
        lastBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
        lastBtn.disabled = true;
    }
}
