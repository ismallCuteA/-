var a = Vue.component("box1", {
  props: {
    name: {
      type: String,
    },
    phone: {
      type: String,
      validator: function (value) {
        return value.match(/^[1-9]{6}$/g)
      }

    },
    company: {
      type: String,

    },
    job: {
      type: String,

    },
    email: {
      type: String,
      validator(value) {
        return value.match(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/g)

      }
    }
  },
  template: `
  <div class="contaienr">
    <div class="pic">

</div>
  <div class="message">
  <div>
      <span>姓名：</span>
      {{name}}
    </div>
    <div>
      <span>手机：</span>

      {{phone}}
    </div>
    <div><span>公司：</span>
      {{company}}
      </div>
    <div>
      <span>职位：</span>
      {{job}}
    </div>
    <div>
      <span>邮箱：</span>
      {{email}}
    </div>

  </div>
</div>

  `
})
export default a