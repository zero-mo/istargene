var moment = require('moment');

moment.locale('zh-cn'); // 使用中文

exports.formatDate = function(date, friendly) {
    date = moment(date);

    if (friendly) {
        return date.fromNow();
    } else {
        return date.format('YYYY-MM-DD HH:mm');
    }
};

/*
 * 判断JavaScript对象类型的函数
 * @param {}
 */
function is(obj, type) {
	var toString = Object.prototype.toString, undefined;

	return (type === 'Null' && obj === null) ||
		(type === "Undefined" && obj === undefined) ||
		toString.call(obj).slice(8, -1) === type;
};

/*
 * 深拷贝函数
 * @param {Object} oldObj: 被拷贝的对象
 * @param {Object} newObj: 需要拷贝的对象
 * @ return {Object} newObj: 拷贝之后的对象
 */

function deepCopy(oldObj, newObj) {
 	for (var key in oldObj) {
 		var copy = oldObj[key];
 		if (oldObj === copy) continue; //如window.window === window，会陷入死循环，需要处理一下
 		if (is(copy, "Object")) {
 			newObj[key] = deepCopy(copy, newObj[key] || {});
 		} else if (is(copy, "Array")) {
 			newObj[key] = []
			newObj[key] = deepCopy(copy, newObj[key] || []);
 		} else {
 			newObj[key] = copy;
 		}
 	}
 	return newObj;
 }

exports.deepCopy = deepCopy;
