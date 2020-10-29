const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //* Setting base URL for accessing API
const key = '6PVAxqNYPHNNZQx01C2iZclHD8sa6a8o'; //* setting Key for the API that was generated for us
let url; //* making a URL a variable to access later, not initializing
//* SEARCH FORM ALLOWS ACCESS TO HTML AND CSS
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
//* RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

//* RESULTS SECTION
nav.style.display = 'none'; //* setting the default page look (no navigation buttons)
let pageNumber = 0;
let displayNav = false;
        
searchForm.addEventListener('submit', fetchResults); //* looking for things to happen | once that happens, call a function
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);
                    
function fetchResults(e) { //*declaring the function fetchResults and giving it the param of e
    e.preventDefault(); //*e is in reference to the search, prevent default stops it from refreshing the page
    //* Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
        if(startDate.value !== '') { //*if there is a start date to run this
            url += '&begin_date=' + startDate.value; //* setting it so that we dont have to enter a start and end date to search
        };
        if(endDate.value !== '') {
            url += '&end_date=' + endDate.value; //* if there is an end date inputed in this run
        };
    
    fetch(url) //*this is the fetch request using the rul we made inside this function
        .then(function(result) { //*get the results
            return result.json(); //*convert the results into JSON
        }) .then(function(json) { //*function of the results in JSON
            displayResults(json); //*display JSON results with a callback function
        });
}
function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild); //* setting it so that a new search will remove old serach items without refreshing the page.
    }
    let articles = json.response.docs;
    if(articles.length === 10) {
        nav.style.display = 'block'; //*shows the nav display if 10 items are in the array
    } else {
        nav.style.display = 'none'; //*hides the nav display if less than 10 items are in the array
    }
    
    if(articles.length === 0) {
        console.log("No Results"); //* if no results, prints no results
    } else {
        for(let i = 0; i < articles.length; i++) {  //* since there are results, this is how we'll display them
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');
            let current = articles[i];
            console.log("Current:", current);
            link.href = current.web_url;
            link.textContent = current.headline.main; //*this is displaying our headlines as the clickable links
            para.textContent = 'Keywords: '; //*this pulls and displays the keywords
            for(let j = 0; j < current.keywords.length; j++) { //*sets up a for loop to print each keyword
                let span = document.createElement('span'); //*creates a span to group the individual keywords inside
                span.textContent += current.keywords[j].value + ' ';  //*adds the keyword that the for loop is currently on to the string 
                para.appendChild(span); //*adds teh para as a child of the span element
            }
            if(current.multimedia.length > 0) {  //*If it's an article, and has an image, display it
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;  //*this is telling us where to pull the image
                img.alt = current.headline.main; //*if no image, just display the available information
              }
            clearfix.setAttribute('class','clearfix'); //*keeps the element from floating
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        } //*closes the for loop
    } //*closes the else statement
}; //*closes the entire function

//*Creating buttons to define the page number.
function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    console.log("Page number:", pageNumber);
}
function previousPage(e) { //*creates a function that uses the next page button to show the next set of results
    if(pageNumber > 0) { //*if the pageNumber variable is greater than 0, then decrease the pageNumber value
        pageNumber--;
    } else { //*else, return the previous set of results
        return;
    }
    fetchResults(e);
    console.log("Page:", pageNumber);
}



// const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1 
// const key = '6PVAxqNYPHNNZQx01C2iZclHD8sa6a8o'; //2
// let url; //3

// //SEARCH FORM
// const searchTerm = document.querySelector('.search');
// const startDate = document.querySelector('.start-date');
// const endDate = document.querySelector('.end-date');
// const searchForm = document.querySelector('form');
// const submitBtn = document.querySelector('.submit');

// //RESULTS NAVIGATION
// const nextBtn = document.querySelector('.next');
// const previousBtn = document.querySelector('.prev');
// const nav = document.querySelector('nav');

// //RESULTS SECTION
// const section = document.querySelector('section');

// nav.style.display = 'none';
// let pageNumber = 0;
// let displayNav = false;

// searchForm.addEventListener('submit', fetchResults); 
// nextBtn.addEventListener('click', nextPage); //3
// previousBtn.addEventListener('click', previousPage);

// function fetchResults(e){
//     console.log(e);
// }
//  //1
//  function fetchResults(e) {
//     console.log(e); //2
//     // Assemble the full URL
//     url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3
//     console.log(url); //4
//   }
  
//   function nextPage(){
//     console.log("Next button clicked");
//   } //5
  
