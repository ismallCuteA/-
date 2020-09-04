var a = {
  props: ['value'],
  template: `
  <div class="in">
    <input class="in1" type="text" :value="value" @input="$emit('input', $event.target.value)" placeholder="输入待办事项">
    <input class="in2" type="submit" value="添加" @click="add">
  </div>
  `,
  methods: {
    add() {
      this.$emit("add")
    }
  }
}

export {
  a
}