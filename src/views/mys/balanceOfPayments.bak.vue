<template>
	<div class="body balanceOfPayments">	
        <ul  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
            <li v-for="item in list">
                <div>
                    <span>{{item.type}}</span>
                    <span class="balanceOfPayments-color" :class="{'change':parseInt(item.pay_amount)<0}">{{item.pay_amount}}</span>
                </div>
                <div>
                    <span>余额：{{item.trade_balance}}</span>
                    <span>{{item.create_time}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { InfiniteScroll } from 'mint-ui';
    export default{
        data(){
            return{
               list:[],
               InfiniteScroll:null
            }
        },
        mounted(){
            // let _this=this;
            // this.Fetch("getpaymentdetails",{uid:14}).fetchData().then(function  (d) {
            //     console.log(d);
            //      _this.list=d.data.items;
            // });
        },
        methods:{
            loadMore(){
                let _this=this;
                _this.loading = true;
                setTimeout(() => {
                    let last = _this.list[_this.list.length - 1];
                    for (let i = 1; i <= 10; i++) {
                      _this.list.push(last + i);
                    }
                    _this.loading = false;
                }, 500);  
            }	
        },
        pageMore(){
             _this.Fetch("getpaymentdetails",{uid:14}).fetchData().then(function  (d) {
                    if(d.code==1000){
                        console.log(d);
                        _this.list=d.data.items;
                    }
            }); 
        },
        components:{
            
        }
    }
</script>
<style lang="scss">
	.balanceOfPayments{
        width:100%;
        height:100%;
        background: #fafafa;
        ul{
            width:100%;
            border-bottom:1px solid #d3d3d3;
            background:white;
            padding:0 1.7rem;
            li{
                width:100%;
                height:6.4rem;
                padding-top:1.4rem;
                border-bottom:1px solid #d3d3d3;
                div{
                    display: flex;
                    justify-content: space-between;
                }
                >div:first-child{
                    font-size: 1.5rem;
                    .balanceOfPayments-color{
                        color: #ff585f;
                    }
                    .change{
                        color: #00b8a8;
                    }
                }
                >div:last-child{
                    font-size: 1.2rem;
                    color: #808080;
                    margin-top:0.4rem;
                }
            }
            >li:last-child{
                border:none;
            }
        }
    }
</style>
