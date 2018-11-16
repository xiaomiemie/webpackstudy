let loaderUtils= require('loader-utils');
// loader还是比较简单的，拿到的是字符串，返回字符串，buffer，空都行。
module.exports = function (source) {
    console.log(source);
    const options = loaderUtils.getOptions(this)
    console.log(options);

return source;
}