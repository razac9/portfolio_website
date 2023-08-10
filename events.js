const favDropDown = document.querySelector("select");
const choice = document.getElementById("select");
const song = document.getElementById("song");
const movie = document.getElementById("movie");
const game = document.getElementById("game");
const food = document.getElementById("food");

favDropDown.addEventListener("change", event => {
    event.preventDefault();
    if (favDropDown.value == ""){
        choice.style.display = "block";
        song.style.display = "none";
        movie.style.display = "none";
        game.style.display = "none";
        food.style.display = "none";
    }
    else if (favDropDown.value == "boogie"){
        choice.style.display = "none";
        song.style.display = "block";
        song.innerHTML = '<iframe width="1068" height="601" src="https://www.youtube.com/embed/jA_q7GXdKcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        movie.style.display = "none";
        movie.innerHTML = "";
        game.style.display = "none";
        game.innerHTML = "";
        food.style.display = "none";
    }
    else if (favDropDown.value == "gump"){
        choice.style.display = "none";
        song.style.display = "none";
        song.innerHTML = "";
        movie.style.display = "block";
        movie.innerHTML = '<iframe width="1068" height="601" src="https://www.youtube.com/embed/bLvqoHBptjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        game.style.display = "none";
        game.innerHTML = "";
        food.style.display = "none";
    }
    else if (favDropDown.value == "ops2"){
        choice.style.display = "none";
        song.style.display = "none";
        song.innerHTML = "";
        movie.style.display = "none";
        movie.innerHTML = "";
        game.style.display = "block";
        game.innerHTML = '<iframe width="1068px" height="601px" src="https://www.youtube.com/embed/x3tedlWs1XY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        food.style.display = "none";
    }
    else if (favDropDown.value == "chicken"){
        choice.style.display = "none";
        song.style.display = "none";
        song.innerHTML = "";
        movie.style.display = "none";
        movie.innerHTML = "";
        game.style.display = "none";
        game.innerHTML = "";
        food.style.display = "block";
    }

});

funFacts = ["-> I came to America at the age of 8.", "-> My favorite high school class was AP Physics 1.", "-> I have lived in 12 different homes.", "-> I can read and write Arabic.", "-> I am a competitive person."]

const factButton = document.querySelector("button");
const factItem = document.getElementById("funfact");

factItem.style.paddingLeft = "20px";


factButton.addEventListener("click", e => {
    e.preventDefault();
    randomFact = funFacts[Math.floor(Math.random() * funFacts.length)]
    factItem.innerText = randomFact; 
})