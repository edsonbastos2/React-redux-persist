import { combineReducers } from 'redux';

import usuarioReducers from './UsuarioReducers';


export default combineReducers({
  usuario: usuarioReducers
})