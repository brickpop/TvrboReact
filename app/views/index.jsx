import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Container from '../widgets/container';
import Columns from "react-columns";
import Card from '../widgets/card';

const columnQueries = [{
	columns: 2,
	query: 'min-width: 600px'
}, {
	columns: 3,
	query: 'min-width: 1000px'
}];

@withRouter
@connect(({ entries }) => ({ entries }))
class Index extends Component {
	static propTypes = {
		entries: PropTypes.array.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	render() {
		return (
			<Container id="index">
				<h2>Latest content</h2>
				<p>Below is a curated list of content provided by js.coach</p>
				<Columns columns={3} queries={columnQueries}>
					{this.props.entries.map(entry =>
						<Card title={entry.name} image={entry.image} link={`/projects/${entry._id}`} key={entry._id}>
							<p>{entry.description}</p>
						</Card>)}
				</Columns>

			</Container>
		);
	}
}

export default Index;
