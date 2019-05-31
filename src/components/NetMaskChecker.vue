<template>
	<v-container>
		<v-layout row wrap>
			<v-flex sm2 xs4>
				<v-text-field :mask="'###'" v-model="netmask.a" />
			</v-flex>
			<v-flex sm2 xs4>
				<v-text-field :mask="'###'" v-model="netmask.b" />
			</v-flex>
			<v-flex sm2 xs4>
				<v-text-field :mask="'###'" v-model="netmask.c" />
			</v-flex>
			<v-flex sm2 xs12>
				<v-text-field :mask="'###'" v-model="netmask.d" />
			</v-flex>
			<v-flex sm4 xs12>
				<v-card-text>{{netmask.bin}}</v-card-text>
			</v-flex>
		</v-layout>
		<v-layout row wrap>
			<v-flex sm2 xs4>
				<v-text-field :mask="'###'" v-model="ipa.a" />
			</v-flex>
			<v-flex sm2 xs4>
				<v-text-field :mask="'###'" v-model="ipa.b" />
			</v-flex>
			<v-flex sm2 xs4>
				<v-text-field :mask="'###'" v-model="ipa.c" />
			</v-flex>
			<v-flex sm2 xs12>
				<v-text-field :mask="'###'" v-model="ipa.d" />
			</v-flex>
			<v-flex sm4 xs12>
				<v-card-text>{{ipa.bin}}</v-card-text>
			</v-flex>
		</v-layout>
		<v-layout row wrap>
			<v-flex sm2 xs4>
				<v-text-field :mask="'###'" v-model="ipb.a" />
			</v-flex>
			<v-flex sm2 xs4>
				<v-text-field :mask="'###'" v-model="ipb.b" />
			</v-flex>
			<v-flex sm2 xs4>
				<v-text-field :mask="'###'" v-model="ipb.c" />
			</v-flex>
			<v-flex sm2 xs12>
				<v-text-field :mask="'###'" v-model="ipb.d" />
			</v-flex>
			<v-flex sm4 xs12>
				<v-card-text>{{ipb.bin}}</v-card-text>
			</v-flex>
		</v-layout>
		<v-btn color="primary" @click="convert()">変換</v-btn>
	</v-container>
</template>

<script>
export default {
	data(){
		return{
			netmask: {
				a: "255",
				b: "255",
				c: "255",
				d: "0",
				bin: ""
			},
			ipa: {
				a: "172",
				b: "26",
				c: "1",
				d: "1",
				bin: ""
			},
			ipb: {
				a: "172",
				b: "26",
				c: "1",
				d: "2",
				bin: ""
			}
		}
	},
	methods:{
		convert(){
			this.netmask.bin = this.intToBin(this.netmask.a) + '  '
				+ this.intToBin(this.netmask.b)+ '  '
				+ this.intToBin(this.netmask.c)+ '  '
				+ this.intToBin(this.netmask.d)
			this.ipa.bin = this.intToBin(this.ipa.a) + '  '
				+ this.intToBin(this.ipa.b)+ '  '
				+ this.intToBin(this.ipa.c)+ '  '
				+ this.intToBin(this.ipa.d)
			this.ipb.bin = this.intToBin(this.ipb.a) + '  '
				+ this.intToBin(this.ipb.b)+ '  '
				+ this.intToBin(this.ipb.c)+ '  '
				+ this.intToBin(this.ipb.d)
		},
		intToBin(i){
			return ('00000000' + Number(i).toString(2)).substr(-8)
		}
	}
}
</script>

<style>

</style>
