import { combineReducers } from "redux";
import { alunos } from './alunos'
import { cursos } from './cursos'

export const reducers = combineReducers({
    alunos,
    cursos
})
