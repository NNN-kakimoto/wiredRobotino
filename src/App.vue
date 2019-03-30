<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="text-uppercase">
        <span>クソ診断ジェネレータ</span>
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
			<work-area />
    </v-content>
  </v-app>
</template>

<script>
import WorkArea from './components/WorkArea'

export default {
  name: 'App',
  components: {
		WorkArea
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