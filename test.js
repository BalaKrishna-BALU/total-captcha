var captcha = require("total-captcha");
var obj = {
	"mode" : 2,
	"length" : 6
};
var resultant = captcha.createCaptcha(obj);
console.log("resultant", resultant);
