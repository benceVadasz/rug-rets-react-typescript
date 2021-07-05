import { combineReducers } from "redux";
import {auth} from './auth';
import {colorSelection} from './colors';
import {color} from './colors';
import {colors} from './colors';

export const reducers = combineReducers({auth, color, colors, colorSelection});
