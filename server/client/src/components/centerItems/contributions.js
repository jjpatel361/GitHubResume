import React, { Component } from 'react';
import { Container, Statistic } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Contribs extends Component {
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
				<div>
					<Statistic.Group>
						<Statistic>
							<Statistic.Value>
								{this.getOwned(this.props.repos).length}
							</Statistic.Value>
							<Statistic.Label>Owned Repos</Statistic.Label>
						</Statistic>
						<Statistic>
							<Statistic.Value>
								{this.getForked(this.props.repos).length}
							</Statistic.Value>
							<Statistic.Label>Fork Repos</Statistic.Label>
						</Statistic>
						<Statistic>
							<Statistic.Value>{this.props.repos.length}</Statistic.Value>
							<Statistic.Label>Total Repos</Statistic.Label>
						</Statistic>
					</Statistic.Group>
				</div>
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
