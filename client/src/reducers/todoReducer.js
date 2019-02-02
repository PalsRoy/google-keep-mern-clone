import * as actionTypes from '../constants/todoConstants';

const initialState = {
  todosList: [],
  fetchFailure: false
};


export default function(state= initialState, action){
  switch(action.type){
    case actionTypes.ADD_TODO:
    {
    var newtodoList = [...state.todosList,action.payload];
    return {...state,todosList: newtodoList};
    }
    case actionTypes.GET_TODOS:
    {
    return {...state,todosList:action.payload};
    }
    case actionTypes.DELETE_TODO:
    {
    var newDtodoList = state.todosList.filter((item) =>
      (item._id !== action.payload)
    );
    return {...state,todosList:newDtodoList};
    }
    case actionTypes.UPDATE_FETCH_PHRASE__START:
    {
      return{...state,fetchFailure:false};
    }
    case actionTypes.UPDATE_FETCH_PHRASE__FAILURE:
    {
      return{...state,fetchFailure:true};
    }
   default:
      return state;
   }
  }
