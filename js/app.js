import { renderDashboard } from "./view-dashboard.js";
import { renderDetail } from "./view-detail.js";

const returnOriginalStyles = () => {
    const mainDashBoard = document.getElementById("main__dashboard");
    mainDashBoard.style.display = "grid";

    const mainContent = document.getElementById("main__content");
    mainContent.style.display = "flex";
    mainContent.style.flexDirection = "column";
};

//renderDashboard();

// if(window.location.search.includes("?country=")) {
//     console.log("if");
//     document.getElementById("main__content__filters").style.display = "none";
//     renderDetail();
// }
// else {
//     console.log("else");
//     returnOriginalStyles();
//     renderDashboard();
// }