import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Loader, Image, Button } from 'semantic-ui-react';
import LeftSidebar from './leftSidebar';

import Center from './centerContent';

class Landing extends Component {
	renderComponent() {
		switch (this.props.auth) {
			case null:
				return (
					<div>
						<Loader active />
					</div>
				);
			case false:
				return (
					<Container>
						<Image src="https://i1.wp.com/blog.rapidapi.com/wp-content/uploads/2017/01/octocat.gif?fit=800%2C600" />
						<Button secondary>Login with GitHub </Button>
					</Container>
				);
			default:
				return (
					<Container className="body">
						<LeftSidebar />
						<Center />
					</Container>
				);
		}
	}

	render() {
		return <div>{this.renderComponent()}</div>;
	}
}

function mapStateToProps({ auth }) {
	console.log(auth);
	return { auth };
}

export default connect(mapStateToProps, null)(Landing);
