// 
import { combineReducers } from 'redux';
import { user } from './component/redux/index.redux';

export default combineReducers({user})


/**
 *  combineReducers
 *  1.combineReducers在redux中扮演什么角色
 *    - 随着应用变得复杂，需要对 reducer 进行拆分，拆分成一块独立负责管理的 state的一部分
 *    - combineReducers 的辅助作用，把一个有多个不同的 reducer 函数作为 value 的 object 合并成一个最终的 reducer 函数，
 *      然后就可以对这个 reduce调用的createStore
 *    - 合并后的 reducer 可以调用各个子 reducer，并把它们的结果合并成一个 state 对象。state 对象的结构由传入的多个 reducer 的 key 决定
 *    
 */
