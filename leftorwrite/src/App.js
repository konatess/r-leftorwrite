// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import NewUser from './components/NewUser';
import Header from './components/Header';
import strings from "./constants/strings"
import Footer from './components/Footer';
const server = 'http://localhost:3001'


function App() {
	const [body, setBody] = useState({}); // this is the body from /user
	const [updated, setUpdated] = useState(false);
	const [error, setError] = useState('');
	const [created, setCreated] = useState(false);
	// const [dbUser, setDbUser] = useState({});

	useEffect(() => {
		if (!updated || (body.user && new Date() > new Date(body.user.exp * 1000)) ) {
			fetch(`${server}/user`, {
				credentials: 'include' // fetch won't send cookies unless you set credentials
			})
			.then(response => response.json())
			.then(
				(response) => {
					setBody(response);
					setUpdated(true);
					setCreated(response.db.created);
				},
				(error) => {
					setError(error);
				}
			);
		}
	});

	return (
		<div className="App">
			<Header 
				pagename={strings.name} 
				message={body.user ? strings.logout : strings.login}
				path={body.user ? strings.routes.logout : strings.routes.login}
				uri={server}
			/>
			{/* <p>Updated: {updated ? 'yes' : 'no'}</p> */}
			{/* <p>{error}</p> */}
			{/* <p>{body.user && new Date() <= new Date(body.user.exp * 1000) ? 'not exp' : 'expired or not logged in'}</p> */}
			{/* <p>{dbUser}</p> */}
			{/* <p>{body.user ? JSON.stringify(body) : "no exp"}</p> */}
			{/* <p>{body.user && new Date(body.user.exp * 1000).toLocaleString()}</p> */}
			{created && <NewUser username={body.db.dbUser.displayName}></NewUser>}
			<Footer/>
		</div>
	);
}

export default App;
