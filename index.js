var Canvas = require('canvas');
var Image = Canvas.Image;

var captchaCode = [],
    canvasWidth = 0,
    alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

module.exports = {
	createCaptcha : function(object) {
		if (object.mode == 1) {
			// below code generates numeric captcha code
			var code = '';
			for (var i = 0; i < object.length; i++) {
				code = code + Math.floor((Math.random() * 99) / 10);
			}
			canvasWidth = (12 * object.length );
		} else if (object.mode == 2) {
			// below code generates alphabetical captcha code
			var code = '';
			for (var i = 0; i < object.length; i++) {
				code = code + alpha[Math.floor(Math.random() * alpha.length)];
			}
			canvasWidth = (10 * Math.floor(object.length / 2)) + (20 * Math.ceil(object.length / 2));
		} else {
			// below code generates alphaNumeric captcha code
			var code = '';
			for (var i = 0; i < object.length; i++) {
				if (i % 2 == 0) {
					code = code + alpha[Math.floor(Math.random() * alpha.length)];
				} else {
					code = code + Math.ceil((Math.random() * alpha.length) / 10);
				}
			}
			canvasWidth = (10 * Math.floor(object.length / 2)) + (20 * Math.ceil(object.length / 2));
		}

		var canvas = new Canvas(canvasWidth, 40);
		var ctx = canvas.getContext('2d');

		ctx.font = '20px Arial';
		ctx.fillText(code, 1, 20);
		captchaCode = [];
		captchaCode.push(code);
		captchaCode.push(canvas.toDataURL());
		return captchaCode;
	}
}; 
