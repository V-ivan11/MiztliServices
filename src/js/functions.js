import {saveEmail} from './firebase.js'

const alerts = window.sweetalert2;

const form =  document.getElementById('suscripcion');
const tabSites = document.getElementById('btn_sites');
const tabMedia = document.getElementById('btn_media');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = form['email'];

    saveEmail(email.value)

    form.reset()
    
});



function cambiarCategoria(option) {
    var btn_sites = document.getElementById("btn_sites");
    var btn_media = document.getElementById("btn_media");

    var cardLeft = document.getElementById("cardLeft");
    var cardMain = document.getElementById("cardMain");
    var cardRight = document.getElementById("cardRight");

    var on = "inline-block p-4 text-myBlue rounded-t-lg border-b-2 border-myBlue active";
    var off = "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:border-gray-300 hover:text-gray-300"

    var planWebBasic = ""

    if (option == 1) {
        btn_sites.className = on;
        btn_media.className = off;

        cardLeft.innerHTML = "web";
        cardMain.innerHTML = "web";
        cardRight.innerHTML = "web";
    } else {
        btn_sites.className = off;
        btn_media.className = on;

        cardLeft.innerHTML = "media";
        cardMain.innerHTML = "media";
        cardRight.innerHTML = "media";
    }
}