import React, { Component } from 'react';
import ItemsPage from './ItemsPage.js';
import Onion from './DietImages/onion.jpeg';
import Potato from './DietImages/potato.jpg';
import Rice from './DietImages/rice.jpg';
import Flour from './DietImages/flour.jpg';
import Ghee from './DietImages/ghee.jpg';
import Sugar from './DietImages/sugar.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';


class Items extends Component {
	constructor(props){
		super(props)
		this.state = ({
			itemsList : ['onion', 'potato', 'rice', 'flour', 'ghee', 'sugar'],
		})
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
	        if(this.props.location.pathname ==="/items") {
	            return(
	                <Container>
	                	<Row>
	                	 <Col>
	                	<ItemsPage itemType="Onion" price="20" itemImage={Onion}/>
	                	</Col>
	                	<Col>
	                	<ItemsPage itemType="Potato" price="10" itemImage={Potato}/>
	                	</Col>
	                	<Col>
	                	<ItemsPage itemType="Rice" price="50" itemImage={Rice}/>
	                	</Col>
	                	</Row>
	                	<br />
	                	<br />
	                	<Row>
	                	<Col>
	                	<ItemsPage itemType="Flour" price="20" itemImage={Flour}/>
	                	</Col>
	                	<Col>
	                	<ItemsPage itemType="Ghee" price="400" itemImage={Ghee}/>
	                	</Col>
	                	<Col>
	                	<ItemsPage itemType="Sugar" price="40" itemImage={Sugar}/>
	                	</Col>
	                	</Row>
	                </Container>
	            )
	        }
	        else {
	            this.props.history.push("/diets");
	        }
	    }

	render(){
		return (
			<div>
			<AppBar position="static" color="default">
			<Tabs
			    value={this.state.value}
			    onChange={this.handleChange}
			    indicatorColor="primary"
			    centered
			    style={{backgroundColor : "#D9657C", color : "white"}}
			    >
		        <Tab label="Items" />
		        <Tab label="Diet Plans" />
			</Tabs>
			</AppBar>
			<br />
			<br />
			{this.renderDietPlans()}
			</div>
		);
	}
}

export default Items;