function cardFlip() {
	var el = document.getElementById('card');
	if (el.className == 'card') {
		el.setAttribute('class', 'card flip');
	} else {
		el.setAttribute('class', 'card');
	}
}