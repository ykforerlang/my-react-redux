import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware, // 允许我们 dispatch() 函数
            logger, // 一个很便捷的 middleware，用来打印 action 日志
        ),
    )
    return store
}
