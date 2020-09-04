var mo = Vue.component("pyq", {
  props: ['item'],
  template: `
  <div class="box1" >
  <div class="top">
    <img :src="item.header" alt="">
    <p><span>{{item.name}}</span><span>{{item.text}}</span></p>

  </div>
  <div class="middle">
    <img :src="item.images" alt="">
  </div>
  <div class="down">
    <p class="p1">{{item.passtime}}</p>
    <p class="p2 pp">踩：{{item.down}}</p>
    <p class="p2 ">赞：{{item.up}}</p>


  </div>
</div>
  `
});

export {
  mo
}