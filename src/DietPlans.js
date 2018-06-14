import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import DietPlan from './DietPlan';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';


class DietPlans extends Component {
    constructor(props){
        super(props);
        this.handleForCart = this.handleForCart.bind(this);
    }
    handleChange = (event, value) => {
        if(value === 0) {
            this.props.history.push("/items");
        }
        if(value === 1) {
            this.props.history.push("/diets");
        }
      };
    renderDietPlans() {
        if(this.props.location.pathname ==="/diets") {
            return(
                <Container>
                <Row>
                <Col>
                    <DietPlan/>
                </Col>
                <Col>
                    <DietPlan/>
                </Col>
                <Col>
                    <DietPlan/>
                </Col>
                </Row>
            </Container>
            )
        }
        else if(this.props.location.pathname === "/items"){
            this.props.history.push("/items");
        }
        else{
            this.props.history.push("/cart");
        }
    }

    handleForCart(){
        this.props.history.push("/cart");
    }
    render() {
        return(
            <div>
            <AppBar position="static" color="default">
        
            <Tabs
          onChange={this.handleChange}
          indicatorColor="primary"
          fullWidth
          style={{backgroundColor : "#D9657C", color : "white"}}
        >
          <Tab label="Items" />
          <Tab label="Diet Plans" />
          <Col style={{float:'right'}}>
          <IconButton style={{float:'right', color:"white"}} aria-label="Add to shopping cart" onClick={this.handleForCart}>
                  <AddShoppingCartIcon />
          </IconButton>
          </Col>
        </Tabs>
        
        </AppBar>
        <br/><br/>
            {this.renderDietPlans()}
            </div>
        )
    }
}


export default DietPlans;