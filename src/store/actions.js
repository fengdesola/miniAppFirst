import { SET_ACCOUNT, SET_TOKEN } from './mutations-types'
import { login } from '@/network/api/httpApi'

export default {
  login(context, payload){
    return new Promise((resolve, reject)=>{

      mpvue.showLoading({
        title: 'login...',
      });
      login(payload.username, payload.password)
      .then(res => {
        payload.ip = res.origin;
        context.commit(SET_ACCOUNT, payload);
        context.commit(SET_TOKEN, res.origin + ':token');
        resolve(context.state.account)
      }).catch(err => {
        reject(err);
      }).finally(()=>{
        mpvue.hideLoading();
      })

    })
  }

}