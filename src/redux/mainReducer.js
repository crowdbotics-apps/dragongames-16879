import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView44287Reducer from '../features/CalendarView44287/redux/reducers';
import EmailAuth44285Reducer from '../features/EmailAuth44285/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView44287: CalendarView44287Reducer,
EmailAuth44285: EmailAuth44285Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});