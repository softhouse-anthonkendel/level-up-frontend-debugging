<script setup></script>

<template>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/http-ducks">HTTP Ducks</router-link> | 
    <router-link to="/duck-gifs">Duck GIFs</router-link> | 
    <router-link to="/number-input">Number Input</router-link> | 
    <router-link to="/date-parsing">Date Parsing</router-link>
  </nav>
  
  <main>
    <router-view></router-view>
  </main>
</template>
