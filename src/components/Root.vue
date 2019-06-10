<template>
  <div class="main">
    <div v-if="!data">
      <div class="ion-padding custom-skeleton" v-for=" i in [1,2,3,4,5,6,7,8]" :key="i">
        <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        <ion-skeleton-text animated></ion-skeleton-text>
        <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>
        <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
        <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
      </div>
    </div>
    <div class="container" v-if="data">
      <ion-card>
        <ion-card-header>
          <ion-avatar margin>
            <img :src="data.avatar_url">
          </ion-avatar>
          <ion-card-title>{{ data.login }}</ion-card-title>
          <ion-card-subtitle>{{ data.name }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          {{ data.bio }}
          <br>
          {{data.location}}
        </ion-card-content>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Profile Summary</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-badge color="success" margin>
                <ion-icon name="people"></ion-icon>
              </ion-badge>
              Followers : {{data.followers}}
            </ion-item>
            <ion-item>
              <ion-badge color="secondary" margin>
                <ion-icon name="people"></ion-icon>
              </ion-badge>
              Following : {{data.following}}
            </ion-item>
            <ion-item>
              <ion-badge color="tertiary" margin>
                <ion-icon name="code"></ion-icon>
              </ion-badge>
              Repos : {{data.public_repos}}
            </ion-item>
          </ion-list>
          <ion-item>
            <ion-badge color="medium" margin>
              <ion-icon name="git-commit"></ion-icon>
            </ion-badge>
            Gist : {{data.public_gists}}
          </ion-item>
        </ion-card-content>
      </ion-card>
      <ion-tabs>
        <ion-tab tab="home">Home Content</ion-tab>
        <ion-tab tab="settings">Settings Content</ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="repos">
            <ion-label>Repo</ion-label>
            <ion-icon name="code"></ion-icon>
            <ion-badge>{{data.public_repos}}</ion-badge>
          </ion-tab-button>

          <ion-tab-button tab="followers">
            <ion-label>Followers</ion-label>
            <ion-icon name="people"></ion-icon>
            <ion-badge>{{data.followers}}</ion-badge>
          </ion-tab-button>
          <ion-tab-button tab="logs">
            <ion-label>Logs</ion-label>
            <ion-icon name="logo-buffer"></ion-icon>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Root",
  data() {
    return {
      username: null,
      data: null
    };
  },
  methods: {},
  mounted() {
    this.username = localStorage.getItem("username");
    Axios.get(`https://api.github.com/users/${this.username}`).then(
      response => {
        this.data = response.data;
        console.log(this.data);
      }
    );
  }
};
</script>

<style>
</style>
