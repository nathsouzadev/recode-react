import { createStore } from 'redux'
import { reducers } from './reducers'

export const estado = createStore(reducers)
