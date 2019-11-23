import React from 'react';
import { Theme, createStyles, makeStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import IServiceDeletedVm from '../src/interfaces/IServiceDeletedVm';
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
		}
	});

interface IProps extends WithStyles<typeof styles> {
	open: boolean;
	serviceDeleted: IServiceDeletedVm;
	handleDeleteServiceDialog: (remove: boolean, pos?: number) => void;
}

function DialogDeleteService(props: IProps): JSX.Element {
	const { classes, open, handleDeleteServiceDialog, serviceDeleted } = props;

	return (
		<Dialog
			open={open}
			onClose={() => {}}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			fullWidth={true}
			maxWidth='sm'>
			<DialogTitle id='alert-dialog-title' className={classes.titleDialog}>
				¿Desea eliminar el servicio?
			</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>{serviceDeleted.nombre}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button variant='outlined' color='primary' onClick={() => handleDeleteServiceDialog(false)} className={classes.buttonCancel}>
					Cancelar
				</Button>
				<Button variant='outlined' color='primary' autoFocus onClick={() => handleDeleteServiceDialog(true, serviceDeleted.pos)}>
					Aceptar
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default withStyles(styles)(DialogDeleteService);
