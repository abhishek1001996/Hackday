import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Onion from './DietImages/onion.jpeg';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

const styles = theme => ({
  card: {
    maxWidth: 1000,
    maxHeight: 300,
  },
  media: {
  	Height: 50,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  button: {
  	marginLeft : 50,
  },
  text : {

  }
});

class CartPage extends Component {

	constructor(props){
		super(props)
		this.state = ({})
	}

	handleChange = (event, value) => {
	        if(value === 0) {
	            this.props.history.push("/items");
	        }
	        if(value === 1) {
	            this.props.history.push("/diets");
	        }
	        if(value === 2){
	        	this.props.history.push("/cart");
	        }
	      };
	    renderDietPlans() {
	        if(this.props.location.pathname ==="/cart") {
	            return(
	                <div>Hello World!!</div>
	            )
	        }
	        else if(this.props.location.pathname === "/diets"){
	            this.props.history.push("/diets");
	        }
	        else{
	        	this.props.history.push("/items");
	        }
	    }

	render(){
		const { classes } = this.props;
		return(
			<div>
			  	<AppBar position="static" color="default">
			  	<Tabs
			  	    value={this.state.value}
			  	    onChange={this.handleChange}
			  	    indicatorColor="primary"
			  	    fullWidth
			  	    style={{backgroundColor : "#D9657C", color : "white"}}
			  	    >
			          <Tab label="Items" />
			          <Tab label="Diet Plans" />
			          <Col style={{float:'right'}}>
			          <IconButton style={{float:'right', color:"white"}} aria-label="Add to shopping cart">
			                  <AddShoppingCartIcon />
			          </IconButton>
			          </Col>
			  	</Tabs>
			  	</AppBar>
			  	<br />
			  	<br />
			  	{this.renderDietPlans()}
			  
			</div>
		);
	}
}

export default CartPage;
