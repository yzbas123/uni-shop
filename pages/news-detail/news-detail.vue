<template>
	<view>
		资讯详情pages
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
			this.detailInfos = res.data.message
		},
		data() {
			return {
				detailInfos: []
			};
		}
	}
</script>

<style lang="scss">

</style>
