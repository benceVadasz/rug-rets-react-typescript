import { combineReducers } from "redux";
import {auth} from './auth';
import * as colors from './colors'
import * as shapes from './shapes'
import * as alert from './alert'

export const reducers = combineReducers({auth, ...colors, ...shapes, ...alert});
