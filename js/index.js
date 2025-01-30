"use strict";

const geoBtn = document.getElementById('geoBtn');
const bioBtn = document.getElementById('bioBtn');
const objBtn = document.getElementById('objBtn');
const geo = document.getElementById('geo');
const bio = document.getElementById('bio');
const obj = document.getElementById('obj');


let geoHidden = geo.getAttribute('class') === 'hidden';
let bioHidden = bio.getAttribute('class') === 'hidden';
let objHidden = obj.getAttribute('class') === 'hidden';

function any(arr) {
    let res = false;
    for (let i = 0; i < arr.length; i++) {
        res ||= !arr[i];
    }
    return Boolean(res);
}

geoBtn.addEventListener('click', function () {
    if (geoHidden) {
        geo.setAttribute('class', 'main');
        geoHidden = false;
        geoBtn.style.background = "#454545";
        geoBtn.style.transform = "scale(105%)";
    } else if (any([bioHidden, objHidden])) {
        geo.setAttribute('class', 'hidden');
        geoHidden = true;
        geoBtn.style.background = "#202020";
        geoBtn.style.transform = "scale(100%)";
    }
    console.log(bioHidden, objHidden);
})

bioBtn.addEventListener('click', function () {
    if (bioHidden) {
        bio.setAttribute('class', 'main');
        bioHidden = false;
        bioBtn.style.background = "#454545";
        bioBtn.style.transform = "scale(105%)";
    } else if (any([geoHidden, objHidden])) {
        bio.setAttribute('class', 'hidden');
        bioHidden = true;
        bioBtn.style.background = "#202020";
        bioBtn.style.transform = "scale(100%)";
    }
    console.log([geoHidden, objHidden]);
})

objBtn.addEventListener('click', function () {
    if (objHidden) {
        obj.setAttribute('class', 'main');
        objHidden = false;
        objBtn.style.background = "#454545";
        objBtn.style.transform = "scale(105%)";
    } else if (any([bioHidden, geoHidden])) {
        obj.setAttribute('class', 'hidden');
        objHidden = true;
        objBtn.style.background = "#202020";
        objBtn.style.transform = "scale(100%)";
    }
})