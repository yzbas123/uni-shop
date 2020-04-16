// 对uni-request进行封装
const BASEURL = "http://localhost:8082"
export const HttpRequest =(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BASEURL+options.url,
			method: options.method||'GET', // 请求方式默认 GET,
			data:options.data||{}, // 请求体默认为空对象
			success: res => {
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '接口请求失败'
				});
				reject(err)
			}
		});
	})
}