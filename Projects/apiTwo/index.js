let date = new Date();
let apiKey = "bZRSedp2HajEYvnifXg8IS5dvtgeqLspUB1U44dH";

function loadImage() {
    let dateFormat = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    let apiString = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateFormat}`

    const request = async () => {
        let response = await fetch (apiString);
        let json = await response.json();
        return json;
    }

    request().then(json => {
        console.log(json);

        if (json.media_type == "image") {
            document.getElementById("apod").src=json.hdurl
            document.getElementById("apod").style="display:block;"
            document.getElementById("apodVid").style="display:none;"
        } else if (json.media_type == "video") {
            document.getElementById("apodVid").src=json.url
            document.getElementById("apod").style="display:none;"
            document.getElementById("apodVid").style="display:block;"
        }

        document.getElementById("apodName").innerText=json.title
        document.getElementById("apodDescription").innerText=json.explanation
        document.getElementById("apodDate").innerText=dateFormat
    });
}

function changeDate(dateChange) {
    let today = new Date();
    let newDate = new Date(date);

    newDate.setDate(newDate.getDate() + dateChange);

    if(newDate.getTime() > today.getTime()) {
        console.log("You cannot go into the future... yet!");
        return false;
    }

    date = newDate;
    loadImage();
}

loadImage();