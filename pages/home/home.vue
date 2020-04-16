<template>
	<view class="home">
		<!-- 轮播图 -->
		<swiper indicator-dots autoplay circular>
			<swiper-item v-for="item in swiperDatas" :key='item.id'>
				<navigator :url="item.url">
					<image :src="item.img"></image>
				</navigator>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav_section">
			<view class="nav_item" v-for="item in navs" :key="item.id" @tap="goToPages(item.path)">
				<!-- 字体图标 -->
				<view :class="item.icon"></view>
				<!-- 文字描述 -->
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区域 -->
		<view class="recommend_goods">
			<!-- 推荐标题 -->
			<view class="recommend_title">
				<!-- 标题文本 -->
				推荐商品
			</view>
			<!-- 商品列表区域 -->
			<goodslist :goods="goods" @goodsclicked="goodsClickHandler"></goodslist>
		</view>
	</view>

</template>

<script>
	import goodslist from '../../components/GoodsList/GoodsList'
	export default {
		components: {
			goodslist
		},
		data() {
			return {
				// 轮播图数据列表
				swiperDatas: [],
				// 导航栏数据列表
				navs: [{
						id: 0,
						icon: 'iconfont icon-ziyuan',
						title: '黑马超市',
						path: '/pages/goods/goods'
					},
					{
						id: 1,
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						id: 2,
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						id: 3,
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				],
				// 商品列表数据
				goods: [],
				// 商品列表页索引
				goodsPageIndex: 1
			}
		},
		onLoad() {
			this.getSwiperDatas()
			this.getGoodsList()
		},
		onReachBottom(){
			// 页索引增加
			this.goodsPageIndex++
			// 获取数据
			this.getGoodsList()
		},
		methods: {
			// 获取轮播图数据
			async getSwiperDatas() {
				// 使用自己封装的工具进行请求
				const res = await this.$request({
					url: '/api/getlunbo'
				}).catch(err => {
					// 请求接口失败
					return uni.showToast({
						title: '请求接口失败',
						icon: "none"
					});
				})
				// 判断获取数据失败与否
				if (res.data.status !== 0) {
					return uni.showToast({
						title: '获取数据失败!'
					});
				}
				// 缓存数据
				this.swiperDatas = res.data.message;
			},
			// 导航栏项目被点击时,跳转到对应页面
			goToPages: function(path) {
				uni.navigateTo({
					url: path
				});
			},
			// 获取商品列表数据
			async getGoodsList() {
				const res = await this.$request({
					url: "/api/getgoods?pageindex=" + this.goodsPageIndex
				}).catch(err => {
					return uni.showToast({
						title: '请求接口失败'
					});
				});

				// 判断获取数据失败与否
				if (res.data.status !== 0) {
					return uni.showToast({
						title: '获取数据失败!'
					});
				}
				// 缓存数据
				this.goods.push(...res.data.message) ;
			},
			goodsClickHandler(id) {
				console.log(id);
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 轮播图样式
	.home {
		swiper {
			width: 750upx;
			height: 380rpx;

			navigator {
				width: 100%;
				height: 100%;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	// 导航栏样式
	.nav_section {
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		padding: 10rpx 20rpx;
		border-bottom: 8rpx solid #eee;

		.nav_item {
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 28rpx;

			view {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				background-color: #007AFF;
				font-size: 48rpx;
				color: #fff;
			}
		}
	}

	// 推荐商品区域
	.recommend_title {
		height: 60rpx;
		line-height: 60rpx;
		padding: 10rpx 0;
		font-size: 36rpx;
		font-weight: 500;
		text-align: center;
		color: #007AFF;
		letter-spacing: 20rpx;
	}
</style>
