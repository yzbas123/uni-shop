<template>
  <view>
    <goods-list :goods="goods" v-if="goods.length>0"></goods-list>
    <view class="overline" v-if="isOver">-----我是有底线的-----</view>
  </view>
</template>

<script>
import goodslist from "../../components/GoodsList/GoodsList";
export default {
  components: {
    "goods-list": goodslist
  },
  data() {
    return {
      // 页索引
      pageIndex: 1,
      // 商品列表
      goods: [],
      // 是否到底
      isOver: false
    };
  },
  onLoad() {
    // 页面加载后立即获取商品列表数据
    this.getGoodsList();
  },
  // 监听下拉刷新事件
  onPullDownRefresh() {
    // 重置商品列表
    this.goods = [];
    // 重置索引
    this.pageIndex = 1;
    // 重置底线相关标志位
    this.isOver = false;
	// 重新获取数据,并在获取成功的回调函数中,关闭刷新提示
	// 本地测试时,添加的1s延时,以模拟网络访问的时间
    setTimeout(() => {
      this.getGoodsList(() => {
        uni.stopPullDownRefresh();
      });
    }, 1000);
  },
  onReachBottom() {
    // 如果没有后续数据
    if (this.goods.length < this.pageIndex * 10) return (this.isOver = true);
    // 否则页索引自加,并且继续获取商品列表
    this.pageIndex++;
    this.getGoodsList();
  },
  methods: {
    async getGoodsList(callback) {
      const res = await this.$request({
        url: "/api/getgoods?pageindex=" + this.pageIndex
      }).catch(err => {
        return uni.showToast({
          title: "请求接口失败"
        });
      });

      // 判断获取数据失败与否
      if (res.data.status !== 0) {
        return uni.showToast({
          title: "获取数据失败!"
        });
      }
      // 缓存数据
      this.goods.push(...res.data.message);
      // 如果有回调函定义则调用
      callback && callback();
    }
  }
};
</script>

<style lang="scss" scoped>
.overline {
  width: 100%;
  height: 100rpx;
  line-height: 100rpx;
  text-align: center;
  font-size: 24rpx;
  background-color: #eee;
}
</style>
