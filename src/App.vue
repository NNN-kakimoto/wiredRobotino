<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="text-uppercase">
        <span>WIRED ROBOTINO STUDY</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://twitter.com/kakimoto_itc"
        target="_blank"
      >
        <span class="mr-2">つくったひと</span>
      </v-btn>
    </v-toolbar>
		<v-content>
			<main-page />
		</v-content>
  </v-app>
</template>

<script>
import MainPage from './components/MainPage'

export default {
  name: 'App',
  components: {
		MainPage
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style>
@media screen and (max-width: 960px) {
	.v-toolbar__title{
		font-size: 15px !important;
	}
}
</style>