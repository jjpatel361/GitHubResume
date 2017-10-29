import React, { Component } from 'react';
import { Card, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Skills extends Component {
	renderList = () => {
		if (this.props.languages) {
			return this.props.languages.map(lang => {
				return <Label className="margin5">{lang}</Label>;
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
	return { languages: langs.destArray };
}

export default connect(mapStateToProps)(Skills);
