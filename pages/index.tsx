import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';

interface IState {
	estado_trabajos: string;
}

class Home extends Component<null, IState> {
	constructor(props) {
		super(props);
		this.radioChange = this.radioChange.bind(this);
		this.state = {
			estado_trabajos: 'activos'
		};
	}

	radioChange(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({ estado_trabajos: e.target.value });
	}

	render() {
		return (
			<React.Fragment>
				<RadioGroup aria-label='position' value={this.state.estado_trabajos} name='estado_trabajos' onChange={this.radioChange} row>
					<FormControlLabel value='activos' control={<Radio color='primary' />} label='Activos' labelPlacement='end' />
					<FormControlLabel value='inactivos' control={<Radio color='primary' />} label='No Activos' labelPlacement='end' />
				</RadioGroup>
				<TextField id='outlined-dense' label='Dense' margin='dense' variant='outlined' />
			</React.Fragment>
		);
	}
}

export default Home;
