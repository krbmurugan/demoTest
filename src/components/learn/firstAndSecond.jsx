import React, { Component } from 'react';
import ThirdComponent from './ThirdComponent';

class FirstComponent extends Component {
    render() {
        return (<div>First Component
        <SecondComponent />
        </div>);
    }

}

export default FirstComponent;

export class SecondComponent extends Component {

    render() {
        return (< div > Second Componentss
          <ThirdComponent />
        </div >);
    }
}