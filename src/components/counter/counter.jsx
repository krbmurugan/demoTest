import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment(by) {
        // console.log('Increment clicked', this.props.by, this.props.name);
        // this.state.counter++;
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            })
    }

    reset() {
        this.setState({ counter: 0 })
    }

    render() {
        return (
            <div>
                <CounterButton by={1} incremMethod={this.increment} />
                <CounterButton by={5} incremMethod={this.increment} />
                <CounterButton by={10} incremMethod={this.increment} />
                <CounterButton incremMethod={this.increment} />
                <span >{this.state.counter}</span>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }


}

class CounterButton extends Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    /* increment() {
        // console.log('Increment clicked', this.props.by, this.props.name);
        // this.state.counter++;
        this.setState({
            counter: this.state.counter + this.props.by
        })
        this.props.incremMethod(this.props.by)
    } 

    decrement() {
        // console.log('Increment clicked', this.props.by, this.props.name);
        // this.state.counter++;
        this.setState({
            counter: this.state.counter - this.props.by
        })
        this.props.incremMethod(this.props.by * (-1))
    }*/


    render() {
        return (
            <div>
                <button onClick={() => this.props.incremMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.incremMethod(this.props.by * -1)}>-{this.props.by}</button>
                <span >{this.state.counter}</span>
            </div >
        )
    }


}

CounterButton.defaultProps = {
    by: 4,
    name: 'test'
}

CounterButton.propTypes = {
    by: PropTypes.number

}

export default Counter;