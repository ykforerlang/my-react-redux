import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux'
import home from '../components/home/modules/reducers'

const rootReducer = combineReducers({
    home,
    routing,
})

export default rootReducer
