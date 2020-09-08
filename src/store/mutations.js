import { SET_ACCOUNT, SET_TOKEN } from './mutations-types'
export default {
  [SET_ACCOUNT](state, payload){
   // state.account = payload.account;
   // state.accountList.push(payload.account);
   state.account = payload;
   state.accountList.push(payload);
  },
  [SET_TOKEN](state, payload){
   state.token = payload;
  },

 }