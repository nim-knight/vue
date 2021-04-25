import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// Vue 构造函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// 以下函数负责向构造函数的原型对象（Vue.prototype ）添加属性和方法

// 添加 _init 方法
initMixin(Vue)
// 添加 $data、$props 属性， 和 $set、 $delete、$watch 方法
stateMixin(Vue)
// 添加 $on、$once、$off、$emit 方法
eventsMixin(Vue)
// 添加 _update、$forceUpdate、$destroy 方法
lifecycleMixin(Vue)
// 添加 _render、_render 方法
renderMixin(Vue)

export default Vue
