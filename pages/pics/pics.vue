<template>
	<view class="pics">
		<!-- 左侧导航栏 -->
		<scroll-view scroll-y="true" class="left-nav">
			<view :class="curretIndex===index ? 'active':''" v-for="(item,index) in picCates" :key="item.id" @tap="picCatesClicked(index,item.id)">{{item.title}}</view>
		</scroll-view>
		<!-- 右侧内容区域 -->
		<view class="right-content">
			<!-- 项目 -->
			<view class="item" v-for="item in pics" :key="item.id" @tap="previewImg(item.img_url)">
				<!-- 图片区域 -->
				<image :src="item.img_url"></image>
				<!-- 描述区域 -->
				<text>{{item.title}}</text>
			</view>
			<view v-if="pics.length===0">暂无数据</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 图片分类数据列表
				picCates: [],
				// 当前索引值
				curretIndex: 0,
				// 二级图片数据列表
				pics: []
			}
		},
		onLoad() {
			this.getPicCates()
		},
		methods: {
			async getPicCates() {
				const res = await this.$request({
					url: "/api/getimgcategory"
				}).catch(err => {
					return uni.showToast({
						title: '请求接口失败',
						icon: 'none'
					});
				});

				if (res.data.status !== 0) {
					return uni.showToast({
						title: '获取图片分类数据失败',
						icon: 'none'
					});
				}
				// 缓存数据
				this.picCates = res.data.message
				// 获取一级分类的数据后,立即获取二级分类数据
				this.getPics(this.picCates[0].id);
			},
			async getPics(id) {
				// 请求当前页对应的数据
				const res = await this.$request({
					url: "/api/getimages/" + id
				}).catch(err => {
					uni.showToast({
						title: '请求接口失败',
						icon: 'none'
					});
				});
				// 
				if (res.data.status !== 0) {
					uni.showToast({
						title: '获取图片数据失败',
						icon: 'none'
					});
				}

				// 缓存
				this.pics = res.data.message
			},
			picCatesClicked(i, id) {
				// 设置当前索引值
				this.curretIndex = i;
				this.getPics(id)
			},
			previewImg(current){
				// 获取图片链接列表
				const urls=this.pics.map(value=>value.img_url);
				//
				 uni.previewImage({
					 current,
					 urls
				 })

			}
		}
	}
</script>

<style lang="scss" scoped>
	uni-page-body {
		height: 100%;
	}

	.pics {
		display: flex;
		height: 100%;

		.left-nav {
			width: 200rpx;
			border-right: 1px solid #eee;
			height: 100%;

			view {
				height: 60rpx;
				padding: 30rpx;
				border-top: 1px solid #eee;
				text-align: center;
				font-size: 15px;
				color: #333;
			}

			.active {
				background-color: $uni-shop-main-color;
				color: #fff;
			}
		}

		.right-content {
			width: 520rpx;
			height: 100%;
			margin: 10rpx auto;

			.item {
				font-size: 15px;
				line-height: 1.5em;
				margin-bottom: 10rpx;

				image {
					width: 100%;
				}
			}
		}
	}
</style>
