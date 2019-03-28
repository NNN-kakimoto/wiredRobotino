<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>クソ診断ジェネレータ</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://twitter.com/nanannV2"
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
import HelloWorld from './components/HelloWorld'
import WorkArea from './components/WorkArea'

export default {
  name: 'App',
  components: {
		HelloWorld,
		WorkArea
  },
  data () {
    return {
      //
    }
  }
}
</script>
