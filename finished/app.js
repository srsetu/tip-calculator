document.querySelector('#tip-form').onchange = function () {
	// Selecting Elements
	const bill = Number(document.querySelector('#totalBill').value);
	const tip = document.querySelector('#tipInput').value;
	const tipOutput = document.querySelector('#tipOutput');
	const tipAmount = document.querySelector('#tipAmount');
	const totalBillWithTip = document.querySelector('#totalBillWithTip');
	const results = document.querySelector('#results');

	// Calculation
	const tipValue = bill * (tip / 100);
	const finalBill = bill + tipValue;

	tipAmount.value = tipValue.toFixed(2);
	totalBillWithTip.value = finalBill.toFixed(2);

	// Showing Results
	tipOutput.innerHTML = `${tip}%`;
	results.style.display = 'block';
};
