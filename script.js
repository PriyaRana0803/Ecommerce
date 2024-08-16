let card = document.querySelector(".trend");
let card2 = document.getElementById("trendsec");
let about = document.querySelector(".about");
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");
let contact = document.querySelector(".contact");

function homes() {
    mainPage.style.display = "flex";
    card.style.display = "black";
    card2.style.display = "black";
    blog.style.display = "block";
    about.style.display = "none";
    document.getElementById("blog").style.color = "#black";
    document.getElementById("home").style.color = "6f0c0c";
    document.getElementById("shop").style.color = "#black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "#black";
}

function shops() {
    mainPage.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    card.style.display = "black";
    card2.style.display = "black";
    document.getElementById("blog").style.color = "#black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "#6f0c0c";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "#black";
}

function blogs() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "block";
    about.style.display = "none";
    document.getElementById("blog").style.color = "#6f0c0c";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "#black";
}

function abouts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "block";
    document.getElementById("blog").style.color = "#black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "#6f0c0c";
}

function showContact() {  // Renamed the function to showContact
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "#6f0c0c";
    document.getElementById("about").style.color = "#black";
}
