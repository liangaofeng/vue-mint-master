<template>
<div>
    <div class="phone-header headerSty">
        <h3>{{payTitle}}</h3>
        <span>￥{{rechargeMoney}}</span>
    </div>
    <div class="body bodySty">
       <div class="postalStatus">
           <div class="postalLi">
               <div class="postalTit">付款方式</div>
               <span>{{rechargeWay}}</span>
           </div>
           <div class="postalLi">
               <div class="postalTit">充值金额</div>
               <span>￥{{rechargeMoney}}</span>
           </div>
           <div class="postalLi">
               <div class="postalTit">零钱余额</div>
               <span>￥{{blance}}</span>
           </div>
           <div class="postalLi">
               <div class="postalTit">获得分红体验金</div>
               <span>￥{{money_tiket}}</span>
           </div>
       </div>
       <div class="nextBtn">完 成</div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            tabPage:1,
            popup:false,
            order_sn:null,
            rechargeMoney:null,
            rechargeWay:null,
            blance:null,
            bonus:null,
            money_tiket:null,
            payTitle:''
        }
    },
    mounted(){
        
    },
    methods:{
        recharge:function(){
            this.popup = true;
        },
        rechargeClose:function(){
            this.popup = false;
        }
    },
    components:{
        
    }
}
</script>
<style lang="scss" scoped>
    .headerSty{
        width:100%;
        height:15rem;
        text-align: center;
        padding-top: 3rem;  
        h3{
            font-size: 1.4rem;
            color:#474747;
        }
        span{
            font-size: 3.8rem;
            color:#ff585f;
        }
    }
    .bodySty{
        width:100%;
        height:calc(100% - 15rem);
        background:#fafafa;
        .postalStatus{
            width: 100%;
            border-bottom: 1px solid #d3d3d3;
            padding: 0 1.5rem;
            background:#fff;
            .postalLi{
                width: 100%;
                height: 4.5rem;
                display:flex;
                justify-content:space-between;
                align-items:center;
                .postalTit{
                    font-size:1.4rem;
                    color:#474747;
                }
                span{
                    font-size:1.4rem;
                    color:#ccc;
                    text-align: right;
                }
            }
        }
        .nextBtn{
            width: 100%;
            height: 4rem;
            line-height: 4rem;
            font-size: 1.5rem;
            color:#fff;
            text-align: center;
            background:#ff585f;
            position: fixed;
            bottom:0rem;
        }
    }
    .lqpay-red{
        border: 1px solid red;
        width: 8rem;
        position: absolute;
        bottom: 6rem;
        right: 1.5rem;
        animation: move 3s infinite;
        img{
            width:100%;
            height: 100%;
        }
    }
    @keyframes move{
        0%{
            transform: translateY(0);
        }
        50%{
            transform: translateY(20px);
        }
        100%{
            transform: translateY(0);
        }
    }
    
</style>