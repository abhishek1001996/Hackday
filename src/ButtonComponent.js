import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaMinusCircle from 'react-icons/lib/fa/minus-circle';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import './ButtonComponent.css';

class ButtonComponent extends Component {
	constructor(props){
		super(props)
		this.state = ({
			count : 0
		})
		this.incrementCount = this.incrementCount.bind(this);
		this.decrementCount = this.decrementCount.bind(this);
	}

	componentDidMount(){
		this.setState({
			count : this.props.initialValue
		})
	}

	render(){
		return (
			<div class="a">
				
				<FaPlusCircle class="element1" onClick={this.incrementCount}/>
				
				
				<p class="element2">{this.state.count}</p>
				
				<FaMinusCircle class="element3" onClick={this.decrementCount}/>
				
			</div>
		);
	}
	


incrementCount(){
	if(this.state.count<10){
		var val = this.state.count+1;
		this.setState({
			count : val
		});
	}
}

decrementCount(){
	if(this.state.count>0){
		var val = this.state.count-1;
		this.setState({
			count : val
		});
	}
}
}

export default ButtonComponent;