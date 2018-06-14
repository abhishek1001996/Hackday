import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { NavLink, Link, withRouter, Redirect } from "react-router-dom";

class ItemsPage extends Component {
	render(){
		return (
			<div>Hellp World!!</div>
		);
	}
}

export default withRouter(ItemsPage);