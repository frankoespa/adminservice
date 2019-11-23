import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Red from '@material-ui/core/colors/red';

const styles = (theme: Theme) =>
	createStyles({
		buttonCancel: {
			'&:hover': {
				borderColor: 'inherit',
				backgroundColor: Red[500],
				color: 'white'
			},
			color: Red[500],
			borderColor: Red[500]
		},
		titleDialog: {
			textAlign: 'center'
		},
		textField: {
			width: '100%'
		}
	});

interface IProps extends WithStyles<typeof styles> {
	open: boolean;
	handleAddServiceDialog: (add: boolean) => void;
}

function DialogAddService(props: IProps): JSX.Element {
	const { classes, open, handleAddServiceDialog } = props;
	const [tipoServicioChange, setTipoServicioChange] = React.useState<string>('');

	const estadoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTipoServicioChange(e.target.value);
	};

	return (
		<Dialog
			open={open}
			onClose={() => {}}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			fullWidth={true}
			maxWidth='sm'>
			<DialogTitle id='alert-dialog-title'>Agregar servicio</DialogTitle>
			<DialogContent>
				<TextField
					id='tipoServicio'
					select
					label='Tipo Servicio'
					className={classes.textField}
					value={tipoServicioChange}
					margin='normal'
					variant='outlined'
					onChange={estadoChange}>
					{['En revisión', 'Presupuesto rechazado', 'Espera repuesto', 'Reparando', 'Finalizado', 'Entregado'].map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</TextField>
			</DialogContent>
			<DialogActions>
				<Button variant='outlined' color='primary' onClick={() => handleAddServiceDialog(false)} className={classes.buttonCancel}>
					Cancelar
				</Button>
				<Button variant='outlined' color='primary' autoFocus /* onClick={() => handleDeleteServiceDialog(true, serviceDeleted.pos)} */>
					Aceptar
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default withStyles(styles)(DialogAddService);
