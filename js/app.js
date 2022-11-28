import { renderDashboard } from "./view-dashboard.js";
import { renderDetail } from "./view-detail.js";

const returnOriginalStyles = () => {
    const mainDashBoard = document.getElementById("main__dashboard");
    mainDashBoard.style.display = "grid";

    const mainContent = document.getElementById("main__content");
    mainContent.style.display = "flex";
    mainContent.style.flexDirection = "column";
};

if(window.location.search.includes("?country=")) {
    document.getElementById("main__content__filters").style.display = "none";
    renderDetail();
}
else {
    returnOriginalStyles();
    renderDashboard();
}