import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Contribs from './centerItems/contributions';

export default class Center extends Component {
	state = {};
	componentDidMount() {}
	render() {
		return (
			<Container fluid>
				<Contribs />
			</Container>
		);
	}
}
