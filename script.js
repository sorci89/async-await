const renderCountryNames = (countries)=> {
    let returnHtml = "";

    for (c of countries) {
        returnHtml += `
        <div>${c.name.official}</div>`
    }
    return returnHtml;
}

const renderCountryFlags = (countries)=> {
    let returnHtml = "";

    for (c of countries) {
        returnHtml += `
        <img src="${c.flags.png}">`
    }
    return returnHtml;
}

async function loadEvent() {
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    console.log(renderCountryNames(countryArr));
    document.getElementById("root").insertAdjacentHTML("beforeend", `<div id="countryNames">${renderCountryNames(countryArr)}</div>`);
    document.getElementById("root").insertAdjacentHTML("beforeend", `<div id="countryFlags">${renderCountryFlags(countryArr)}</div>`);
}

window.addEventListener("load", loadEvent);