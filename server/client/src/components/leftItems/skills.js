import React, { Component } from 'react';
import { Card, Label } from 'semantic-ui-react';

export default class Skills extends Component {
	state = {
		panels: [
			{
				type: 'HTML5'
			},
			{
				type: 'CSS3'
			},
			{
				type: 'JavaScript'
			}
		]
	};

	renderList = skills => {
		return skills.map(skill => {
			return (
				<Label key={skill.type} size="large">
					{skill.type}
				</Label>
			);
		});
	};

	componentDidMount() {}

	render() {
		const { Content } = Card;
		return (
			<Card raised>
				<Content>
					<strong className="h3">Languages</strong>
				</Content>
				<Content>{this.renderList(this.state.panels)}</Content>
			</Card>
		);
	}
}
