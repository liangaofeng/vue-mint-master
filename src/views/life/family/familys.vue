<template>
<div class="fambox">
        <ul>
           <li>
              <div class="fam-di">删除</div>
              <div class="famsp" @touchstart="swiperStart($event)" @tauchmove="swipeMove($event)" @touchend="swiperEnd($event)">开始发货快乐回复</div>
           </li>
        </ul>
        <div class="buts">
           <mt-button type="primary"  size="large" @click="addfamily()"  >保存</mt-button>
        </div>
</div>

</template>
<script>
    export default{
       data(){
          return{
             pagsX:'',
             pagsY:'',
             paX:'',
             paY:'',
             pagX:'',
             pagY:'',
          }
       },
       methods:{
          swiperStart:function(e){
            let _this=this;
              console.log(e.targetTouches[0]);
              _this.pagsX = e.targetTouches[0].pageX;
              _this.pagsY = e.targetTouches[0].pageY;
              console.log(e);
              const w = e.currentTarget.nextSibling.nextSibling.offsetWidth;
              console.log(w)
          },
          swipeMove:function(e){
            let _this=this;
              const w = e.currentTarget.nextSibling.nextSibling.offsetWidth;
              console.log(w);
              console.log(e.targetTouches[0]);
              _this.paX = e.targetTouches[0].pageX;
              _this.paY = e.targetTouches[0].pageY;
              console.log( _this.paX);
          },
          swiperEnd:function(e){
              const w = e.currentTarget.nextSibling.nextSibling.offsetWidth;
              let _this=this;
              console.log(e.targetTouches[0]);
              _this.pagX = e.targetTouches[0].pageX;
              _this.pagY = e.targetTouches[0].pageY;
              console.log( _this.pagX);
          }
       }
    }
</script>
 


<style lang="scss">
 .fambox{
    margin: 0 auto;
    padding:0 0;
    width:100%;
    overflow-y:auto;
    background:#f4f4f4;
    ul{ width:100%;
        height:auto;
        padding: 0;
        list-style: none;
        margin:20px auto;
        li{
           width:100%;
           height:40px;
           list-style: none;
           line-height: 40px;
           border-bottom: 1px solid #dcdcdc;
           position:relative;
           .fam-di{
              background:#d3d3d3;
              color:#fff;
              line-height: 40px;
              text-align: center;
              width:100px;
              float:right;
           }
           .famsp{
              width:100%;
              height:40px;
              background:#fff;
              text-indent: 40px;
              line-height: 40px;
              position:absolute;
              top:0;
              left:0;
              -ms-zoom: 1;
              zoom:1;
              z-index: 999;
           }
        }
    }
 }
</style>