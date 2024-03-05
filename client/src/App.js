import { useEffect } from 'react';

function App() {
	const getData = async () => {
		try {
			const result = await fetch('/bacon');
			const parsedResult = await result.json();
			console.log(parsedResult.data);
		} catch (err) {
			console.log(err);
		}
	};

	console.log('hello');

	useEffect(() => {
		getData();
	}, []);
	return <div>hello</div>;
}

export default App;
