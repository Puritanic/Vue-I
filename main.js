new Vue({
	el: '#app',
	data: {
		title: 'Hello world',
		link: 'https://google.com',
	},
	methods: {
		changeTitle(e) {
			this.title = e.target.value;
		},
		sayHello() {
			return 'Hello to ';
		},
	},
});
