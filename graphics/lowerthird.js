import {gsap} from '../node_modules/gsap/index.js';

const nameplateEl = document.getElementById('nameplate')
const nameEl = document.getElementById('name')
const donationEl = document.getElementById('donation')

nodecg.listenFor('showLowerthird', (newVal) => {
	nameEl.innerHTML = newVal.name;
	donationEl.innerHTML = "Donate: "+newVal.donation+" THB";

	const tl = gsap.timeline();

	tl.from([nameplateEl, nameEl, donationEl], 1, {width: 0});

	tl.to([nameplateEl, nameEl, donationEl], 1, {width: 0}, "+=4");

	tl.call(() => {
		nameEl.innerHTML = "";
		donationEl.innerHTML = "";
	})
	tl.set([nameplateEl, nameEl, donationEl], {width: ""})
	// request Request (4) Duplicate 
})

