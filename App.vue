<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style>
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
	@font-face {
		font-family: 'iconfont';
		src: url('./static/fonts/iconfont.eot');
		src: url('./static/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
			url('./static/fonts/iconfont.woff2') format('woff2'),
			url('./static/fonts/iconfont.woff') format('woff'),
			url('./static/fonts/iconfont.ttf') format('truetype')
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-shipin:before {
		content: "\f0024";
	}

	.icon-tupian:before {
		content: "\e650";
	}

	.icon-guanyuwomen:before {
		content: "\e608";
	}

	.icon-ziyuan:before {
		content: "\e60d";
	}
</style>
