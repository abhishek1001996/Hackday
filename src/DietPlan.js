import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { NavLink, Link, withRouter, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import ButtonComponent from './ButtonComponent.js';


import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


import SouthIndian from "./DietImages/south_indian.jpg";

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 50,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class DietPlan extends Component {
  state = { expanded: false };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
        <CardContent>
            <h3>Diet Plan Name</h3>
            <p style={{marginLeft : "10px"}}>Diet Plan Type</p>
        </CardContent>
          <CardMedia
            className={classes.media}
            image={SouthIndian}
          />
          <CardContent>
            <Typography component="p">
              <h4>Diet Description</h4>
              <p> This diet contains healthy x,y,z etc... </p>
            <List dense={true}>
            <Container>
                <Row>
                    <Col md={{size:6}}>
                <ListItem>
                    <span style={{fontSize : "20px", fontWeight: "bold"}}>Recepies</span>
                </ListItem>
                <ListItem>
                    <span>Recepie 1</span>
                </ListItem>
                <ListItem>
                    <span>Recepie 2</span>
                </ListItem>
                </Col>
                <Col md={{size:6}}>
                <ListItem>
                    <span style={{fontSize : "20px", fontWeight: "bold"}}>Items</span>
                </ListItem>
                <ListItem>
                    <span>Item 1</span>
                </ListItem>
                <ListItem>
                    <span>Item 2</span>
                </ListItem>
                </Col>
                </Row>
            </Container>
            </List>
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <ButtonComponent initialValue={0}/>
            <IconButton aria-label="Add to favorites" style={{marginLeft : "200px"}}>
             <AddShoppingCartIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

DietPlan.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DietPlan);