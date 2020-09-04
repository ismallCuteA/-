var c = Vue.component("thethird", {
  props: ['index', 'item'],

  template: `
  <div class="bottom" >
    <div class="item-content">{{index+1}}、{{item}}</div>
    <div class="btn">
      <button class="secdel" @click="secdel()">删除</button>
    </div>

  </div>
  `,
  methods: {
    secdel() {
      this.$emit('secdel')
    }
  }
})
export {
  c
}