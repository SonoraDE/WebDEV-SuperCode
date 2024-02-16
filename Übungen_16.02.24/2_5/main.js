const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

let filteredSingers = singers;

const tableBuild = () => {
    const output = document.querySelector("#table-container");
    let table = `
    <table> 
    <tr> 
    <th>Name</th> 
    <th>Country</th> 
    <th>Period Active</th> 
    <th>Genre</th> 
    </tr>
    `

    filteredSingers.forEach((item) => {
    table += `
        <tr>
        <td> ${item.name} </td>
        <td> ${item.country} </td>
        <td> ${item.period_active.start}
        ${item.period_active.end} </td>
        <td> ${item.genre} </td>
        </tr>
    `
    });
    output.innerHTML = table + "</table>";
};

tableBuild();

//! FUNKTION
const searchName = () => {
    let searchWord = document.querySelector("#searchbar").value;
    const filterWord = singers.filter(singer => singer.name.toLowerCase().replace(" ", "").includes(searchWord.toLowerCase().replace(" ", "")));
    filteredSingers = filterWord;
    //console.log(filterWord);
    console.log(filteredSingers);

    if(filterWord.length === 0) {
        alert("Bitte überprüfe deine Angaben. Es ist ein Fehler unterlaufen oder der Künstler existiert nicht in unserer Liste.");
    } else {
        tableBuild(); 
    }
};
