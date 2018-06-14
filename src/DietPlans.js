import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

import DietPlan from './DietPlan';

import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

class DietPlans extends Component {
    constructor(props){
        super(props);
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
        else {
            this.props.history.push("/items");
        }
    }
    render() {
        return(
            <div>
            <AppBar position="static" color="default">
            <Tabs
          onChange={this.handleChange}
          indicatorColor="primary"
          centered
          style={{backgroundColor : "#D9657C", color : "white"}}
        >
          <Tab label="Items" />
          <Tab label="Diet Plans" />
        </Tabs>
        </AppBar>
        <br/><br/>
            {this.renderDietPlans()}
            </div>
        )
    }
}


export default DietPlans;