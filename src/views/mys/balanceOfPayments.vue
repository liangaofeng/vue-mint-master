<template>
    <div class="body balanceOfPayments">	
         <div class="page-infinite">
            <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }" >
              <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
                 <li v-for="item in list"> <div>
                            <span>{{item.type}}</span>
                            <span class="balanceOfPayments-color" :class="{'change':parseInt(item.pay_amount)<0}">{{item.pay_amount}}</span>
                        </div>
                        <div>
                            <span>余额：{{item.trade_balance}}</span>
                            <span>{{item.create_time}}</span>
                        </div>  
                  </li>
              </ul>
              <p v-show="loading" class="page-infinite-loading">
                <mt-spinner type="fading-circle"></mt-spinner>
                加载中...
              </p>
                <p v-show="allLoaded" class="page-infinite-loading">
                 没有更多数据
              </p>
            </div>
          </div>
    </div>
</template>
<script>

    export default{
        data(){
            return{
                list: [],
                loading: false,
                allLoaded: false,
                wrapperHeight: 0,
                fetch:new this.FetchList('getpaymentdetails')
            }
        },
        mounted(){
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
            this.loading = true;
            this.fetch.fetchData().then( (d) =>{
                this.loading = false;
                this.list=d.data.items;
            });
        },
        methods:{
            loadMore(){
                if(!this.loading&&!this.allLoaded){
                    this.loading = true;
                     this.fetch.next().then( (d) =>{
                         this.loading = false;
                         let items = d.data.items;
                         items.forEach((e) =>{
                              this.list.push(e);
                         });
                    },(err)=>{ 
                         this.loading = false;
                         this.allLoaded = true;
                         // console.log(err);
                    })
                }   
            }	
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


        .page-infinite-loading{

              text-align: center;
        height: 50px;
        line-height: 50px;

        div {
          display: inline-block;
          vertical-align: middle;
          margin-right: 5px;
        }
        }
    }
</style>
