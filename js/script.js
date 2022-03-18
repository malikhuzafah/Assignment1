


var tabButtons = document.getElementsByClassName("btn");
var tabPanels = document.getElementsByClassName("tabPanel");

function showPanel(panelIndex) {
    var el = document.querySelector('#tab');
    el.scrollIntoView;

    for (var i=0;i<tabButtons.length;i++) {
        tabButtons[i].style.backgroundColor = "";
        tabButtons[i].style.color="";
    }
    tabButtons[panelIndex].style.backgroundColor = "#1e1e1e";
    tabButtons[panelIndex].style.color = "#f2d974";
    for (var i=0;i<tabPanels.length;i++) {
        tabPanels[i].style.display = "none";
    }
    tabPanels[panelIndex].style.display = "block";
    tabPanels[panelIndex].style.backgroundColor = "#1e1e1e";
}

window.onload = function () {
    tabButtons[2].style.backgroundColor = "#1e1e1e";
    tabButtons[2].style.color = "#f2d974";
    tabPanels[2].style.display = "block";
    tabPanels[2].style.backgroundColor = "#1e1e1e";
};



