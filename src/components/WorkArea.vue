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
						<v-text-field label="選択肢1" v-model="branches.branch1.display_text" @change="generate()"></v-text-field>
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
		<v-container>
			<div class="row mb-2 mr-1 mr-1 ml-1">
        <button type="button" class="col-md-6 btn btn-success" @click="generate">嵐を呼ぶ！</button>
        <a href ="https://twitter.com/intent/tweet?&hashtags=嵐を呼ぶジェネレーター&url=https://afterschoolstudy.github.io/generator_of_call_a_storm" class="col-md-6 btn btn-primary">嵐をシェアする！</a>
      </div>

      <div class="mb-4">
        <canvas id="output_field" width="2880" height="1620" v-show="!isGenerated"></canvas>
        <img class="output_image" :src="src" v-show="isGenerated" />
      </div>
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
			},
			src: '',
			isGenerated : false
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
		},
		generate () {
      // 描画
      let ctx = document.getElementById('output_field').getContext('2d')
      this.drawBg(ctx, '桃 ~ 黃')
      this.drawTitle(ctx, '桃 ~ 黃')
      this.drawCaption(ctx, this.branches.branch1.display_text, 'left', { 'x': 400, 'y': 1350 })
      this.drawCaption(ctx, 'iiii', 'right', { 'x': 2480, 'y': 1350 })
      // 生成
      ctx = document.getElementById('output_field')
      this.isGenerated = true
      this.src = ctx.toDataURL()
    },
    drawTitle (ctx, colorType) {
      ctx.font = '250px sans-serif'
      ctx.textAlign = 'left'
      ctx.fillStyle = colorType === '桃 ~ 黃' ? '#5853A0' : '#633EBF'
      ctx.fillText('bbbb', 140, 590)
      ctx.textAlign = 'right'
      ctx.fillText('cccc', 2740, 930)
    },
    drawCaption (ctx, text, align, coordinate) {
      ctx.textAlign = align
      ctx.lineWidth = 5
      ctx.fillStyle = '#FFF'
      ctx.font = '90px cursive'
      ctx.fillText(text, coordinate['x'], coordinate['y'])
      ctx.strokeStyle = 'gray'
      ctx.strokeText(text, coordinate['x'], coordinate['y'])
    },
    drawBg (ctx, colorType) {
      ctx.beginPath()
      const ctxBaseColor = ctx.createLinearGradient(0, 410, 0, 1620)
      if (colorType === '桃 ~ 黃') {
        ctxBaseColor.addColorStop(0.0, '#FD81A6')
        ctxBaseColor.addColorStop(1.0, '#FFFF83')
      } else {
        ctxBaseColor.addColorStop(0.0, '#AEEC97')
        ctxBaseColor.addColorStop(0.3, '#FFF')
        ctxBaseColor.addColorStop(1.0, '#73B2F9')
      }
      ctx.fillStyle = ctxBaseColor
      ctx.fillRect(0, 0, 2880, 1620)
    }
	}
}
</script>

<style scoped>
.v-card{
	padding: 20px;
}
.output_image {
	max-width: 100%;
}
@media screen and (max-width: 960px) {
	.output_image{
		width: 100%;
		height: 100%;
	}
}
</style>
