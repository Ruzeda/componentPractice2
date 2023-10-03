import React, { Component } from 'react';

class NewsTicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: ['news1', 'news2', 'news3', 'news4', 'news5'],
            currentNewsIndex: 0
        }
    }

    nextNewsItem = () => {
        this.setState({ currentNewsIndex: this.state.currentNewsIndex + 1 })
    }

    render() {
        return (
            <div>
                <button onClick={this.nextNewsItem}>Next</button>
                <div>{this.state.news[this.state.currentNewsIndex]}</div>
            </div>
        )
    }
}

export default NewsTicker;