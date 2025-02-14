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

change_button(geoHidden, geoBtn)
change_button(bioHidden, bioBtn)
change_button(objHidden, objBtn)

function change_button(bool, button) {
    if (!bool) {
        button.classList.add("switched")
    }
}

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
        geoBtn.classList.add("switched");
    } else if (any([bioHidden, objHidden])) {
        geo.setAttribute('class', 'hidden');
        geoHidden = true;
        geoBtn.classList.remove("switched")
    }
})

bioBtn.addEventListener('click', function () {
    if (bioHidden) {
        bio.setAttribute('class', 'main');
        bioHidden = false;
        bioBtn.classList.add("switched")
    } else if (any([geoHidden, objHidden])) {
        bio.setAttribute('class', 'hidden');
        bioHidden = true;
        bioBtn.classList.remove("switched")
    }
})

objBtn.addEventListener('click', function () {
    if (objHidden) {
        obj.setAttribute('class', 'main');
        objHidden = false;
        objBtn.classList.add("switched")
    } else if (any([bioHidden, geoHidden])) {
        obj.setAttribute('class', 'hidden');
        objHidden = true;
        objBtn.classList.remove("switched")
    }
})