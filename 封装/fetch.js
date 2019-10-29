// 从环境变量中导入域名baseUrl 值为''
import { baseUrl } from './env'

// 导出模块 fetch 默认url为'' data为{} 类型为GET接收 方法fetch
export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
	// 将得到的type值转为大写
	type = type.toUpperCase();
	// 将得到的url加上域名
	url = baseUrl + url;

	// 如果type为GET
	if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		// 枚举，即循环遍历
		Object.keys(data).forEach(key => {
			// 将得到的data数据 以键值对的方式拼接 key = data[key] & key = data[key] & key = data[key]...
			dataStr += key + '=' + data[key] + '&';
		})
		// 如果字符串不为空
		if (dataStr !== '') {
			// 通过substr抽取第0位到最后一个&，效果即为去掉最后一个&
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			// 拼接url地址？字符串数据 用于传输？后面的数据
			url = url + '?' + dataStr;
		}
	}

	//如果使用fetch方法 
	if (window.fetch && method == 'fetch') {
		// 设置 请求配置
		let requestConfig = {
			// 请求时，cookie既可以同域发送，也可以跨域发送
			credentials: 'include',
			method: type,
			// 请求头设置 接收类型 内容类型
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			// 跨域
			mode: "cors",
			// cache 只读属性包含请求的缓存模式
			// force-cache：浏览器在HTTP缓存中查找匹配的请求。
			// 		如果有新的或旧的匹配，它将从缓存中返回。
			//   	如果不匹配，浏览器将发出正常的请求，并用下载的资源更新缓存。
			cache: "force-cache"
		}

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}
		
		try {
			const response = await fetch(url, requestConfig);
			const responseJson = await response.json();
			return responseJson
		} catch (error) {
			throw new Error(error)
		}
	} else {
		return new Promise((resolve, reject) => {
			let requestObj;
			if (window.XMLHttpRequest) {
				requestObj = new XMLHttpRequest();
			} else {
				requestObj = new ActiveXObject;
			}

			let sendData = '';
			if (type == 'POST') {
				sendData = JSON.stringify(data);
			}

			requestObj.open(type, url, true);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send(sendData);

			requestObj.onreadystatechange = () => {
				if (requestObj.readyState == 4) {
					if (requestObj.status == 200) {
						let obj = requestObj.response
						if (typeof obj !== 'object') {
							obj = JSON.parse(obj);
						}
						resolve(obj)
					} else {
						reject(requestObj)
					}
				}
			}
		})
	}
}