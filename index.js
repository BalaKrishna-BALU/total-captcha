var Canvas = require('canvas');
var Image = Canvas.Image;

module.exports = {
	createCaptcha : function() {

		// below code generates only alphaNumeric captcha code but not an image
		var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
		var a = Math.ceil((Math.random() * alpha.length) / 10);
		var b = alpha[Math.floor(Math.random() * alpha.length)];
		var c = alpha[Math.floor(Math.random() * alpha.length)];
		var d = Math.ceil((Math.random() * alpha.length) / 10);
		var e = alpha[Math.floor(Math.random() * alpha.length)];
		var f = Math.ceil((Math.random() * alpha.length) / 10);
		var g = Math.ceil((Math.random() * alpha.length) / 10);
		var code = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;

		var canvas = new Canvas(125, 40);
		var ctx = canvas.getContext('2d');

		ctx.font = '20px Arial';
		ctx.rotate(.1);
		ctx.fillText(code, 5, 20);

		var captchaCode = [];
		captchaCode.push(code);
		captchaCode.push(canvas.toDataURL());
		return captchaCode;
	}
};
