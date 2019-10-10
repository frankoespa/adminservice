import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DialogDeleteService from './DialogDeleteService';
import IServiceDeletedVm from '../src/interfaces/IServiceDeletedVm';
import DialogAddService from './DialogAddService';

const styles = (theme: Theme) =>
	createStyles({
		tableCell: {
			wordBreak: 'break-word'
		},
		tableHeader: {
			fontSize: theme.typography.pxToRem(14)
		}
	});

interface IProps extends WithStyles<typeof styles> {}

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
	return { name, calories, fat, carbs, protein };
}

function TableServices(props: IProps): JSX.Element {
	const { classes } = props;
	const [services, setServices] = React.useState([
		createData('Home  office', 159, 6.0, 24, 4.0),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Cupcake', 305, 3.7, 67, 4.3),
		createData('Gingerbread', 356, 16.0, 49, 3.9)
	]);
	const [showDeleteServiceDialog, setshowDeleteServiceDialog] = React.useState(false);
	const [showAddServiceDialog, setShowAddServiceDialog] = React.useState(false);
	const [serviceDeleted, setServiceDeleted] = React.useState<IServiceDeletedVm>({ name: '', pos: null });

	const deleteService = (pos: number): void => {
		services.splice(pos, 1);
		setServices([...services]);
	};

	const handleDeleteServiceDialog = (remove: boolean, pos?: number) => {
		if (remove) {
			deleteService(pos);
			setshowDeleteServiceDialog(false);
		} else {
			setshowDeleteServiceDialog(false);
		}
	};

	const handleIconDeleteServiceDialog = (name: string, pos: number) => {
		setServiceDeleted({ name, pos });
		setshowDeleteServiceDialog(true);
	};

	const addService = (): void => {
		setshowDeleteServiceDialog(false);
	};

	const handleAddServiceDialog = (add: boolean) => {
		if (add) {
			addService();
			setshowDeleteServiceDialog(false);
		} else {
			setShowAddServiceDialog(false);
		}
	};

	const handleIconAddServiceDialog = () => {
		setShowAddServiceDialog(true);
	};

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell align='left' padding='none'>
						<Tooltip title='Agregar'>
							<IconButton aria-label='filter list' onClick={() => handleIconAddServiceDialog()}>
								<AddIcon />
							</IconButton>
						</Tooltip>
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Tipo
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Nombre
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Descripción
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Fecha
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Precio ($)
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{services.map((s, key) => (
					<TableRow key={key} hover={true}>
						<TableCell align='left' padding='none'>
							<Tooltip title='Eliminar'>
								<IconButton aria-label='filter list' onClick={() => handleIconDeleteServiceDialog(s.name, key)}>
									<DeleteIcon />
								</IconButton>
							</Tooltip>
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.name}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.calories}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.fat}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.carbs}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.protein}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			<DialogDeleteService
				open={showDeleteServiceDialog}
				handleDeleteServiceDialog={handleDeleteServiceDialog}
				serviceDeleted={serviceDeleted}
			/>
			<DialogAddService open={showAddServiceDialog} handleAddServiceDialog={handleAddServiceDialog} />
		</Table>
	);
}

export default withStyles(styles)(TableServices);
