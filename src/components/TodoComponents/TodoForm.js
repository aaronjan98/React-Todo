import React, { Component } from 'react';

class TodoForm extends Component {
    constructor (){
        super();
        this.state = {
            todoText: ''
        }
    }

    handleChanges = e => {
        this.setState({
            todoText: e.target.value
        });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.todoText);

        this.setState({
            todoText: '',
          });
    };

    render() {
        return(
            <form onSubmit={this.handleSubmit} className='TodoForm'>
                <input type="text"
                name="item"
                value={this.state.todoText}
                onChange={this.handleChanges}/>

                <button className='add-btn' >Add</button>
            </form>
        );
    }
}

export default TodoForm;