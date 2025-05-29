const containerEl = document.getElementById("character-container");
const paginationElementEl = document.getElementById("pagination-buttons");
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

        // nullish coalescing

        displayCharacter(data.items ?? data);

        if (data.links) {
            paginationElementEl.style.display = "block";
            updatePagination(data.links);
        } else {
            paginationElementEl.style.display = "none";
        }

        if (data.length === 0)
            throw new Error("No se a encontrado el o los personajes");
    } catch (err) {
        containerEl.innerHTML = `<p>${err}</p>`;
        console.log(err);
    }
}

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

fetchCharacter(currentApi);

// search

const searchInputEl = document.getElementById("search-input");

searchInputEl.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        const query = searchInputEl.value.trim().toLowerCase();

        if (query == "") {
            fetchCharacter(currentApi);
            return;
        }
        const allCharEl = document.querySelectorAll(".character-card");

        allCharEl.forEach(el => {
            const name = el.querySelector("h3").innerText.toLowerCase();
            if (name === query) {
                encontrado = true;
                containerEl.innerHTML = "";
                containerEl.appendChild(el);
                return;
            }
        });

        try {
            const urlToSearchByName = `${currentApi}?name=${query}`;

            fetchCharacter(urlToSearchByName);
        } catch (err) {
            containerEl.innerHTML = `<p>${err}</p>`;
        }
    }
});
