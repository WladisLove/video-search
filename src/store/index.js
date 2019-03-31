import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import videoReducer from './reducers/video'

const rootReducer = combineReducers({
    videos: videoReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store