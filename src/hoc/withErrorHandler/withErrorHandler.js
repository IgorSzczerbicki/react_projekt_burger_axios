import React, {Component} from 'react'

import Modal from '../../components/UI/Modal/Modal'
import Wrap from '../Wrap/Wrap'

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null
		};

		componentWillMount() {
			axios.interceptors.request.use(req => {
				this.setState({error: null});
				return req;
			});

			axios.interceptors.response.use(res => res, error => {
				this.setState({error})
			});
		}

		errorConfirmedHandler = () => {
			this.setState({error: null})
		};

		render() {
			return (
				<Wrap>
					<Modal
						show={this.state.error}
						modalClosed ={this.errorConfirmedHandler}>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props} />
				</Wrap>
			)
		}
	}
};

export default withErrorHandler;