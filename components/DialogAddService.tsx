import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const styles = (theme: Theme) =>
	createStyles({
		buttonCancel: {
			backgroundColor: 'red'
		}
	});

interface IProps extends WithStyles<typeof styles> {
	open: boolean;
	handleAddServiceDialog: (add: boolean) => void;
}

function DialogAddService(props: IProps): JSX.Element {
	const { classes, open, handleAddServiceDialog } = props;

	return (
		<Dialog open={open} onClose={() => {}} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
			<DialogTitle id='alert-dialog-title'>Ingrese los datos del nuevo servicio</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'></DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button variant='contained' color='primary' onClick={() => handleAddServiceDialog(false)} className={classes.buttonCancel}>
					Cancelar
				</Button>
				<Button variant='contained' color='primary' autoFocus /* onClick={() => handleDeleteServiceDialog(true, serviceDeleted.pos)} */>
					Aceptar
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default withStyles(styles)(DialogAddService);
