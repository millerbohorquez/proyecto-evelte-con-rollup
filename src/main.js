import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Miller',
		lastName: 'Bohorquez'
	}
});

export default app;