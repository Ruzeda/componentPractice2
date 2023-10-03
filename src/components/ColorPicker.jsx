import React, { Component } from 'react';
import ColorPicker from './ColorPicker';

class ColorPicker extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            currentColor: 'red'
        }
    }

    setColor = (color) => {
        this.setState({ currentColor: color })
    }

    render() {
        return (
            <div>
                <div className="color-picker">
                    <input type="radio" name="color" value="red" onChange={() => this.setColor('red')} />
                    <input type="radio" name="color" value="blue" onChange={() => this.setColor('blue')} />
                    <input type="radio" name="color" value="green" onChange={() => this.setColor('green')} />
                    <input type="radio" name="color" value="grey" onChange={() => this.setColor('grey')} />
                </div>
                <div className="color-picker" style={{ backgroundColor: this.state.currentColor }}></div>
            </div>
        )
    }
}

export default ColorPicker;