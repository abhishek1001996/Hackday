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
import ButtonComponent from './ButtonComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

const styles = theme => ({
  card: {
    maxWidth: 250,
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



class ItemsPage extends Component {

		constructor(props){
			super(props)
			this.state = ({
				age : '',
				open: false,
				price : 20,
				itemType : '',
			})
		}

		componentDidMount(){
			this.setState({
				itemType : this.props.itemType,
				price : this.props.price,
			})
		}

		handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
	  render() {
	    const { classes } = this.props;

	    return (
	      <div>
	        <Card className={classes.card}>
	          <CardMedia
	            className={classes.media}
	            image={this.props.itemImage}
	            title="Onion"
	          />
	          <CardContent>
	            <Typography gutterBottom variant="headline" component="h2" className={classes.text}>
	                {this.state.itemType}
	            </Typography>
	            <Typography gutterBottom variant="headline" component="h2">
	                Price : {this.state.price}/Kg
	            </Typography>
	            <Row>
	            <Col>
	            <ButtonComponent initialValue={0}/>
	            </Col>
	            <Col>
	            <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
	                    <AddShoppingCartIcon />
	            </IconButton>
	            </Col>
	            </Row>
	          </CardContent>
	          <CardActions className={classes.actions} disableActionSpacing>
	           
	          </CardActions>
	        </Card>
	      </div>
	    );
	}

	componentWillReceiveProps(nextProps, nextState){
		this.setState({
			itemType : nextProps.itemType,
			price : nextProps.price,
		})
	}
}


ItemsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemsPage);