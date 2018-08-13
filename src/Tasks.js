import React, { Component } from 'react';

class Tasks extends Component {
    render(){
        return(
            <li class={this.props.status}  name={this.props.name}>
                {this.props.name}
                <div class="btn check" id="mamalo"
                     onClick={this.props.checkTask}
                     n_task={this.props.index}
                     disabled={this.props.status === 'd'}>✓</div> 
                <div class="btn delete"
                     onClick={this.props.deleteTask}
                     n_task={this.props.index}>X</div>
            </li>
        );
    }
}

export default Tasks;