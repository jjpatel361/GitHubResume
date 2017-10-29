import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setUsername } from '../../actions';
import { bindActionCreators } from 'redux';

class NameCard extends Component {
	constructor(props) {
		super(props);
		this.state = { data: this.props.auth.data };
	}

	componentDidMount() {
		this.props.setUsername(this.state.data.username);
	}

	renderComponent() {
		let data;
		if (this.props.user) {
			data = this.props.user;
		} else {
			data = this.state.data;
		}
		const { Meta, Content } = Card;
		return (
			<Card raised>
				<Image src={data.avatar} />
				<Content>
					<strong className="h2">{data.displayName}</strong>
					<Meta>
						<span>
							<Icon name="marker" />
							{data.location}
						</span>
						<br />
						<span>
							<Icon name="at" />
							{data.username}
						</span>
						<br />
						<span>
							<Icon name="world" />
							{data.blog}
						</span>
					</Meta>
				</Content>
			</Card>
		);
	}

	render() {
		return <Card raised>{this.renderComponent()}</Card>;
	}
}

function mapStateToProps({ user }) {
	if (user.data) {
		return {
			user: {
				avatar: user.data.avatar_url,
				location: user.data.location,
				displayName: user.data.name,
				email: user.data.email,
				username: user.data.login,
				blog: user.data.blog,
				bio: user.data.bio
			}
		};
	} else {
		return {};
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setUsername }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NameCard);
