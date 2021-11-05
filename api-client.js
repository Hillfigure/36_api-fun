async function getData(query) {

    const apiUrl = query;

    try {
        return await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        } catch (error) {
            console.log(error);
        }
}

const showPoke = document.querySelector(".show-poke");

let getRandomPokemon = () => Math.floor(Math.random() * 800);

function initPoke () {
    showPoke.addEventListener("click", async function () {
        let randomPoke = await getData(`https://pokeapi.co/api/v2/pokemon/${getRandomPokemon()}`);
        console.log(randomPoke);
        const mainContent = document.querySelector(".main-content");
        mainContent.innerHTML = "";

        const firstPoke = mainContent.appendChild(document.createElement("li"));
        firstPoke.innerHTML = randomPoke.name;

        const firstPokeImg = mainContent.appendChild(document.createElement("img"));
        firstPokeImg.classList.add("poke-card");
        firstPokeImg.src = randomPoke.sprites.other["official-artwork"].front_default;

        const height = mainContent.appendChild(document.createElement("li"))
        const weight = mainContent.appendChild(document.createElement("li"))
        height.innerHTML = "Height: " + randomPoke.height;
        weight.innerHTML = "Weight: " + randomPoke.weight;
    })
}

initPoke();