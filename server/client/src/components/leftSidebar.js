import React, { Component } from 'react';
import NameCard from './leftItems/nameCard';
import Skills from './leftItems/skills';
import { Container } from 'semantic-ui-react';

export default class LeftSidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container>
				<NameCard auth={this.props.auth} />
				<Skills />
			</Container>
		);
	}
}
