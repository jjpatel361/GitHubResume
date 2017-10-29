import React, { Component } from 'react';
import _ from 'lodash';
import { Card, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Skills extends Component {
	renderList = () => {
		if (this.props.languages) {
			return this.props.languages.map(lang => {
				return <Label>{lang}</Label>;
			});
		}
	};

	render() {
		const { Content } = Card;
		return (
			<Card raised>
				<Content>
					<strong className="h3">Languages</strong>
				</Content>
				<Content>{this.renderList()}</Content>
			</Card>
		);
	}
}

function mapStateToProps({ langs }) {
	const lang = _.keys(langs.data);
	return { languages: lang };
}

export default connect(mapStateToProps)(Skills);
