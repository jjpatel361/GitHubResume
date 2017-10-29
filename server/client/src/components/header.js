import React, { Component } from 'react';
import { Search, Button } from 'semantic-ui-react';
import { setUsername } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
	}

	handleChange = event => {
		this.setState({ term: event.target.value });
	};

	handleEnter = e => {
		if (e.keyCode === 13) {
			const { term } = this.state;
			this.props.setUsername(term);
		}
	};

	renderLogout() {
		switch (this.props.auth) {
			case null:
				break;
			case false:
				break;
			default:
				return (
					<div className="header center table-disp">
						<Search
							className="cent-hor center"
							showNoResults={false}
							value={this.state.term}
							onSearchChange={e => this.handleChange(e)}
							placeholder="Search For Username"
							input={{
								icon: 'at',
								iconPosition: 'left'
							}}
							onKeyDown={e => this.handleEnter(e)}
						/>
						<Button as="button" href="/api/logout" className="float-right">
							Logout
						</Button>
					</div>
				);
		}
	}

	render() {
		return <div>{this.renderLogout()}</div>;
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ setUsername }, dispatch);
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
