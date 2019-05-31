<template>
	<v-container flat class="outer">
		<v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="" class="">
              <v-card-title >
                <div>
                  <div class="headline">ルータ、ホストとは</div>
                  <span class="card_main_text">固定電話の親機/子機や、基地局/携帯電話、Wi-fi AP/パソコンのような関係性をイメージ。Robotino側がルータと覚える。
両方電源が入っていることが前提。</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
		</v-card>

		<v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="" class="">
              <v-card-title >
                <div>
                  <div class="headline">UTPケーブル</div>
                  <span class="card_main_text">いわゆるLANケーブル。どちらで覚えてもよい。成端(コネクタオス端子の作成)したことがあるのが望ましい。中に針金が通っており、導線として電気を通す。
どこかが切れていたり短絡(ショート)、コネクタが外れかかっているなどで電気が通らないとこのあとで失敗する。
なお両端のメスジャックのランプが点灯するなどで目視できる場合もある。
コネクタの形のことをRJ-45という。</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
		</v-card>
		
		<v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="" class="">
              <v-card-title >
                <div>
                  <div class="headline">IPアドレスについて</div>
                  <span class="card_main_text">ネットワークで他の機器と通信する機械には必ずIPアドレスというものが割り振られる。ネットワーク上の住所と表現されることが多いがそれは正確ではない。より具体的に表現するならポスト。一つの家に2つ以上存在することもあるし、集合住宅などで同じ住宅に大量のポストが存在することをイメージしてほしい。
グローバルとローカルそれぞれにIPアドレスというものが存在し、またIPv4とIPv6というものが存在するが、RobotinoにおいてはローカルIPアドレスとv4を覚えるだけでよい。(Robotino3や4は不明)
192.168.~.~や172.26.~.~という数字の並びを見たことがあると思う。これらがIPアドレス(IPv4。厳密にはアドレスでないものもある)である。
これらは前述のLANポートに1~254の間で設定することができる。この変えられる範囲は後述のサブネットによって決まるが、これはあまり覚えなくてもよい。
最低限覚える必要があるのは、『線が繋がっている範囲で同じ番号を設定できない』ことである。以下に図で示す。</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
		</v-card>

		<v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="" class="">
              <v-card-title >
                <div>
                  <div class="headline">力尽きたのでQiitaに書くことにした</div>
                  <span class="card_main_text"></span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
		</v-card>

		<v-card>
      <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="" class="">
              <v-card-title >
                <div>
                  <div class="headline">アドレス空間チェッカー</div>
                  <span class="card_main_text">サブネットマスクとIPアドレスを入力することで、同一のアドレス空間に属しているかを簡易的にチェックする。</span>
                </div>
              </v-card-title>
							<net-mask-cheker />
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
		</v-card>

	</v-container>
</template>

<script>
import SideMenu from './SideMenu'
import NetMaskCheker from './NetMaskChecker'
export default {
	data(){
		return {
			items: [
				{ title: 'Home', path: '' },
				{ title: 'About', path: '' }
			],
		}
	},
	components:{
		SideMenu,
		NetMaskCheker
	},
	methods:{
	}
}
</script>

<style scoped>
.outer{
	padding: 0 24px;
}
.inner{
	/* display: inline-block; */
	padding: 0;
	/* width: calc(100% - 300px ); */
}
.card_main_text{
	word-break: keep-all;
}
</style>
