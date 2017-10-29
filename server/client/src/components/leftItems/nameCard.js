import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class NameCard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderComponent() {
		if (this.props.username) {
			const { Meta, Content } = Card;
			return (
				<Card raised>
					<Image src={this.props.avatar} />
					<Content>
						<strong className="h2">{this.props.displayName}</strong>
						<Meta>
							<span>
								<Icon name="marker" />
								{this.props.location}
							</span>
							<br />
							<span>
								<Icon name="at" />
								{this.props.username}
							</span>
						</Meta>
					</Content>
				</Card>
			);
		}
	}

	render() {
		return <Card raised>{this.renderComponent()}</Card>;
	}
}

function mapStateToProps({ user }) {
	if (user.data) {
		return {
			avatar: user.data.avatar_url,
			location: user.data.location,
			displayName: user.data.name,
			email: user.data.email,
			username: user.data.login
		};
	}
}

export default connect(mapStateToProps)(NameCard);
