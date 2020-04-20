<template>
	<view>
		<!-- 通栏图片 -->
		<image class="contactus" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<!-- 相关信息 -->
		<view class="info">
			<view class="phone" @tap="callMeMaybe">
				<text class="title">联系电话:</text>
				<text class="content">{{phoneNumber}}(点击拨打)</text>
			</view>
			<view class="location">
				<text class="title">校区地址:</text>
				<text class="content">浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</text>
			</view>
		</view>
		<!-- 地图 -->
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="markers" :scale="13"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber: "400-618-9090",
				// 坐标信息
				longitude: 104.091313,
				latitude: 30.53021,
				markers: [{
					latitude: 30.53021,
					longitude: 104.091313,
					iconPath: '../../static/hmlogo.png',
					width: 30,
					height: 30
				}]
			}
		},
		methods: {
			callMeMaybe() {
				uni.makePhoneCall({
					phoneNumber: this.phoneNumber
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contactus {
		width: 100%;
		height: 320rpx;
	}

	.info {
		padding: 30rpx;
		font-size: 32rpx;
		line-height: 2em;

		.phone {
			border-bottom: 2rpx solid #eee;
		}

		.location {
			border-bottom: 2rpx solid #eee;
		}

		.title {
			margin-right: 20rpx;
		}
	}

	.map {
		padding:0 2%;
		width: 96%;
		height: 650rpx;
	}
</style>
