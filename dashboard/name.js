const nameInput = document.getElementById('name')
const donationInput = document.getElementById('donation')

function update() {
	const data = {name: nameInput.value, donation: donationInput.value}
	document.getElementById('ctr').className+=' is-loading';

	nodecg.sendMessage('showLowerthird', data);

	document.getElementById('ctr').className-=' is-loading';
}