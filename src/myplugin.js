class MyPlugin {
    constructor(options){
        this.options = options;
    }
    apply(compiler){
        compiler.hooks.afterPlugins.tap('MyPlugin', ()=>{
            console.log('afterPlugins');

        });
        // console.log(compiler.hooks.afterCompile);
        compiler.hooks.afterCompile.tap('MyPlugin',
        (compilation, callback) => {
          console.log('afterCompile');
        //   callback();
        });
        compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
            // 现在，设置回调来访问 compilation 中的步骤：
            compilation.hooks.optimize.tap('MyPlugin', () => {
              console.log('Hello MyPlugin!');
            });
          });
    }
}
module.exports = MyPlugin;