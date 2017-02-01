<template>
	<div class="body bonusExperience">		
        <div class="bonusExperience_head">
            <img src="../../assets/images/my/white_wenhao.png">
            <span>累计分红(元)</span>
            <h1>{{yue}}</h1>
        </div>
        <div class="bonusExperience_nav">
            <ul>
                <!-- <li v-for="title in ['计息中','已失效']" @click="xuanzhe($index)"><span :class="{active:$index==activeindex}">{{title}}</span></li> -->
                <li @click="xuanzhe(0)"><span :class="{active:activeindex==0}">计息中</span></li>
                <li @click="xuanzhe(1)"><span :class="{active:activeindex==1}">已失效</span></li>
            </ul>
        </div>
        <div class="bonusExperience_barner"></div>
        <div class="bonusExperience_main">
            <ul v-if="activeindex==0">
                <li v-for="jx in jxs">
                    <div>
                        <span>缴{{jx.money_tiket}}元电费</span>
                        <span>有效期</span>
                    </div>
                    <div>
                        <span>{{jx.title}}</span>
                        <span>{{jx.expire_date}}</span>
                    </div>
                </li>
            </ul>
            <ul v-else class="bonusExperience_main_shixiao">
                <li v-for="ysy in ysys">
                    <div>
                        <span>缴{{ysy.money_tiket}}元电费</span>
                        <span>有效期</span>
                    </div>
                    <div>
                        <span>{{ysy.title}}</span>
                        <span>{{ysy.expire_date}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bonusExperience-none" v-show="none">暂无数据</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
               yue:'0',
               activeindex:0,
               jxs:[],
               ysys:[],
               none:false
            }
        },
        mounted(){
            let _this=this;
            this.Fetch("getwallettikets",{uid:14}).fetchData().then(function  (d) {
                if(d.code==1000){
                  console.log(d);
                  _this.yue=d.data.total;
                  _this.jxs=d.data.items;
                }
            });
           // $.ajax({
           //      type:'post',
           //      url:apipath+'getwallettikets',
           //      data:{
           //          uid:14
           //      },
           //      dataType:'json',
           //      success:function(d){
           //          if(d.code==1000){
           //            console.log(d);
           //            _this.yue=d.data.total;
           //            _this.jxs=d.data.items;
           //          }
           //      }
           //  });
        },
        methods:{
        	xuanzhe(index){
                this.activeindex=index;
                 let _this=this;
                if(index==1){
                    this.Fetch("getwallettikets",{uid:14,in_use:0}).fetchData().then(function  (d) {
                        if(d.code==1000){
                            if(d.data.items.length<=0){
                                _this.none=true;
                                return;
                            }
                          _this.yue=d.data.total;
                          _this.ysys=d.data.items;
                        }
                    });
                }else{
                    this.Fetch("getwallettikets",{uid:14}).fetchData().then(function  (d) {
                         if(d.code==1000){
                              if(d.data.items.length<=0){
                                _this.none=true;
                                return;
                              }
                          _this.yue=d.data.total;
                          _this.jxs=d.data.items;
                        }
                    });
                    // $.ajax({
                    //     type:'post',
                    //     url:apipath+'getwallettikets',
                    //     data:{
                    //         uid:14
                    //     },
                    //     dataType:'json',
                    //     success:function(d){
                    //         if(d.code==1000){
                    //           console.log(d);
                    //           _this.yue=d.data.total;
                    //           _this.jxs=d.data.items;
                    //         }
                    //     }
                    // });
                }
            }
        },
        
        components:{
            
        }
    }
</script>
<style lang="scss">
	.bonusExperience{
        width:100%;
        height:100%;
        background:#fafafa;
    }
    .bonusExperience_head{
        width:100%;
        padding-top:4rem;
        padding-bottom: 4rem;
        border-bottom: 1px solid #d3d3d3;
        text-align: center;
        position: relative;
        background: #ff585f;
        color:white;
        img{
            position: absolute;
            top:2rem;
            right: 1.7rem;
            width:2rem;
            height:2rem;
        }
        span{
            font-size: 1.6rem;
        }
        h1{
            font-size: 5rem;
        }
    }
    .bonusExperience_nav{
        width:100%;
        ul{
            width:100%;
            height:5.55rem;
            border-bottom:1px solid #d3d3d3;
            border-top:1px solid #d3d3d3;
            background:white;
            display: flex;
            justify-content: space-between;
            li{
                width:50%;
                height:5.55rem;
                text-align: center;
                line-height: 5.55rem;
                font-size: 1.54rem;
                color:#808080;
                span{
                    padding-bottom:0.4rem;
                }
            }
            .active{
                color:#474747;
                border-bottom:1px solid #ff5960;
            }
        }
    }
    .bonusExperience_barner{
         width:100%;
        height:0.85rem;
    }
    .bonusExperience_main{
        width:100%;
        border-bottom:1px solid #d3d3d3;
        border-top:1px solid #d3d3d3;
        background:white;
        ul{
            width:100%;
            padding:0 1.7rem;
            li{
                width:100%;
                height: 8.1rem;
                border-bottom:1px solid #d3d3d3;
                padding-top:2rem;
                >div:first-child{
                    width:100%;
                    display: flex;
                    justify-content: space-between;
                    font-size: 1.37rem;
                    color: #474747;
                }
                >div:last-child{
                    width:100%;
                    display: flex;
                    justify-content: space-between;
                    font-size: 1.2rem;
                    color: #808080;
                    margin-top: 0.5rem;
                }
            }
            >li:last-child{
                border:none;
            }
        }
        .bonusExperience_main_shixiao{
            width:100%;
            padding:0 1.4rem;
            li{
                width:100%;
                height: 8.1rem;
                border-bottom:1px solid #d3d3d3;
                padding-top:2rem;
                background:url('../../assets/images/my/yishixiao.png') no-repeat;
                background-size:6.4rem 5.4rem;
                background-position:70% 1.4rem;
                >div:first-child{
                    width:100%;
                    display: flex;
                    justify-content: space-between;
                    font-size: 1.37rem;
                    color: #808080;
                }
                >div:last-child{
                    width:100%;
                    display: flex;
                    justify-content: space-between;
                    font-size: 1.2rem;
                    color: #808080;
                    margin-top: 0.5rem;
                }
            }
            >li:last-child{
                border:none;
            }
        }
    }
    .bonusExperience-none{
        width:100%;
        background:#f4f4f4;
        text-align: center;
        font-size: 1.3rem;
        padding-top:1rem;
    }
</style>
