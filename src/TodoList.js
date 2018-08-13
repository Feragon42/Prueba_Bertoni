import React, { Component } from 'react';
import Tasks from '../src/Tasks';

class todoList extends Component {
    render(){
        return(
            <ul>
                {this.props.tasks.map(t => {
                    return(
                        <Tasks
                            index = {t.id}
                            name = {t.name}
                            status = {t.status} 
                            checkTask = {this.props.checkTask}
                            deleteTask = {this.props.deleteTask}/>
                    );
                })}
            </ul>
        );
    }
}

export default todoList