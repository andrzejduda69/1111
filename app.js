const settings = {
    actualPageIdx : 9, //INDEX WYBRANEJ STRONY
    entriesOnPage : 50, //MAX ZWRACANA ILOSC ELEMENTOW
}

const dataEntries = [];

for(let i = 0; i < 1000; i++){
    dataEntries.push(`element ${i}`)
}

const paginateArray = (dataEntries, settings) => {
    
    let startPetli = (settings.entriesOnPage * 20) - 50;  

    let koniecPetli = startPetli + 50;

    let entriesOnSelectedPage = dataEntries.slice(startPetli, koniecPetli);
    for (let i = 0; i < entriesOnSelectedPage.length; i++){
        let dataEntry = entriesOnSelectedPage[i];
    }
    console.log(entriesOnSelectedPage);
    return entriesOnSelectedPage
}

paginateArray(dataEntries, settings);