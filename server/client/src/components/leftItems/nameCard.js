import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class NameCard extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {};
	}

	componentDidMount() {
		if (this.props.avatar) {
			this.setState({
				imageURL: this.props.avatar
			});
		} else {
			this.setState({
				imageURL: process.env.PUBLIC_URL + '/images/default.png'
			});
		}
		if (this.props.username) {
			this.setState({
				username: this.props.username
			});
		} else {
			this.setState({
				username: 'johndoe'
			});
		}
		if (this.props.displayName) {
			this.setState({
				displayName: this.props.displayName
			});
		} else {
			this.setState({
				displayName: 'John Doe'
			});
		}
		if (this.props.location) {
			this.setState({
				location: this.props.displayName
			});
		} else {
			this.setState({
				location: 'New Jersey'
			});
		}
	}

	renderComponent() {
		if (this.props.username) {
			const { Meta, Content } = Card;
			return (
				<Card>
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
		return <Card raise>{this.renderComponent()}</Card>;
	}
}

function mapStateToProps({ user }) {
	console.log(user.data);
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
