const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = 'mL25MGOW/xtCwpgr8GPLMA==7KNriaOkYcucfFuP';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

const apiUrl = 'https://api.api-ninjas.com/v1/jokes?limit=1';

async function getJoke() {
  try {
    jokeEl.textContent = 'Loading....';
    btnEl.disabled = true;
    btnEl.textContent = 'Updating..';

    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data[0].joke);
    btnEl.disabled = false;
    btnEl.textContent = 'Tell Me A Joke';
    jokeEl.textContent = data[0].joke;
  } catch (error) {
    jokeEl.textContent = 'An Error As Occured, Please Try Again!';
    btnEl.disabled = false;
    btnEl.textContent = 'Tell Me A Joke';
    console.log(error);
  }
}

btnEl.addEventListener('click', getJoke);
