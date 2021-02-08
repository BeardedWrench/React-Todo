import React from 'react';
import './Todo.css';

class Todo extends React.Component{
    handleClick = e =>{
        this.props.handleToggle( this.props.task.id );
    }

    render(){
        return(
            <div onClick={ this.handleClick }>
                <p className={ this.props.task.completed ? 'cross' : "" }>{ this.props.task.task }</p>
            </div>
        )
    }

}

export default Todo;