<template>
	<div>
		<v-container grid-list-md text-xs-center>
			<v-layout row wrap>
				<v-flex xs12>
					<v-card>
						<v-text-field label="診断名"></v-text-field>
						<v-text-field label="質問文"></v-text-field>
						<v-select :items="[2,3]" label="選択肢の数" return-object></v-select>
					</v-card>
				</v-flex>
				<v-flex sm6>
					<v-card>
						<v-text-field label="選択肢1"></v-text-field>
						<v-text-field label="選択肢1の結果"></v-text-field>
					</v-card>
				</v-flex>
				<v-flex sm6>
					<v-card>
						<v-text-field label="選択肢2"></v-text-field>
						<v-text-field label="選択肢2の結果"></v-text-field>
					</v-card>
				</v-flex>
				<v-flex v-if="0" sm6>
					<v-card>
						<v-text-field label="選択肢3"></v-text-field>
						<v-text-field label="選択肢3の結果"></v-text-field>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
