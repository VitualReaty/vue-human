/** Class 封装多个组件的 Suites 类 */
export default class Suites {
  /**
   * @var {Array}
   */
  components = []

  /**
   * 构造函数，判断传入的对象是 Suites 对象还是数组，并合并
   * @param {Array} components
   */
  constructor (components) {
    components.forEach(item => {
      let items = item instanceof Suites
        ? item.getComponents()
        : item

      this.components = this.components.concat(items)
    })
  }

  /**
   * 返回 Suites 内的所有组件
   * @return {Array}
   */
  getComponents () {
    return this.components
  }

  /**
   * 返回组件与组件命名的对象
   * @return {Object}
   */
  mapComponents () {
    const components = {}

    this.components.forEach(item => {
      components[item.name] = item
    })

    return components
  }

  /**
   * mapComponents 的别名
   * @param {*} args
   * @return {Object}
   */
  map (...args) {
    return this.mapComponents(...args)
  }

  /**
   * vue.use() 的安装方法
   * @param {Vue} Vue
   */
  install (Vue) {
    this.components.forEach(component => {
      if (!component.install) {
        throw new Error(`${component.name} 没有 install 方法`)
      }
      Vue.use(component)
    })
  }
}
