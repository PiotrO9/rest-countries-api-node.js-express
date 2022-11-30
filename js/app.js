const ContinentSelect = document.querySelector("#ContinentSelect");
const SearchCountryInput = document.querySelector("#query");

ContinentSelect.addEventListener("change", function() {
    if(this.selectedIndex) {
        window.location.replace(`http://localhost:3000/region/${this.value}`);
    }
});

SearchCountryInput.addEventListener("keyup", function(e) {
    if(e.keyCode === 13)
    {
        window.location.replace(`http://localhost:3000/searchCountry/${this.value.toLowerCase()}`);
    }
});