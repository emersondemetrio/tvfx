const setFirstState = () => {
	const all = [];
	const width = 100; //document.body.clientWidth;
	const height = 60; //document.body.clientHeight;

	for (let row = 0; row < height; row++) {
		for (let line = 0; line < width; line++) {
			const color = Math.random() > 0.5 ? '#000' : '#fff';
			const rect = `<rect x="${line}" y="${row}" width="1" height="1" class="item" fill="${color}" />`;
			all.push(rect);
		}
	}

	document.getElementById('main').innerHTML = all.join('');
};

const sort = () => {
	const items = Array.from(document.getElementsByClassName('item'));

	items.forEach((item) => {
		// Set random fill color to simulate noise
		const color = Math.random() > 0.5 ? '#000' : '#fff';
		item.setAttribute('fill', color);
	});

	// Use requestAnimationFrame for the next frame
	requestAnimationFrame(sort);
};

const init = () => {
	setFirstState();
	// sort(); memory leak
};

// Initialize the animation
init();
