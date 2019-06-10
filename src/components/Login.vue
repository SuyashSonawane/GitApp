<template>
  <div class="login-conatiner">
    <ion-item margin>
      <ion-label position="floating">UserName</ion-label>
      <ion-input :value="username" @input="username = $event.target.value"></ion-input>
    </ion-item>
    <ion-item margin>
      <ion-label position="floating">Password</ion-label>
      <ion-input type="password" :value="password" @input="password = $event.target.value"></ion-input>
    </ion-item>
    <ion-button @click="login" class="login-btn">
      <b v-if="unclicked">Login</b>
      <ion-spinner v-else name="crescent"></ion-spinner>
    </ion-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
      unclicked: true,
      data: null
    };
  },
  methods: {
    async login() {
      if (this.username && this.password) {
        this.unclicked = false;
        console.log(this.username, this.password);
        let url = `https://api.github.com/users/${this.username}`;
        axios
          .get(url)
          .then(response => {
            this.data = response;
            this.unclicked = true;
            localStorage.setItem(
              "userId",
              btoa(this.username + ":" + this.password)
            );
            localStorage.setItem("username", this.data.data.login);
            this.$router.push("/");
          })
          .catch(err => {
            return this.$ionic.alertController
              .create({
                header: "Alert",
                message: "Cannot find account",
                buttons: ["OK"]
              })
              .then(a => a.present());
          });
      } else {
        return this.$ionic.alertController
          .create({
            header: "Alert",
            message: "Please fill the correct values",
            buttons: ["OK"]
          })
          .then(a => a.present());
      }
    }
  }
};
</script>

<style>
.login-conatiner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 5%;
  height: 100%;
}
.login-btn {
  margin: 20%;
  height: auto;
  min-height: 40px;
}
</style>
