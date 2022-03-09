// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import strings from "./constants/strings";
import dbFunctions from './constants/dbFunctions';
import NewUser from './components/NewUser';
import Container from './components/Container';
import Header from './components/Header';
import Footer from './components/Footer';
const server = 'http://localhost:3001';


function App() {
	const [user, setUser] = useState({}); 
	// const [body, setBody] = useState({});
	const [updated, setUpdated] = useState(false);
	const [error, setError] = useState({});
	const [updatedUser, setUpdatedUser] = useState({});

	useEffect(() => {
		if (!updated || (user.id && new Date() > new Date(user.exp * 1000)) ) {
			fetch(`${server}/user`, {
				credentials: 'include' // fetch won't send cookies unless you set credentials
			})
			.then(response => response.json())
			.then(
				(response) => {
					setUser(response.user || {});
					// setBody(response);
					setUpdated(true);
				},
				(error) => {
					setError(error || {});
				}
			);
		}
		if (updatedUser.updated) {
			let userObj = user;
			userObj.displayName = updatedUser.updated;
			setUser(userObj);
			setUpdatedUser({});
		}
	});

	return (
		<div className="App">
			<Header 
				pagename={strings.name} 
				btn={user.id ? strings.logout : strings.login}
				message={user.displayName ? strings.hello.concat(user.displayName) : strings.loginMsg}
				path={user.id ? strings.routes.logout : strings.routes.login}
				uri={server}
			/>
			<Container/>
			{/* <p>Updated: {updated ? 'yes' : 'no'}</p> */}
			{/* {error.errorMessage && <span>{error.errorMessage}</span>} */}
			{updatedUser.updated && <span> {updatedUser.updated} </span>}
			{/* <p>{JSON.stringify(body)}</p> */}
			{/* <p>{user.id ? JSON.stringify(user) : "no exp"}</p> */}
			{/* <p>{user.id && new Date(user.exp * 1000).toLocaleString()}</p> */}
			{user.displayName === strings.defaultUsername && <NewUser 
				uri={`${server}/user/${user.id}`}
				user={user.displayName}
				responseState={setUpdatedUser}
				errorState={setError}
				changeUsername={dbFunctions.changeUsername}
				changeName={setUser}
				error={updatedUser.errorMessage || ''}
			/>}
			<Footer/>
		</div>
	);
}

export default App;
