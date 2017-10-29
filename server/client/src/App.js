import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { Container } from 'semantic-ui-react';
import LeftSidebar from './components/leftSidebar';
import Center from './components/centerContent';

class App extends Component {
	render() {
		return (
			<Container className="App" fluid>
				<Header />
				<Container className="body">
					<LeftSidebar />
					<Center />
				</Container>
			</Container>
		);
	}
}

export default App;
