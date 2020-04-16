<template>
	<view class="goods_list">
		<view class="goods_list_item" v-for="item in goods" :key="item.id" @tap="itemClick(item.id)">
			<!-- 商品图片 -->
			<image :src="item.img_url" mode="widthFix"></image>
			<!-- 商品价格区域 -->
			<view class="price_section">
				<!-- 当前价格 -->
				<text >￥{{item.sell_price}}</text>
				<!-- 商场价格 -->
				<text class="market_price">￥{{item.market_price}}</text>
			</view>
			<!-- 商品标题 -->
			<view class="title_section">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goods: {
				type: Array,
				required: true
			}
		},
		data() {
			return {

			};
		},
		methods:{
			itemClick(id){
				// 跳转到详情界面,同时携带商品ID
				uni.navigateTo({
					url: '/pages/detail/detail?id='+id
				});
			}
		}
	}
</script>

<style lang=scss scoped>
.goods_list{
	display: flex;
	flex-wrap: wrap;
	padding: 20rpx;
	background-color: #eee;
	justify-content: space-between;
	.goods_list_item{
		margin-bottom: 20rpx;
		width: 49%;
		/* height: 580rpx; */
		background-color:#fff;
		image{
			width: 100%;
		}
		.price_section{
			margin: 20rpx 0;
			padding: 0 10rpx;
			font-size: 35rpx;
			color:#007AFF;
			.market_price{
				margin-left: 20rpx;
				font-size: 30rpx;
				text-decoration: line-through;
				color:#aaa;
			}
		}
		.title_section{
			font-size: 25rpx;
			padding: 0 10rpx;
			line-height: 2em;
		}
	}
}
</style>
