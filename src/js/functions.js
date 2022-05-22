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
