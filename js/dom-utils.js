const createCountryItemElement = (country) => {
    //Creating tile element
    const countryTile = document.createElement("div");
    countryTile.classList.add("tile");

    //Creating image container with image
    const imageTile = document.createElement("div");
    imageTile.classList.add("tile__image");
    const image = document.createElement("img");
    image.src = country.flagUrl;
    imageTile.appendChild(image);
    console.log(country.flagUrl);
    countryTile.appendChild(imageTile);

    //Creating tile content container
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("tile__content");

    //Creating tile content name container
    const tileContentName = document.createElement("div");
    tileContentName.classList.add('tile__content__Name');

    if((country.name).length > 25)
    {
        tileContentName.classList.add("smallerNameFontSize");
    }

    const anchorElement = document.createElement("a");
    anchorElement.innerHTML = country.name;
    anchorElement.href = `?country=${country.code}`;
    tileContentName.appendChild(anchorElement);
    contentContainer.appendChild(tileContentName);

    //Creating tile content population
    const tileContentPopulation = document.createElement("div");
    tileContentPopulation.classList.add("tile__content__population");

    const statNamePopulation = document.createElement("strong");
    statNamePopulation.innerHTML = "Population: ";
    tileContentPopulation.appendChild(statNamePopulation);

    const amountOfPopulation = document.createElement("p");
    amountOfPopulation.innerHTML = country.population;
    tileContentPopulation.appendChild(amountOfPopulation);
    contentContainer.appendChild(tileContentPopulation);

    //Creating tile content region
    const regionOfCountry = document.createElement("div");
    regionOfCountry.classList.add("tile__content__region");

    const statNameRegion = document.createElement("strong");
    statNameRegion.innerHTML = "Region: ";
    regionOfCountry.appendChild(statNameRegion);

    const region = document.createElement("p");
    region.innerHTML = country.region;
    regionOfCountry.appendChild(region);
    contentContainer.appendChild(regionOfCountry);

    //Creating tile content capital
    const tileContentCapital = document.createElement("div");
    tileContentCapital.classList.add("tile__content__capital");

    const statNameCapital = document.createElement("strong");
    statNameCapital.innerHTML = "Capital: ";
    tileContentCapital.appendChild(statNameCapital);

    const capital = document.createElement("p");
    capital.innerHTML = country.capital;
    tileContentCapital.appendChild(capital);
    contentContainer.appendChild(tileContentCapital);

    countryTile.appendChild(contentContainer);
    return countryTile;
}

const createDetailButton = (text, link) => {
    const anchorElement = document.createElement("a");
    anchorElement.innerText = text;
    anchorElement.classList.add("detail-button");
    anchorElement.href = link;

    return anchorElement;
};

export const renderCountriesList = (countries) => {
    const rootElement = document.getElementById("main__dashboard");
    rootElement.innerHTML = "";
    
    countries.forEach((country) => {
        rootElement.appendChild(createCountryItemElement(country));
    });
}

export const renderCountryDetails = (country) => {
    const rootElement = document.getElementById("main__dashboard");
    rootElement.innerHTML = `
    <div class="back__container">
                    <a href="/">Go back</a>
                </div>
                <div id="CountryDetail">
                    <div id="Country__flag">
                        <img src="${country.flagUrl}" alt="${country.name}">
                    </div>
                    <div id="Country__datas">
                        <h2 class="country-datas-header">${country.name}</h2>
                        <div class="datas__container">
                            <p><strong>Native name: </strong>${country.nativeName}</p>
                            <p><strong>Population: </strong>${country.population}</p>
                            <p><strong>Region: </strong>${country.region}</p>
                            <p><strong>Sub region: </strong>${country.subregion}</p>
                            <p><strong>Capital: </strong>${country.capital}</p>
                            <p><strong>Currency: </strong>${country.currencies}</p>
                            <p><strong>Languages: </strong>${country.languages}</p>
                        </div>
                        <div id="Country__border">
                            <p>Border Countries: </p>
                        </div>
                    </div>
                </div>
    `;
    renderBorderCountries(country);
}

const renderBorderCountries = (country) => {
    if(country.borders && country.borders.length > 0)
    {
        const mainContainer = document.createElement("div");
        mainContainer.setAttribute("id", "borders-container");

        country.borders.forEach((border) => {
            const borderCountry = document.createElement("a");
            borderCountry.setAttribute("href", `/?country=${border}`)
            borderCountry.classList.add("border-item");
            borderCountry.innerHTML = `${border}`
            mainContainer.appendChild(borderCountry);
        });

        document.getElementById("Country__border").appendChild(mainContainer);
    }
}

document.getElementById("themeMode__container").addEventListener("click", function(){
    const tiles = document.querySelectorAll(".tile");
    for (const tile of tiles) {
        tile.classList.toggle("light-mode");
    }
    const header = document.querySelector("header");
    header.classList.toggle("light-mode");

    const headerContent = document.querySelector(".header__content");
    headerContent.classList.toggle("light-mode");

    const headerH1 = document.querySelector(".header__content h1");
    headerH1.classList.toggle("light-mode");

    const themeContainer = document.getElementById("themeMode__container");
    themeContainer.classList.toggle("light-mode");
    
    const mainContainer = document.querySelector("main");
    mainContainer.classList.toggle("main-light-mode");

    const bodyContainer = document.querySelector("body");
    bodyContainer.classList.toggle("main-light-mode");

    const datasContainer = document.querySelector(".datas__container");
    datasContainer.classList.toggle("main-light-mode");

    const datasHeader = document.querySelector(".country-datas-header");
    datasHeader.classList.toggle("main-light-mode");

    const countryBorder = document.getElementById("Country__border");
    countryBorder.classList.toggle("main-light-mode");

    const borderItems = document.querySelectorAll(".border-item");
    for(const border of borderItems) {
        if(border.style.color == "black") {
            border.style.color = "white";
        }
        else {
            border.style.color = "black";
        }
    }
});