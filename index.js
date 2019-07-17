var { createCanvas } = require('canvas');

var captchaCode = [],
	canvasWidth = 0,
	alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

module.exports = {
	createCaptcha: function (object) {
		let code = "",
			objectLength = object.length,
			alphaLength = alpha.length;
		if (object.mode == 1) {
			// below code generates numeric captcha code
			for (let i = 0; i < objectLength; i++) {
				code = code + Math.floor((Math.random() * 99) / 10);
			}
			canvasWidth = (12 * objectLength);
		} else if (object.mode == 2) {
			// below code generates alphabetical captcha code
			for (let i = 0; i < objectLength; i++) {
				code = code + alpha[Math.floor(Math.random() * alphaLength)];
			}
			canvasWidth = (10 * Math.floor(objectLength / 2)) + (20 * Math.ceil(objectLength / 2));
		} else {
			// below code generates alphaNumeric captcha code
			for (let i = 0; i < objectLength; i++) {
				if (i % 2 == 0) {
					code = code + alpha[Math.floor(Math.random() * alphaLength)];
				} else {
					code = code + Math.ceil((Math.random() * alphaLength) / 10);
				}
			}
			canvasWidth = (10 * Math.floor(objectLength / 2)) + (20 * Math.ceil(objectLength / 2));
		}

		let canvas = createCanvas(canvasWidth, 40);
		let ctx = canvas.getContext('2d');

		ctx.font = '20px Arial';
		ctx.fillText(code, 1, 20);
		captchaCode = [];
		captchaCode.push(code);
		captchaCode.push(canvas.toDataURL());
		return captchaCode;
	}
};