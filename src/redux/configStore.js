import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducers/CarouselReducer'
import { QuanLyPhimReducer } from './reducers/QuanLyPhimReducer'
import { QuanLyRapReducer } from './reducers/QuanLyRapReducer'
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer'
import { LoadingReducer } from './reducers/LoadingReducer'
import {QuanLyDatVeReducer} from './reducers/QuanLyDatVeReducer'

const rootReducer = combineReducers({
  //state ung dung
  CarouselReducer,
  QuanLyPhimReducer,
  QuanLyRapReducer,
  QuanLyNguoiDungReducer,
  LoadingReducer,
  QuanLyDatVeReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))