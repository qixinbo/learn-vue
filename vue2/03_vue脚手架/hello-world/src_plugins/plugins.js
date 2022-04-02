// 编写插件
export default {
	// 插件必须要写install
	// 可以传入Vue构造函数
	install(Vue, arg){
		console.log("@@@@install", Vue)
		console.log("arg = ", arg)

		// 定义一个全局混入
		Vue.mixin({
			data(){
				return {x:1}
			}
		})

		// 在Vue原型上添加一个hello方法
		// vm和vc组件实例都能用
		Vue.prototype.hello=()=>{alert("hello!!!")}
	}	
}