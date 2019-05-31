<template>
	<v-navigation-drawer permanent>
		<v-toolbar flat>
			<v-list>
				<v-list-tile>
					<v-list-tile-title class="title">
						もくじ
					</v-list-tile-title>
				</v-list-tile>
			</v-list>
		</v-toolbar>

		<v-divider></v-divider>

		<v-list dense class="pt-0">
			<v-list-tile
				v-for="item in items"
				:key="item.title"
				@click="navigate(item.path)"
			>
				<v-list-tile-content>
					<v-list-tile-title>{{ item.title }}</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
	props:{
		items: {}
	},
	methods:{
		navigate(path){
			
		}
	}
}
</script>

<style scoped>
	.v-navigation-drawer{
		/* display: inline-block;
		margin-right: 0; */
	}
</style>
