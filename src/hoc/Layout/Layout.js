import React, {Component} from 'react';
import Wrap from '../Wrap/Wrap'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

	state = {
		showSideDrawer: false
	};

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false})
	};

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer};
		});
	};

	render () {
		return (
			<Wrap>
				<Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler} />
				<SideDrawer
					closed = {this.sideDrawerClosedHandler}
					open = {this.state.showSideDrawer}/>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Wrap>
		)
	}
};

export default Layout;