import { applyMiddleware, createStore } from "redux"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const customMiddleWare = store => next => action => {
	console.log( "customMiddleWare triggered:", action );
	next( action );
}

const middleware = applyMiddleware( customMiddleWare, promise(), thunk, createLogger() )

export default createStore( reducer, middleware )