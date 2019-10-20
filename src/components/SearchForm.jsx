import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'



class SearchForm extends Component {

    state = {
        word: ""
    }

    render() {
        return (
            <Form inline onSubmit={this.handleSubmit}>
                <FormControl type="text" name="word" value={this.state.word} placeholder="Search by word" className="mr-sm-2" onChange={this.handleChange} />

                <Button variant="outline-success" type="submit" >Search</Button>
            </Form>
        );
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.searchBy(this.state.word)
    }




}

export default SearchForm;