import {createStore , applyMiddleware,compose} from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';


export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(Thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}
