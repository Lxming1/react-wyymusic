export function getImgSize(imageUrl, size) {
  return `${imageUrl}?param=${size}x${size}`
}

export function formatDate(date, fmt) {
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
		}
	}
	return fmt;
}

function padLeftZero (str) {
	return ('00' + str).substr(str.length);
}

export const wan = (num, count) => {
	const newNum = num > count ? (num / 10000).toFixed(0) + '万' : num
	return newNum
}


export const formateTimeSToM = time =>{
	const h = parseInt(time / 3600)
	const minute = parseInt(time / 60 % 60)
	const second = Math.ceil(time % 60)    

	const hours = h < 10 ? '0' + h : h
	const formatSecond = second > 59 ? 59 : second
	return `${hours > 0 ? `${hours}:` : ''}${minute < 10 ? '0' + minute : minute}:${formatSecond < 10 ? '0' + formatSecond : formatSecond}`
}
