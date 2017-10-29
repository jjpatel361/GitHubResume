import React, { Component } from 'react';
import { Container, Statistic } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Contribs extends Component {
	constructor(props) {
		super(props);
	}

	getForked = data => {
		return data.filter(dat => {
			return dat.fork;
		});
	};

	getOwned = data => {
		return data.filter(dat => {
			return !dat.fork;
		});
	};

	renderProps() {
		if (this.props.repos) {
			return (
				<Statistic>
					<Statistic.Value>
						{this.getOwned(this.props.repos).length}
					</Statistic.Value>
					<Statistic.Label>Number of Owned Repos</Statistic.Label>
					<Statistic.Value>
						{this.getForked(this.props.repos).length}
					</Statistic.Value>
					<Statistic.Label>Number of Fork Repos</Statistic.Label>
				</Statistic>
			);
		}
	}

	render() {
		return <Container>{this.renderProps()}</Container>;
	}
}

function mapStateToProps({ fetchRepos }) {
	return {
		repos: fetchRepos.data
	};
}

export default connect(mapStateToProps, null)(Contribs);
