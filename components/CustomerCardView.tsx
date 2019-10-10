import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const styles = (theme: Theme) =>
	createStyles({
		cardTitle: {
			fontSize: theme.typography.pxToRem(16),
			fontWeight: theme.typography.fontWeightMedium,
			color: 'white'
		},
		cardWrapper: {
			marginBottom: theme.spacing(3)
		},
		cardTitleWrapper: {
			backgroundColor: theme.palette.secondary.main
		},
		cardFooterWrapper: {
			justifyContent: 'right'
		}
	});

interface IProps extends WithStyles<typeof styles> {
	title: string;
	mapper: {};
}

function CustomerCardView(props: IProps): JSX.Element {
	const { classes, title, mapper } = props;

	var items: JSX.Element[] = Object.keys(mapper).map((member) => (
		<Grid item xl={6} key={member}>
			<ListItem>
				<ListItemText primary={member} secondary={mapper[member]} />
			</ListItem>
		</Grid>
	));

	return (
		<Card classes={{ root: classes.cardWrapper }}>
			<CardHeader title={title} classes={{ title: classes.cardTitle, root: classes.cardTitleWrapper }} />
			<CardContent>
				<List>
					<Grid container>{items}</Grid>
				</List>
			</CardContent>
			<CardActions classes={{ root: classes.cardFooterWrapper }}>
				<Button variant='outlined' size='small' color='secondary'>
					Ver
				</Button>
			</CardActions>
		</Card>
	);
}

export default withStyles(styles)(CustomerCardView);
