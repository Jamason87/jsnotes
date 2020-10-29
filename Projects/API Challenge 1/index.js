let statsYear = 2020;

const request = async () => {
    let response = await fetch ('https://ergast.com/api/f1/' + statsYear + '.json');
    let json = await response.json();
    return json;
}

function getData() {

    statsYear = document.getElementById("statsYear").value;

    refreshStats(); //call refreshStats function

    return false;
}

function refreshStats() {
    request().then(json => {
        console.log(json.MRData.RaceTable.Races);

        let raceStatsTable = document.getElementById("raceStats");
        raceStatsTable.innerHTML = "";

        for (let i = 0; i < json.MRData.RaceTable.Races.length; i++) {
            //console.log(json.MRData.RaceTable.Races[i]);

            let RaceData = json.MRData.RaceTable.Races[i];

            let domString = `
            <tr>
                <td>${RaceData.round}</td>
                <td>${RaceData.raceName}</td>
                <td>${RaceData.date} @ ${RaceData.time}</td>
                <td>${RaceData.Circuit.circuitName}</td>
                <td>${RaceData.Circuit.Location.locality}, ${RaceData.Circuit.Location.country}</td>
            </tr>
            `

            raceStatsTable.innerHTML += domString;
        }

    });
}

refreshStats(); //call refreshStats function