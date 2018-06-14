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
	}

	render(){
		const { classes } = this.props;
		return(
			<div>
			  <Card className={classes.card}>
			    <Row>
			    <Col>
			    <CardMedia
			      className={classes.media}
			      image={this.props.itemImage}
			      title="Onion"
			    />
			    </Col>
			    <Col>
			    <CardContent>
			      
			      <Typography gutterBottom variant="headline" component="h2" className={classes.text}>
			          Onion
			          Price : 10/Kg
			      </Typography>
			      
			      
			      
			    </CardContent>
			    </Col>
			    </Row>
			  </Card>
			  </div>
		);
	}
}


CartPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartPage);
