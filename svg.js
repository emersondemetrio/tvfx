const setFirstState = () => {
	const all = [];

	const width = 100//document.body.clientWidth;
	const height = 60//document.body.clientHeight;

	for (let row = 0; row < height; row++) {
		for (let line = 0; line < width; line++) {
			const rect = `<rect x="${line}" y="${row}" width="1" height="1" class="item" />`;
			all.push(rect);
		}
	}

	document.getElementById('main').innerHTML = all.join('');
}

const sort = () => {
	const items = Array.from(document.getElementsByClassName('item'));
	items.forEach(item => {
		let style = `fill-opacity: ${Math.random()}`;
		item.setAttribute('style', style);
	});

	setTimeout(sort, 1 + Math.random());
}

const init = () => {
	setFirstState();
	sort();
};
