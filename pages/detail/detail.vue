<template>
	<view>
		商品{{goodsID}}详情
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsID: ''
			}
		},
		onLoad(e) {
			this.goodsID = e.id
		},
		methods: {

		}
	}
</script>

<style>

</style>
