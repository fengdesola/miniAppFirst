import { ACCOUNT, ACCOUNT_ONE, USERNAME } from "./getters-types";

export default {
  [ACCOUNT](state){
    return state.account;
  },
  //第二个参数getters就是getters对象
  [USERNAME](state, getters){
    return getters.account.username;
  },
  //通过 username 获取特定的account
  [ACCOUNT_ONE](state){
    return function(username){
      return state.accountList.find(account => account.username === username);
    }
  }

}