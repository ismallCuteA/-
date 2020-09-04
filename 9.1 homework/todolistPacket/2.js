var b = Vue.component("thetwo", {
  props: ['index', 'item'],
  template: `
  <div class="top">
    <div class="item-content">{{index+1}}、{{item}}</div>
    <div class="btn">
      <button class="del" @click="del()">删除</button>
      <button class="finish" @click='finish()'>完成</button>
    </div>
  </div>
  `,
  methods: {
    del() {
      this.$emit("del")
    },
    finish() {
      this.$emit("finish")

    }
  }
})
export {
  b
}