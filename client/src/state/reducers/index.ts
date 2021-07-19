import { combineReducers } from "redux";
import {auth} from './auth';
import * as colors from './colors'
import * as shapes from './shapes'
import * as alert from './alert'
import * as designs from './designs'

export const reducers = combineReducers({auth, ...colors, ...shapes, ...alert, ...designs});
