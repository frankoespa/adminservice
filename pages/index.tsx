import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Button variant='contained' color='primary'>
				Primary
			</Button>
		);
	}
}

export default Home;
