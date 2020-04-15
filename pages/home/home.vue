<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" circular>
			<swiper-item v-for="item in swiperDatas" :key='item.key'>
				<navigator :url="item.url">
					<image :src="item.img"></image>
				</navigator>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperDatas: []
			}
		},
		onLoad() {
			this.getSwiperDatas()
		},
		methods: {
			// 获取轮播图数据
			getSwiperDatas() {
				console.log('获取轮播图数据');
				uni.request({
					url: 'http://localhost:8082/api/getlunbo',
					method: 'GET',
					data: {},
					success: res => {
						console.log(res.data);
						// 将轮播图数据进行缓存
						if (res.data.status !== 0) {
							// 获取失败,提示
							return uni.showToast({
								title: '获取数据失败'
							});
						}
						this.swiperDatas = res.data.message
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="scss">
.home{
	swiper{
		width: 750upx;
		height: 380rpx;
		navigator{
			width: 100%;
			height: 100%;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
