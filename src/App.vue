<template>
  <div id="app">
    <ion-app>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title class="app-title">
            <b class="app-title">GitApp</b>
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-vue-router/>
      </ion-content>
    </ion-app>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
:root {
  --ion-color-primary: #24292e;
}
</style>
