import React,{Component} from 'react';
import './todo.css';
import paintbrush from '../paintbrush.svg';
import {CirclePicker} from 'react-color';
import {addTodo} from '../actions/todoAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Todo extends Component {

  constructor(){
  super();

  this.state={todoTitle:'',
              todoText:'',
              todoColor:'#fff',
              isOpenPalette:false};

  this.handleSubmit= this.handleSubmit.bind(this);
  this.handleTitleChange= this.handleTitleChange.bind(this);
  this.handleTextChange=  this.handleTextChange.bind(this);
  this.handleChangeComplete = this.handleChangeComplete.bind(this);
  this.handlePaintBrush = this.handlePaintBrush.bind(this);
  }

  handleChangeComplete(color){
   this.setState({todoColor:color.hex});
  }


  handlePaintBrush(){
  this.setState({isOpenPalette:!this.state.isOpenPalette});
  }

  handleSubmit(event){
    event.preventDefault();
    var todo = {
    userName: 'John',
    title: this.state.todoTitle,
    todo: this.state.todoText,
    colhint: this.state.todoColor,
    isDone: false,
    hasAttachment: false
    };

    this.props.addTodo(todo);
    //clear the UI state after submit
    this.setState({todoTitle:'',
                  todoText:'',
                  todoColor:'#fff',
                  isOpenPalette:false});
  }

  handleTitleChange(event){
    this.setState({todoTitle:event.target.value});
  }

  handleTextChange(event){
  this.setState({todoText:event.target.value});
  }

  render(){
  const {isOpenPalette} = this.state;

  return(
  <div className={`card composerContainer`}>
  <form onSubmit={this.handleSubmit} className="inputForm">
    <input type="text" name="Title" value={this.state.todoTitle} placeholder="Title" onChange={this.handleTitleChange} className="noteTitle"></input>
    <textarea type="text" name="Description" placeholder="Add note..." value={this.state.todoText} onChange={this.handleTextChange} className="noteText"></textarea>
    <img src={paintbrush} alt="Paint-brush" className="paintBrush" onClick={this.handlePaintBrush}/>
    <div>
    {isOpenPalette && <span><CirclePicker color={this.state.todoColor} onChangeComplete={this.handleChangeComplete}/></span>}
    <span><button type="submit" className="buttonDone">DONE</button></span>
    </div>
  </form>
  </div>
  );
  }
}

export function mapStateToProps(state){
  return{
    todos: state.todosList
  };
}

export function mapDispatchToStore(dispatch){
  return bindActionCreators({addTodo},dispatch);
}

export default connect(mapStateToProps,mapDispatchToStore)(Todo);
