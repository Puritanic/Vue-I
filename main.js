new Vue({
	el: '#app',
	data: {
		title: 'Hello world',
		link: 'https://google.com',
	},
	computed: {
		finishedLink() {
			return `<a href=${this.link}> Google html a</a>`;
		},
	},
	methods: {
		changeTitle(e) {
			this.title = e.target.value;
		},
		sayHello() {
			this.title = 'Hello';
			return 'Say Hello To ';
		},
	},
});

new Vue({
	el: '#counter',
	data: {
		counter: 0,
		x: 0,
		y: 0,
	},
	methods: {
		incrementCounter() {
			return this.counter++;
		},
		decrementCounter() {
			return this.counter--;
		},
		updateCoords(e) {
			(this.x = e.clientX), (this.y = e.clientY);
		},
		stepUp(step, event) {
			return (this.counter += step);
		},
		dummy(e) {
			e.stopPropagation();
		},
		alertMe() {
			alert('Alert!');
		},
	},
});

new Vue({
	el: '#model',
	data: {
		name: 'Darko',
		counter: 0,
	},
	computed: {
		output() {
			return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
		},
	},
	methods: {},
});
