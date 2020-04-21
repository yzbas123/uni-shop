<template>
	<view class="news-detail">
		<!-- 标题 -->
		<view class="title">{{detailInfo.title}}</view>
		<!-- 其他信息 -->
		<view class="other">
			<!-- 创建时间 -->
			<text>发表时间:{{detailInfo.add_time|dateFormate}}</text>
			<!-- 点击量 -->
			<text>点击量:{{detailInfo.click}}</text>
		</view>
		<rich-text :nodes="detailInfo.content" class="content"></rich-text>
	</view>
</template>

<script>
	export default {
		async onLoad(e) {
			const id = e.newsid;
			// 获取详情数据
			const res = await this.$request({
				url: "/api/getnew/" + id
			}).catch(err => {
				uni.showToast({
					title: '请求接口失败!',
					icon: 'none'
				});
			});
			if (res.data.status !== 0) {
				uni.showToast({
					title: '获取详情数据失败!',
					icon: 'none'
				});
			}
			// 缓存数据
			this.detailInfo = res.data.message[0]
		},
		data() {
			return {
				detailInfo: {}
			};
		}
	}
</script>

<style lang="scss">
.news-detail{
	box-sizing: border-box;
	padding: 10rpx 20rpx;
	.title{
		text-align: center;
		font-size: 36rpx;
		font-weight: 700;
	}
	.other{
		display: flex;
		padding: 0 80rpx;
		justify-content: space-between;
		margin: 20rpx 0;
		font-size: 22rpx;
		color: #333;
	}
	.content{
		font-size: 28rpx;
		line-height: 1.5em;
		strong{
			line-height: 2em;
		}
	}
}
</style>
