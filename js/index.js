"use strict";

const geoBtn = document.getElementById('geoBtn')
const bioBtn = document.getElementById('bioBtn')
const objBtn = document.getElementById('objBtn')
const geo = document.getElementById('geo')
const bio = document.getElementById('bio')
const obj = document.getElementById('obj')


let geoHidden = geo.getAttribute('class') === 'hidden';
let bioHidden = bio.getAttribute('class') === 'hidden';
let objHidden = obj.getAttribute('class') === 'hidden';

geoBtn.addEventListener('click', function () {
    if(geoHidden){
        geo.setAttribute('class', 'main');
        geoHidden = false;
    }
    else {
        geo.setAttribute('class', 'hidden');
        geoHidden = true;
    }
})

bioBtn.addEventListener('click', function () {
    if(bioHidden){
        bio.setAttribute('class', 'main');
        bioHidden = false;
    }
    else {
        bio.setAttribute('class', 'hidden');
        bioHidden = true;
    }
})

objBtn.addEventListener('click', function () {
    if(objHidden){
        obj.setAttribute('class', 'main');
        objHidden = false;
    }
    else {
        obj.setAttribute('class', 'hidden');
        objHidden = true;
    }
})