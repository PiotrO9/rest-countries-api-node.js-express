const ContinentSelect = document.querySelector("#ContinentSelect");
const SearchCountryInput = document.querySelector("#query");

let serverAddress = "http://localhost:3000";

ContinentSelect.addEventListener("change", function() {
    if(this.selectedIndex) {
        window.location.replace(serverAddress + `/region/${this.value}`);
    }
});

SearchCountryInput.addEventListener("keyup", function(e) {
    if(e.keyCode === 13)
    {
        window.location.replace(serverAddress + `/searchCountry/${this.value.toLowerCase()}`);
    }
});