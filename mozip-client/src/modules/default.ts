import {applyMiddleware, createStore, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import reducer from './'
import {rootSaga} from "./"

type InitialState = null | any

export const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
const _compose = process.env.NODE_ENV !== 'production' ? composeWithDevTools({serialize: true, trace: true}) : compose

const store =  (initialState: InitialState) => createStore(reducer, initialState, _compose(applyMiddleware(...middlewares)))

export default store((window as any).__REDUX_STATE__)
sagaMiddleware.run(rootSaga)