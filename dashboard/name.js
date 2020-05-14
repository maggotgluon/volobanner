const nameInput = document.getElementById('name')
const donationInput = document.getElementById('donation')

function update() {
	const data = {name: nameInput.value, donation: donationInput.value}
	document.getElementById('ctr').className+=' is-loading';

   	console.log("data : "+data);
	nodecg.sendMessage('showLowerthird', data);
}