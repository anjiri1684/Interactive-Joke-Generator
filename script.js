const jokeEl = document.getElementById('joke')
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);
generateJoke();

async function generateJoke(){
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });

    const joke = await jokeRes.json();

    jokeEl.innerHTML = joke.joke;
}