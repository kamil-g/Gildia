document.querySelector("#pl").addEventListener("click", function(){ switchLanguage("pl") });
document.querySelector("#en").addEventListener("click", function(){ switchLanguage("en") });

switchLanguage("pl");

function switchLanguage(lng)
{
    let language = "";

    language = lng;

    document.querySelector("#en").style.border = null;
    document.querySelector("#pl").style.border = null;
    document.querySelector("#" + language).style.border = "1px solid white";

    if (language == "en")
    {
        document.querySelector("#homeLink").innerHTML = "Home"
        document.querySelector("#aboutLink").innerHTML = "About us"
        document.querySelector("#projectsLink").innerHTML = "Projects"
        document.querySelector("#contactLink").innerHTML = "Contact"
        document.querySelector("#motto").innerHTML =  "<h1>Looking for the studio? Here We are!</h1>" 
        document.querySelector("#showMore").innerHTML =  "Show more"
        document.querySelector("#technologies").innerHTML =  "Check out our social media:"
        document.querySelector("#description").innerHTML = "<p>Hello! Three of friends maintaining studio.</p><p>Studio located near Rzeszów. We deal with recordings and movies, creation and implementation. Passionate, technician and logistics! Being successful, we help you make your dreams come true. We want you are available several of our projects!</p>"
        document.querySelector("#toAbout").innerHTML =  "About us"
        document.querySelector("#toProjects").innerHTML =  "Our projects"
        document.querySelector("#emailSend").value = "Send"
        document.querySelector("#title").innerHTML = "Passion in creation."

    }
    else if (language == "pl")
    {
        document.querySelector("#homeLink").innerHTML = "Strona główna"
        document.querySelector("#aboutLink").innerHTML = "O nas"
        document.querySelector("#projectsLink").innerHTML = "Projekty"
        document.querySelector("#contactLink").innerHTML = "Kontakt"
        document.querySelector("#motto").innerHTML =  "<h1>Szukasz studio? Jesteśmy tutaj!</h1>"      
        document.querySelector("#showMore").innerHTML =  "Pokaż więcej"
        document.querySelector("#technologies").innerHTML =  "Odwiedź nasze media społecznościowe:"
        document.querySelector("#description").innerHTML = "<p>Witamy, trójka znajomych tworzących Studio nagraniowe! Oto Gildia.</p><p>Studio zlokalizowane w pobliżu Rzeszowa. Zajmujemy się nagraniami i filmami, tworzeniem i realizacją. Pasjonat, technik i logistyk!  Odnosząc sukcesy pomagamy ludziom spełniać marzenia. Chcemy przedstawić wam kilka z naszych projektów!</p>"
        document.querySelector("#toAbout").innerHTML =  "O nas"
        document.querySelector("#toProjects").innerHTML =  "Nasze projekty"
        document.querySelector("#emailSend").value = "Wyślij"
        document.querySelector("#title").innerHTML = "Pasja w tworzeniu."
    }
}

document.querySelector("#homeLink").addEventListener("click", function(){ navi("topnav") });
document.querySelector("#aboutLink").addEventListener("click", function(){ navi("#toAbout") });
document.querySelector("#projectsLink").addEventListener("click", function(){ navi("#toProjects") });
document.querySelector("#contactLink").addEventListener("click", function(){ navi("#contact") });

function navi(x)
{
    document.querySelector(x).scrollIntoView();
}

let currentScrollY = window.scrollY;

window.onscroll = function(){

    currentScrollY = window.scrollY;
    
    if (currentScrollY > 0)
    {
        this.document.querySelector("#nav").style.background = "linear-gradient(to right, rgb(215, 215, 215), rgb(240, 240, 240), rgb(215, 215, 215)";
        this.document.querySelector("#nav").style.color = "rgb(30,30,30)";

    }
    else if (currentScrollY == 0)
    {
        this.document.querySelector("#nav").style.background = "none";
        this.document.querySelector("#nav").style.color = "rgb(215, 215, 215)";
    }
}

document.querySelector("#showMore").addEventListener("click", function(){
    document.querySelector("#b6").style.display = "flex";
    document.querySelector("#b7").style.display = "flex";
    document.querySelector("#b8").style.display = "flex";
    document.querySelector("#showMore").style.display = "none";
});

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

let totallyNecessaryVariable = 4;

document.querySelector("#logo-image").addEventListener("click", function(){
    totallyNecessaryFunction();
});

function totallyNecessaryFunction()
{
    if(totallyNecessaryVariable != 0)
    {
        totallyNecessaryVariable--;
    }
    else
    {
        document.querySelector("topnav").style.background = "linear-gradient(rgba(5, 5, 5, 0.9), rgba(15, 15, 15, 0.9)), url('graphics/smile.jpg') no-repeat center center fixed";
        document.querySelector("#motto").innerHTML =  "<h1>^^</h1>"
    }
}

 function info(item)
 {
     
 }

let menu = false;

 document.querySelector("#menu").addEventListener("click", function(){
    menu = !menu;
    if(menu)
    {
        document.querySelector("#links").style.display = "block";
        document.querySelector("#nav").style.background = "linear-gradient(to right, rgba(215, 215, 215, 1), rgba(240, 240, 240, 1), rgba(215, 215, 215, 1))";
        document.querySelector("#nav").style.color = "rgb(50,50,50)";
    }
        
    else
    {
        document.querySelector("#links").style.display = "none";
    }
 });

 //linear-gradient(to right, rgba(215, 215, 215, 1), rgba(240, 240, 240, 1), rgba(215, 215, 215, 1))

 // ustawic cos z buttonami <button class="boxBtn" id="bb1"  onclick="openInNewTab('https://kapvr.github.io/');">Live View</button>

