<template>
	<view class="wrapper">
		<!-- 新闻项目 -->
		<view class="news_item" v-for="item in newslist" :key="item.id" @tap="newsItemClicked(item.id)">
			<!-- 左侧图片 -->
			<image :src="item.img_url"></image>
			<!-- 右侧文本区域 -->
			<view class="text_cotent">
				<!-- 顶部标题 -->
				<text class="title">{{item.title}}</text>
				<!-- 底部信息 -->
				<view class="bottom">
					<text>发表时间:{{item.add_time|dateFormate}}</text>
					<text>浏览:{{item.click}}</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: {
			newslist: Array
		},
		methods:{
			newsItemClicked(id){
				// 自定义事件
				this.$emit('newsItemClicked',id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		.news_item {
			box-sizing: border-box;
			width: 750rpx;
			height: 200rpx;
			padding: 15rpx;
			display: flex;
			border-bottom: 1px solid $uni-shop-main-color;

			image {
				min-width: 200rpx;
				max-width: 200rpx;
				height: 100%;
			}

			.text_cotent {
				display: flex;
				width: 550rpx;
				margin-left: 15rpx;
				flex-direction: column;
				justify-content: space-between;
				font-size: 28rpx;
				.bottom {
					font-size: 24rpx;
					display: flex;
					justify-content: space-between;
				}
			}
		}
	}
</style>
