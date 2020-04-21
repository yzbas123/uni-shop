<template>
	<view class="news">
		<news-item :newslist="newsList" @newsItemClicked="newsItemClicked"></news-item>
	</view>
</template>

<script>
	import NewsItem from '../../components/NewsItem/NewsItem.vue'
	export default {
		components: {
			"news-item": NewsItem
		},
		data() {
			return {
				//资讯列表 
				newsList: []
			}
		},
		onLoad() {
			this.getNewsList();
		},
		methods: {
			async getNewsList() {
				const res = await this.$request({
					url: "/api/getnewslist"
				}).catch(err => {
					return uni.showToast({
						title: '请求接口失败!',
						icon: 'none'
					});
				});
				if (res.data.status !== 0) {
					return uni.showToast({
						title: '获取资讯列表失败',
						icon: 'none'
					});
				}
				// 缓存
				this.newsList = res.data.message;
			},
			newsItemClicked(id){
				// 导航到详情见面
				uni.navigateTo({
					url:"../news-detail/news-detail?newsid="+id
				});
			}
		}
	}
</script>

<style scoped lang="scss">
</style>
