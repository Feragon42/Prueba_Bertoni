import React, { Component } from 'react';

class Tasks extends Component {
    render(){
        return(
            <li class={this.props.status} name={this.props.name}>
                {this.props.name}
                <div class="btn check" onClick={this.props.checkTask} disabled={this.props.status === 'd'} >✓</div> 
                <div class="btn delete">X</div>
            </li>
        );
    }
}

export default Tasks;