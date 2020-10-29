/*
v---returns a promise
fetch()
    .then(x) // if you use one callback, that is on Fulfilled
    .then(x, y) // x will happen if Fulfilled
                   y will happen if Rejected
    .catch(x) // this will happen if Rejected
  
    
fetch()
    .then(x<if worked>, y<if failed>)

fetch()
    .then(x) < if it worked
    .catch(x) < if it failed

const result = await fetch();
const json = await result.json();
console.log(json)
*/

const request = async () => {
    const response = await fetch('https://random.dog/woof.json')
    const json = await response.json();
    return json
}

request().then(json => {
    console.log(json);
})

const request = async () => {
    let response = await fetch ('https://swapi.dev/api/people/1/');
    let json = await resonse.json();
    console.log(json);
    return json
  }
  
  request().then(json => {
    console.log(json)
  });