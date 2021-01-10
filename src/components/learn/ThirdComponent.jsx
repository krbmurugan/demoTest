import React, { Component } from 'react';

class ThirdComponent extends Component {

    render() {
        return <div>Third Component
        <FourthComponent />
        </div>
    }
}

function FourthComponent() {

    return <div>Fourth Componentss</div>
}

export default ThirdComponent;