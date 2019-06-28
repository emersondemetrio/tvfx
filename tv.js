const hclass = [
	'go1',
	'go2',
	'go3'
];

const rnb = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

const get = () => {
	const r = [];
	const a = Array.from(Array(2400), (i, v) => v);

	for (let index = 0; index < 40; index++) {
		r.push(a.splice(0, 50));
	}

	return r;
};

const firstState = () => {
	get()
		.forEach((row, rindex) => {
			document
				.getElementById('div')
				.innerHTML += `
					<div class="row row-${rindex}">
						${row.map((v, lindex) => `<div class="item item-${rindex}-${lindex}"></div>`).join('')}
					</div>
				`;
		});
};

const sort = () => {
	const items = Array.from(document.getElementsByClassName('item'));
	items.forEach(item => {
		let style = `opacity: ${Math.random()}`;
		item.setAttribute('style', style);
	});

	setTimeout(sort, 100);
}

const init = () => {
	firstState();
	sort();
};
