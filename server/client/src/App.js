import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import { Container, Image, Button } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { fetchMe } from './actions';
import { connect } from 'react-redux';

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
							path="/home"
							component={() => {
								return <Landing />;
							}}
						/>
						<Route
							path="/"
							component={() => {
								return (
									<Container>
										<Image src="https://i1.wp.com/blog.rapidapi.com/wp-content/uploads/2017/01/octocat.gif?fit=800%2C600" />
										<Button secondary as="button" href="/auth/">
											Login with GitHub
										</Button>
									</Container>
								);
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
