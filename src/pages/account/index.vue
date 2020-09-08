<template>
  <div class="main">
    <img src="http://mpvue.com/assets/img/logo.0aaccdfd.png" alt />
    <input type="text" placeholder="username" v-model="username" />
    <input type="text" placeholder="password" password v-model="password" />
    <button @click="login">login</button>
    <!-- <div @click="test">{{account.username}}------{{accountState.ip}}</div> -->
    <div @click="test">{{account.username}}------{{token}}</div>
    <div @click="test2">test2</div>
  </div>
</template>

<script>
import { responseHeaders } from "@/network/api/httpApi";
import { proInfo } from "@/network/api/infoApi";
import { mapGetters, mapState, mapActions } from "vuex";
import { ACCOUNT, USERNAME } from "@/store/getters-types";
// import { ACCOUNT, USERNAME } from "../../store/getters-types";
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
    login() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          mpvue.reLaunch({
            url:'/pages/index/main',
            });
        });
    },
    test() {
      mpvue.showLoading({
        title: "get all..."
      });
      Promise.all([responseHeaders(), proInfo()])
        .then(res => {
          console.log("responseHeaders res", res);
        })
        .catch(err => {
          console.log("responseHeaders err", err);
        })
        .finally(() => {
          mpvue.hideLoading();
        });
    }
  },
  computed: {
    ...mapGetters({ account: ACCOUNT, username: USERNAME }),
    // ...mapState({ accountState: ACCOUNT }),
    ...mapState(['token']),

    vuexData() {
      return this.$store.getters.account.username;
    },
    vuexData2() {
      return this.$store.state.account.ip;
    }
  }
};
</script>

<style scoped>
.main {
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
</style>>
