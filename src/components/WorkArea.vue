<template>
	<div>
		<v-container grid-list-md text-xs-center>
			<v-layout row wrap>
				<v-flex xs12>
					<v-card>
						<v-text-field label="診断名" v-model="judgement.judgement_name"></v-text-field>
						<v-text-field label="質問文" v-model="judgement.conditions_branch"></v-text-field>
						<v-select
							:items="[2,3]"
							v-model="judgement.branch_count"
							label="選択肢の数"
							return-object
							@change="branch_count_change()"
						></v-select>
					</v-card>
				</v-flex>
				<v-flex v-bind:class="branch_quantity.layout">
					<v-card>
						<v-text-field label="選択肢1" v-model="branches.branch1.display_text"></v-text-field>
						<v-text-field label="選択肢1の結果" v-model="branches.branch1.result"></v-text-field>
					</v-card>
				</v-flex>
				<v-flex v-bind:class="branch_quantity.layout">
					<v-card>
						<v-text-field label="選択肢2" v-model="branches.branch2.display_text"></v-text-field>
						<v-text-field label="選択肢2の結果" v-model="branches.branch2.result"></v-text-field>
					</v-card>
				</v-flex>
				<v-flex v-if="branches.branch3.exists" v-bind:class="branch_quantity.layout">
					<v-card>
						<v-text-field label="選択肢3" v-model="branches.branch3.display_text"></v-text-field>
						<v-text-field label="選択肢3の結果" v-model="branches.branch3.result"></v-text-field>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	data(){
		return {
			judgement:{
				judgement_name: '',
				conditions_branch: '',
				branch_count: 2,
			},
			branches: {
				branch1: {
					display_text: '',
					result: ''
				},
				branch2: {
					display_text: '',
					result: ''
				},
				branch3:{
					exists: false,
					display_text: '',
					result: ''
				}
			},
			branch_quantity: {
				layout: 'sm6'
			}
		}
	},
	methods:{
		branch_count_change(){
			if(this.judgement.branch_count == 3){
				this.branch_quantity.layout = 'sm4'
				this.branches.branch3.exists = true
			}else if(this.judgement.branch_count == '2'){
				this.branch_quantity.layout = 'sm6'
				this.branches.branch3.exists = false
			}
		}
	}
}
</script>

<style>
.v-card{
	padding: 20px;
}
</style>
