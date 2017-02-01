<template>

  <div class="body life-home">
<mt-cell-swipe
  title="标题文字"
    v-for="n in 10"
  :right="[
    {
      content: '删除',
      style: { background: 'red', color: '#fff' },
      handler: () => this.leftButtonHandler()
    }
  ]">
  <Slot>
     <input type="radio">
  </Slot>  
  </mt-cell-swipe>
  </div>
</template>
 <script>
 
    export default {
     data() {
    return {
      
    };
  },
 methods: {
      leftButtonHandler(evt) {
        console.log(123);
      }
      },
  created() {
    this.options1 = [''];
  },
  computed: {
    
  }
    }
</script>


 <style  lang="scss">
.life-home  {
   padding-top: 10px;
}
 

 </style>
 


