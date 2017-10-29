import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import { Container } from 'semantic-ui-react';
import { fetchMe } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
	componentDidMount() {
		this.props.fetchMe();
	}
	render() {
		return (
			<Container className="App" fluid>
				<Header />
				<BrowserRouter>
					<Switch>
						<Route
							path="/"
							component={() => {
								return <Landing />;
							}}
						/>
					</Switch>
				</BrowserRouter>
			</Container>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchMe }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
