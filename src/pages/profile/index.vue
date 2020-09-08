<template>
  <div class="main">
    <img src="http://mpvue.com/assets/img/logo.0aaccdfd.png" alt />
    
    
    <div >username:{{account.username}}</div>
    <div >ip:{{account.ip}}</div>

    <button @click="loginOut">login out</button>

    <button class="inter" @click="goMain">main</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { ACCOUNT, USERNAME } from "@/store/getters-types";
import { SET_ACCOUNT, SET_TOKEN } from "@/store/mutations-types";
import { loginOut } from "@/network/api/httpApi";
export default {
  data() {
    return {
      username: "fqy",
      password: "fqy"
    };
  },
  mounted() {},
  methods: {
    // ...mapActions['login'],
    loginOut() {

      let username = this.account.username;
      setTimeout(() => {
        
        loginOut(username)
        .then(res => {
           
          });
      }, 2000);

      this.$store.commit(SET_ACCOUNT, {});
      this.$store.commit(SET_TOKEN, '');
      

       mpvue.reLaunch({
            url:'/pages/account/main',
            });
    },
    goMain(){
       mpvue.navigateTo({
            url:'/pages/production/main',
            });
    }
   } ,
  computed: {
    ...mapGetters({ account: ACCOUNT, username: USERNAME }),
   

  }
};
</script>

<style scoped>
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
}
.main img {
  width: 100px;
  height: 100px;
}
.main input {
  width: 100%;
  border: 1px solid #999;
  border-radius: 4px;
  margin-top: 12px;
  padding: 8px;
}
.main button {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  align-self: stretch;
  background-color: #ff0;
}
.main div {
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  align-self: stretch;
  background-color: #ff0;
}
.main .inter {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>>
