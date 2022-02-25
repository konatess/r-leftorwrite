// import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import LogInOut from './LogInOut';
import { useState, useEffect } from 'react';
const server = 'http://localhost:3001'


function App() {
	const [body, setBody] = useState({}); // this is the body from /user
	const [updated, setUpdated] = useState('no');
	const [error, setError] = useState('');

	useEffect(() => {
		fetch(`${server}/user`, {
			credentials: 'include' // fetch won't send cookies unless you set credentials
		})
		.then(response => response.json())
		.then(
			(response) => {
				setBody(response);
				setUpdated('yes');
			},
			(error) => {
				setError(error);
			}
		);
	});

	return (
		<div className="App">
			<header>
				<h1>FusionAuth Example: React</h1>
				<Greeting body={body}/>
          		<LogInOut body={body} uri={server}/>
			</header>
			<p>Updated: {updated}</p>
		</div>
	);
}

export default App;