//   function previousPage(){
//     console.log("Next button clicked");
//   }

//   function fetchResults(e) {
//     e.preventDefault();
  
//     url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value;
  
//     if(startDate.value !== '') {
//         console.log(startDate.value)
//       url += '&begin_date=' + startDate.value;
//     };
  
//     if(endDate.value !== '') {
//       url += '&end_date=' + endDate.value;
//     };
//     fetch(url).then(function(result) {
//     //1
//     fetch(url)
//       .then(function(result) {
//       console.log(result)
//       return result.json(); //2
//     }).then(function(json) {
//         console.log(json); //3
//     });
//   })
      
//       //2
//       function displayResults(json) {
//         console.log("DisplayResults", json); 
// };


// function displayResults(json) {
//     console.log(json.response.docs);
//  };

//  function displayResults(json) {
//     let articles = json.response.docs;
//     console.log(articles);
//   };

//   function displayResults(json) {
//     let articles = json.response.docs;
  
//     if(articles.length === 0) {
//       console.log("No results");
//     } else {
//       //Display the data
//     }
//   };

//   function displayResults(json) {
//     let articles = json.response.docs;
  
//     if(articles.length === 0) {
//       console.log("No results");
//     } else {
//       for(let i = 0; i < articles.length; i++) {
//         console.log(i);
//       }
//     }
//   };

//   function displayResults(json) {
//     let articles = json.response.docs;
  
//     if(articles.length === 0) {
//       console.log("No results");
//     } else {
//       for(let i = 0; i < articles.length; i++) {
//         let article = document.createElement('article'); //1
//         let heading = document.createElement('h2'); //2
  
//         article.appendChild(heading); //3
//         section.appendChild(article); //4
//       }
//     }
//   };

//   function displayResults(json) {
//     let articles = json.response.docs;
  
//     if(articles.length === 0) {
//       console.log("No results");
//     } else {
//       for(let i = 0; i < articles.length; i++) {
//         let article = document.createElement('article');
//         let heading = document.createElement('h2');
//         let link = document.createElement('a');
//         let img = document.createElement('img');
//         let para = document.createElement('p');
//         let clearfix = document.createElement('div');
  
//         let current = articles[i];
//         console.log("Current:", current);
  
//         link.href = current.web_url;
//         link.textContent = current.headline.main;
//       }
//     }
//   };

//   function displayResults(json) {
//     while (section.firstChild) {
//         section.removeChild(section.firstChild); //1
//   };
//     if(articles.length === 10) {
//       nav.style.display = 'block'; //shows the nav display if 10 items are in the array
//     } else {
//         for(let i = 0; i < articles.length; i++) {
//           let article = document.createElement('article');
//           let heading = document.createElement('h2');
//           let link = document.createElement('a');
//           let para = document.createElement('p');   //1
//           let clearfix = document.createElement('div'); //2
    
//           let current = articles[i];
//           console.log("Current:", current);
    
//           link.href = 'http://www.nytimes.com' + current.multimedia[0];
//           link.textContent = current.headline.main;
    
//           para.textContent = 'Keywords: ';
    
//           for(let j = 0; j < current.keywords.length; j++) {
//             let span = document.createElement('span');   
//             span.textContent += current.keywords[j].value + ' ';   
//             para.appendChild(span);
//           }
    
//           clearfix.setAttribute('class','clearfix');
    
//           article.appendChild(heading);
//           heading.appendChild(link);
//           article.appendChild(para);
//           article.appendChild(clearfix);
//           section.appendChild(article);
//         }
//       }
//     };

//     function displayResults(json) {
//         //CODE OMITTED
//      } else {
//      for(let i = 0; i < articles.length; i++) {
//          let article = document.createElement('article');
//          let heading = document.createElement('h2');
//          let link = document.createElement('a');
//          let img = document.createElement('img');  //1
//          let para = document.createElement('p');  
//          let clearfix = document.createElement('div');
   
   
//          for(let j = 0; j < current.keywords.length; j++) {
//            let span = document.createElement('span');   
//            span.textContent += current.keywords[j].value + ' ';   
//            para.appendChild(span);
//          }
   
//            //2
//          if(current.multimedia.length > 0) {
//            //3
//            img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
//            //4
//            img.alt = current.headline.main;
//          }
   
//          clearfix.setAttribute('class','clearfix');
   
//          article.appendChild(heading);
//          heading.appendChild(link);
//          article.appendChild(img); //5
//          article.appendChild(para);
//          article.appendChild(clearfix);
//          section.appendChild(article);
//        }
//     }