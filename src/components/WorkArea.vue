<template>
	<div>
		<v-container grid-list-md text-xs-center>
			<v-layout row wrap>
				<v-flex xs12>
					<v-card>
						<v-text-field label="診断名" v-model="judgement.judgement_name" @change="generate()"></v-text-field>
						<v-text-field label="質問文" v-model="judgement.conditions_branch" @change="generate()"></v-text-field>
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
						<v-text-field label="あなたは..." v-model="branches.branch1.result" @change="generate()"></v-text-field>
					</v-card>
				</v-flex>
				<v-flex v-if="branches.branch3.exists" v-bind:class="branch_quantity.layout">
					<v-card>
						<v-text-field label="選択肢3" v-model="branches.branch3.display_text" @change="generate()"></v-text-field>
						<v-text-field label="あなたは..." v-model="branches.branch3.result" @change="generate()"></v-text-field>
					</v-card>
				</v-flex>
				<v-flex v-bind:class="branch_quantity.layout">
					<v-card>
						<v-text-field label="選択肢2" v-model="branches.branch2.display_text" @change="generate()"></v-text-field>
						<v-text-field label="あなたは..." v-model="branches.branch2.result" @change="generate()"></v-text-field>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container>
			<ol>
				<li>文字を書き換える！</li>
				<li>画像を長押しして保存！</li>
				<li>
					<v-btn color="primary"
						target="_blank"
						href ="https://twitter.com/intent/tweet?&hashtags=クソ診断ジェネレーター&url=https://nnn-kakimoto.github.io/five-sec-judge/dist/"
					>
						シェアする！
					</v-btn>
				</li>
			</ol>

			<v-layout row wrap>
				<v-flex xs12>
					<v-card>
						<canvas id="output_field" width="2880" height="1620" v-show="!isGenerated"></canvas>
						<img class="output_image" :src="src" v-show="isGenerated" />
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
				judgement_name: '5秒でわかるサイコパス診断',
				conditions_branch: 'きのこ派？たけのこ派？',
				branch_count: 2,
			},
			branches: {
				branch1: {
					display_text: 'きのこ派',
					result: 'サイコパス'
				},
				branch2: {
					display_text: 'たけのこ派',
					result: '人間'
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
			isGenerated : false,
			drawPoint: {
				xCenter: 1440,
				yCenter: 810,
				conditionCenter: 500,
				diaWidth: 720,
				branchBar: 200,
				branchHeight: 150,
				resultHeight: 1300,
				resultBoxHeight: 250
			}
		}
	},
	mounted(){
		this.generate()
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
			this.generate()
		},
		generate () {
			// 描画
			let ctx = document.getElementById('output_field').getContext('2d')
			this.drawInitial(ctx)
			this.drawTitle(ctx)
			if(this.branches.branch3.exists){
				// 第3の選択肢.表示ありなら
				this.drawBranch3(ctx)
			}
			this.drawBranch1(ctx)
			this.drawBranch2(ctx)
			// 生成
			ctx = document.getElementById('output_field')
			this.isGenerated = true
			this.src = ctx.toDataURL()
		},
		drawTitle (ctx) {
			// 診断タイトルと条件式を描画
			ctx.font = '120px sans-serif'
			ctx.textAlign = 'center'
			ctx.fillStyle = '#000'
			ctx.fillText(this.judgement.judgement_name, this.drawPoint.xCenter, 200)
			ctx.font = '75px sans-serif'
			ctx.fillText(this.judgement.conditions_branch, this.drawPoint.xCenter, this.drawPoint.conditionCenter)
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
		resetCanvas(ctx){
			ctx.fillStyle = '#fff'
			ctx.fillRect(0, 0, 2880, 1620)
		},
		drawInitial (ctx) {
			// 最初のひし形書く
			this.resetCanvas(ctx)
			ctx.beginPath()
			ctx.strokeStyle = '#000'
			ctx.lineWidth = '5'
			ctx.moveTo(this.drawPoint.xCenter, this.drawPoint.conditionCenter-200)
			ctx.lineTo(this.drawPoint.xCenter+this.drawPoint.diaWidth, this.drawPoint.conditionCenter-25)
			ctx.lineTo(this.drawPoint.xCenter, this.drawPoint.conditionCenter+175)
			ctx.lineTo(this.drawPoint.xCenter-this.drawPoint.diaWidth, this.drawPoint.conditionCenter-25)
			ctx.closePath()
			ctx.stroke()
		},
		drawBranch1(ctx){
			ctx.beginPath();
			ctx.strokeStyle = '#000'
			ctx.lineWidth = '5'
			ctx.moveTo(this.drawPoint.xCenter-this.drawPoint.diaWidth, this.drawPoint.conditionCenter-25)
			ctx.lineTo(this.drawPoint.xCenter/4, this.drawPoint.conditionCenter-25)
			ctx.lineTo(this.drawPoint.xCenter/4, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar)
			ctx.moveTo(this.drawPoint.xCenter/4-350, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar)
			ctx.lineTo(this.drawPoint.xCenter/4+350, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar)
			ctx.lineTo(this.drawPoint.xCenter/4+350, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar+this.drawPoint.branchHeight)
			ctx.lineTo(this.drawPoint.xCenter/4-350, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar+this.drawPoint.branchHeight)
			ctx.closePath()
			ctx.font = '110px sans-serif'
			ctx.textAlign = 'center'
			ctx.fillStyle = '#000'
			ctx.fillText(this.branches.branch1.display_text, this.drawPoint.xCenter/4, this.drawPoint.conditionCenter+150 + this.drawPoint.branchBar+this.drawPoint.branchHeight)
			ctx.moveTo(this.drawPoint.xCenter/4, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar+this.drawPoint.branchHeight)
			ctx.lineTo(this.drawPoint.xCenter/4, this.drawPoint.resultHeight)
			ctx.moveTo(this.drawPoint.xCenter/4-350, this.drawPoint.resultHeight)
			ctx.lineTo(this.drawPoint.xCenter/4+350, this.drawPoint.resultHeight)
			ctx.lineTo(this.drawPoint.xCenter/4+350,this.drawPoint.resultHeight+this.drawPoint.resultBoxHeight)
			ctx.lineTo(this.drawPoint.xCenter/4-350,this.drawPoint.resultHeight+this.drawPoint.resultBoxHeight)
			ctx.closePath()
			ctx.stroke()
			if(this.branches.branch1.result == ''){
				return true
			}
			ctx.font = '80px sans-serif'
			ctx.fillText('あなたは', this.drawPoint.xCenter/4, this.drawPoint.resultHeight+115)
			ctx.fillText(this.branches.branch1.result+'です', this.drawPoint.xCenter/4, this.drawPoint.resultHeight+190)
		},
		drawBranch2(ctx){
			ctx.beginPath();
			ctx.strokeStyle = '#000'
			ctx.lineWidth = '5'
			ctx.moveTo(this.drawPoint.xCenter+this.drawPoint.diaWidth, this.drawPoint.conditionCenter-25)
			ctx.lineTo((this.drawPoint.xCenter/4)*7, this.drawPoint.conditionCenter-25)
			ctx.lineTo((this.drawPoint.xCenter/4)*7, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar)
			ctx.moveTo((this.drawPoint.xCenter/4)*7-350, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar)
			ctx.lineTo((this.drawPoint.xCenter/4)*7+350, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar)
			ctx.lineTo((this.drawPoint.xCenter/4)*7+350, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar+this.drawPoint.branchHeight)
			ctx.lineTo((this.drawPoint.xCenter/4)*7-350, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar+this.drawPoint.branchHeight)
			ctx.closePath()
			ctx.font = '110px sans-serif'
			ctx.textAlign = 'center'
			ctx.fillStyle = '#000'
			ctx.fillText(this.branches.branch2.display_text, (this.drawPoint.xCenter/4)*7, this.drawPoint.conditionCenter+150 + this.drawPoint.branchBar+this.drawPoint.branchHeight)
			ctx.moveTo((this.drawPoint.xCenter/4)*7, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar+this.drawPoint.branchHeight)
			ctx.lineTo((this.drawPoint.xCenter/4)*7, this.drawPoint.resultHeight)
			ctx.moveTo((this.drawPoint.xCenter/4)*7-360, this.drawPoint.resultHeight)
			ctx.lineTo((this.drawPoint.xCenter/4)*7+360, this.drawPoint.resultHeight)
			ctx.lineTo((this.drawPoint.xCenter/4)*7+360,this.drawPoint.resultHeight+this.drawPoint.resultBoxHeight)
			ctx.lineTo((this.drawPoint.xCenter/4)*7-360,this.drawPoint.resultHeight+this.drawPoint.resultBoxHeight)
			ctx.closePath()
			ctx.stroke()
			if(this.branches.branch2.result == ''){
				return true
			}
			ctx.font = '80px sans-serif'
			ctx.fillText('あなたは', (this.drawPoint.xCenter/4)*7, this.drawPoint.resultHeight+115)
			ctx.fillText(this.branches.branch2.result+'です', (this.drawPoint.xCenter/4)*7, this.drawPoint.resultHeight+190)
		},
		drawBranch3(ctx){
			ctx.beginPath();
			ctx.strokeStyle = '#000'
			ctx.lineWidth = '5'
			ctx.moveTo(this.drawPoint.xCenter, this.drawPoint.conditionCenter+175)
			ctx.lineTo(this.drawPoint.xCenter, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar)
			ctx.closePath()
			ctx.moveTo(1080, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar)
			ctx.lineTo(1800, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar)
			ctx.lineTo(1800, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar+this.drawPoint.branchHeight)
			ctx.lineTo(1080, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar+this.drawPoint.branchHeight)
			ctx.closePath()
			ctx.font = '110px sans-serif'
			ctx.textAlign = 'center'
			ctx.fillStyle = '#000'
			ctx.fillText(this.branches.branch3.display_text, this.drawPoint.xCenter, this.drawPoint.conditionCenter+150 + this.drawPoint.branchBar+this.drawPoint.branchHeight)
			ctx.moveTo(this.drawPoint.xCenter, this.drawPoint.conditionCenter+175 + this.drawPoint.branchBar+this.drawPoint.branchHeight)
			ctx.lineTo(this.drawPoint.xCenter, this.drawPoint.resultHeight)
			ctx.moveTo(1080, this.drawPoint.resultHeight)
			ctx.lineTo(1800, this.drawPoint.resultHeight)
			ctx.lineTo(1800,this.drawPoint.resultHeight+this.drawPoint.resultBoxHeight)
			ctx.lineTo(1080,this.drawPoint.resultHeight+this.drawPoint.resultBoxHeight)
			ctx.closePath()
			ctx.stroke()
			if(this.branches.branch3.result == ''){
				return true
			}
			ctx.font = '80px sans-serif'
			ctx.fillText('あなたは', this.drawPoint.xCenter, this.drawPoint.resultHeight+115)
			ctx.fillText(this.branches.branch3.result+'です', this.drawPoint.xCenter, this.drawPoint.resultHeight+190)
		},
		
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
	.v-toolbar__content{
		font-size: 15px;
	}
	.output_image{
		width: 100%;
		height: 100%;
	}
}
</style>
