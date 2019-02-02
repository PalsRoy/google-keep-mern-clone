import axios from 'axios';
import * as actionTypes from '../constants/todoConstants';

export const getTodos = () => (dispatch,getState) => {

  // => /api/todos/getTodos/:uname Hardcoded for now
  dispatch(fetchStart());

  axios.get('/api/todos/getTodos/John')
  .then(res =>
    dispatch({
      type:actionTypes.GET_TODOS,
      payload:res.data
    })
  )
  .catch(err =>
  dispatch(fetchFailure())
)
};

export const addTodo = (todo) => (dispatch,getState)=> {
  axios.post('/api/todos/addTodo',todo)
  .then(res => {
    dispatch({
    type:actionTypes.ADD_TODO,
    payload: res.data
  })
})
  .catch(err =>
  dispatch(fetchFailure())
  )
};

export const deleteTodo = (id) => (dispatch,getState) =>{
  axios.delete(`/api/todos/removeTodo/${id}`)
  .then(res =>
  dispatch({
    type:actionTypes.DELETE_TODO,
    payload: id
})
)
};

export const fetchStart = () => ({
   type:actionTypes.UPDATE_FETCH_PHRASE__START
});

export const fetchFailure = () => ({
  type:actionTypes.UPDATE_FETCH_PHRASE__FAILURE
});
