import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		fetch('http://localhost:4000/api/services')
			.then((services) => services.json())
			.then((services) => {
				console.log(services);
			});
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
