import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
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
