//*  API IS SOMETHING THAT YOU USE TO MAKE SOMETHING COMPLEX SIMPLE
//*  API = APPLICATION PROGRAMMING INTERFACE

const baseURL = 'https://api.spacexdata.com/v2/rockets';
const searchForm = document.querySelector('form');

// const spaceShips = document.querySelector('ul');
const spaceShips = document.querySelector('table');
searchForm.addEventListener('submit', fetchSpace);
function fetchSpace() {
    event.preventDefault();
    fetch(baseURL)
        .then(result => {
            return result.json();
            // console.log(result.json());
        })
        .then(json => {
            // console.log(json);
            displayRockets(json);
        })
}
function displayRockets(json) {
    console.log('Results:', json);
    // let rockets = json.forEach( r => {
    //     let rocket = document.createElement('li');
    //     rocket.innerText = r.name;
    //     spaceShips.appendChild(rocket);
    // });
    let rockets = json.forEach( r => {
        let rocket = document.createElement('tr');
        let rocketName = document.createElement('td');
        let rocketCost = document.createElement('td');
        rocketName.innerText = r.name;
        rocketCost.innerText = r.cost_per_launch;
        spaceShips.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
    })
}


