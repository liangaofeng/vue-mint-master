<template>
	<div class="body my">		
        <div class="my_head">
            <img src="../../assets/images/my/wenhao.png">
            <span>账号余额(元)</span>
            <h1 @click="go('balanceOfPayments')">{{yue}}</h1>
        </div>
        <div class="my_main">
            <div>
                <span>昨日分红(元)</span>
                <h2 @click="go('cumulativeDividend')">{{fenhong}}</h2>
            </div>
            <hr></hr>
            <div>
                <span>分红体验金(元)</span>
                <h2 @click="go('bonusExperience')">{{tiyan}}</h2>
            </div>
        </div>
        <div class="my_center">
            <h4>充值送分红体验金，最高年化15%</h4>
            <ul>
               <!--  <li :class="{'active':$index == activeindex}" @click="setTab(index)" v-for="(item,index) in ['充值','缴电费']">{{item}}</li> -->
                <li :class="{'active':activeindex == 0}" @click="setTab(0)">充值</li>
                <li :class="{'active':activeindex == 1}" @click="setTab(1)">缴电费</li>
            </ul>
        </div>
        <div class="my_footer">
            <img src="../../assets/images/my/bao.png">
            <span>支付安全由平安保险提供担保</span>
        </div>
    </div>
</template>
<script>
import routes from '../../routers';
    export default{
        data(){
            return{
               yue:'0.00',
               fenhong:'0.00',
               tiyan:'0.00',
               activeindex:0
            }
        },
        mounted(){
            let _this=this;
            this.Fetch("getaccountinfo",{uid:14}).fetchData().then(function  (d) {
                if(d.code==1000){
                  _this.yue=d.data.balance;
                  _this.fenhong=d.data.yesterday_yield;
                  _this.tiyan=d.data.tiket_sum;
                }
            });
            // $.ajax({
            //     type:'post',
            //     url:apipath+'getaccountinfo',
            //     data:{
            //         uid:14
            //     },
            //     dataType:'json',
            //     success:function(d){
            //         if(d.code==1000){
            //           _this.yue=d.data.balance;
            //           _this.fenhong=d.data.yesterday_yield;
            //           _this.tiyan=d.data.tiket_sum;
            //         }
            //     }
            // });
        },
        methods:{
            go(name){
                this.$router.push(name);
            },
            setTab(index){
                this.activeindex=index;
                if(index==1){
                    this.$router.push("livingPayment");
                }else{
                    this.$router.push("recharge")
                }
            }
        },
        components:{
            
        }
    }
</script>
<style lang="scss">
	.my{
        width:100%;
        height:100%;
        background:#fafafa; 
    }
    .my_head{
        width:100%;
        padding-top:4rem;
        padding-bottom: 4rem;
        border-bottom: 1px solid #d3d3d3;
        text-align: center;
        position: relative;
        background: white;
        img{
            position: absolute;
            top:2rem;
            right: 1.7rem;
            width:2rem;
            height:2rem;
        }
        span{
            font-size: 1.6rem;
            color: #474747;
        }
        h1{
            font-size: 5rem;
            color: #474747;
        }
    }
    .my_main{
        width:100%;
        height:7.5rem;
        border-bottom: 1px solid #d3d3d3;
        display: flex;
        align-items: center;
        background: white;
        div{
            width:100%;
            text-align: center;
            h3{
                width:100%;
                font-size: 1.3rem;
                color: #474747;
            }
            h2{
                width:100%;
                font-size: 2rem;
                color: #ff585f;
                margin-top:0.5rem;
            }
        }
        hr{
            height:3.7rem;
        }
    }
    .my_center{
        width:100%;
        padding:2.8rem 1.7rem;
        h4{
            width:100%;
            font-size: 1.2rem;
            text-align: center;
            color: #808080;
        }
        ul{
            width:100%;
            li{
                width:100%;
                height:4.5rem;
                border-radius:10px;
                background: white;
                border:1px solid #d3d3d3;
                margin-top: 1rem;
                text-align: center;
                color: #474747;
                font-size: 1.8rem;
                line-height: 4.5rem; 
            }
            .active{
                background: #ff585f;
                color: white;
            }
        }
    }
    .my_footer{
        position: absolute;
        bottom: 1.6rem;
        width: 100%;
        text-align: center;
        span{
            margin-left:0.4rem;
            color: #808080;
            font-size:1.2rem;
        }
    }
</style>


