import React, {Component} from 'react'
import Wrap from '../../../hoc/Wrap/Wrap'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

	componentWillUpdate(){
		console.log("[OrderSummary] WillUpdate")
	}

	render() {
		const ingredientSummary = Object.keys(this.props.ingredients)
			.map(ignKey => {
				return (
					<li key ={ignKey}>
						<span style={{textTransform: 'capitalize'}}>{ignKey}</span>: {this.props.ingredients[ignKey]}
					</li>
				)
			});

		return (
			<Wrap>
				<h3>Your Order</h3>
				<p>A Delicious burger with the following ingredients</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
				<p>Continue to Checkout?</p>
				<Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
				<Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
			</Wrap>
		)
	}
};

export default OrderSummary;