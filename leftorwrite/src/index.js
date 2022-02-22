// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import LogInOut from './LogInOut';
const config = require('./config');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: {
        // user: { email: 'test' }
      }, // this is the body from /user
      updated: 'no'
    };
  }

  componentDidMount() {
    fetch(`${config.server}/user`, {
      credentials: 'include' // fetch won't send cookies unless you set credentials
    })
    .then(response => response.json())
    .then(
      (response) => {
        this.setState({
          body: response,
          updated: 'yes'
        });
      },
      (error) => {
        this.setState({
          error: error
        })
      }
    );
  }

  render() {
    return (
      <div id='App'>
        <header>
          <h1>FusionAuth Example: React</h1>
          <Greeting body={this.state.body}/>
          <LogInOut body={this.state.body} uri={config.server}/>
        </header>
        <div>Updated: {this.state.updated}</div>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));