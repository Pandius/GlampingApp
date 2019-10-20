import React, { Component } from 'react';
import Calendar from 'react-calendar';

class Dates extends Component {
    state = {
        date: null,
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
    componentDidMount() {
        const date = new Date(this.props.open)
        this.setState({ date })
    }


}

export default Dates;