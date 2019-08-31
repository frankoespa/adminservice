import React, { Component } from 'react';
import { withStyles, WithStyles, createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: 'flex'
		},
		appBar: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0
		},
		drawerPaper: {
			width: drawerWidth
		},
		toolbar: theme.mixins.toolbar,
		content: {
			flexGrow: 1,
			backgroundColor: theme.palette.background.default,
			padding: theme.spacing(3)
		}
	});

interface Props extends WithStyles<typeof styles> {}

class Layout extends Component<Props> {
	constructor(props) {
		super(props);
	}

	render() {
		const { children, classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position='fixed' className={classes.appBar}>
					<Toolbar>
						<Typography variant='h6' noWrap>
							Permanent drawer
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant='permanent'
					classes={{
						paper: classes.drawerPaper
					}}
					anchor='left'>
					<div className={classes.toolbar} />
					<Divider />
					<List>
						{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Drawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{children}
				</main>
				<style jsx global>{`
					html,
					body,
					#__next {
						height: 100%;
					}
				`}</style>
			</div>
		);
	}
}

export default withStyles(styles)(Layout);
