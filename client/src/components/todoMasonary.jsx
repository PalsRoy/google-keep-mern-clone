import React,{Component} from 'react';
import './todo.css';
import {getTodos,deleteTodo} from '../actions/todoAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import MasonryLayout from 'react-masonry-layout';
import FetchFailure from './fetchFailure';

class TodoMasonary extends Component {

  constructor(){
    super();
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  componentDidMount(){
  this.props.getTodos();
  }

  handleDeleteTodo(id){
  console.log("inside handleDeleteTodo");
  console.log(id);
  this.props.deleteTodo(id);
  }

  render(){
  const { todos,hasFailedToFetch } = this.props;
  return(
  <div>
  <div>
  {todos && <MasonryLayout
            id="masonry-layout">
            {todos.map((i) => {
              let uniqueId = i._id;
              return (
                <div
                  key={uniqueId}
                  style={{background: i.colhint}}
                  className="masonaryGrid"
                  >
                  <span>{i.title}</span>
                  <br/>
                  <span style={{fontWeight:'lighter'}}>{i.todo}</span>
                  <br/>
                  <button onClick={() => this.handleDeleteTodo(uniqueId)}>DELETE</button>
                </div>
              )}
            )}
          </MasonryLayout>
          }
        </div>
        {hasFailedToFetch && (
          <FetchFailure stylingProperty="fetchFailureClass"/>
        )}
      </div>
  );
}
}

export function mapStateToProps(state){
  return{
    todos: state.todos.todosList,
    hasFailedToFetch: state.todos.fetchFailure
  };
}

export function mapDispatchToStore(dispatch){
  return bindActionCreators({getTodos,deleteTodo},dispatch);
}

export default connect(mapStateToProps,mapDispatchToStore)(TodoMasonary);
