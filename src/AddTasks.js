import React, { Component } from 'react'

class AddTasks extends Component{
    render(){
        return(
            <form onSubmit={this.props.onAddTasks}>
                <input type='text' placeholder="Add a Taks Description" name="name"/>
                <input type="submit" value="Add" />
             </form>
        );
    }
}

export default AddTasks;