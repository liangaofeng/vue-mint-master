<template>
	<div class="body livingPayment">		
        <div class="livingPayment_head">
            <span>GPS:{{address}}</span>
            <span>修改</span>
        </div>
        <ul class="livingPayment_nav">
            <li>
                <img src="../../assets/images/my/dianfei.png">
                <span>电费</span>
            </li>
            <li>
                <span>家庭</span>
                <div @click="go('myFamily')">
                    <span>{{family}}</span>
                    <img src="../../assets/images/my/xiayiye.png">
                </div>
            </li>
        </ul>
        <ul class="livingPayment_main">
            <li>
                <span>缴费单位</span>
                <div>
                    <span>{{company}}</span>
                    <img src="../../assets/images/my/xiayiye.png">
                </div>
            </li>
            <li>
                <div>
                    <span>户号</span>
                    <input type="text" placeholder="查看纸质账单或拨98898">
                </div>
                <img @click="show" src="../../assets/images/my/wenhao.png">
            </li>
        </ul>
        <div class="bat-popup" v-show="hids">
            <h4>如何知道客户编号</h4>
            <p>1.查看当月历史纸质账单或手机短信</p>
            <p>2.拨打<span @click="phone">95598</span>通过身份信息查询</p>
        </div>
        <div class="livingPayment_footer" v-show="shows">
            <a>确定</a>
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
    export default{
        data(){
            return{
               address:'上海',
               family:'我家',
               company:'上海市电力公司',
               hids:false,
               shows:true
            }
        },
        mounted(){
            
           
        },
        methods:{
            show(){
                this.hids=!this.hids;
                this.shows=!this.shows;
            },
            phone(){
                MessageBox({
                    title: '提示',
                    message: '确定拨打电话：95598 吗?',
                    showCancelButton: true
                }).then(action => {
                        window.location.href="tel:95598";
                });
            },
        	go(name){
                this.$router.push(name);
            },
        },
        
        components:{
            
        }
    }
</script>
<style lang="scss">
	.livingPayment{
        width:100%;
        height:100%;
        background: #fafafa;
    }
    .livingPayment_head{
        width:100%;
        height:4rem;
        font-size: 1.6rem;
        padding:0 1.7rem;
        border-bottom: 1px solid #d3d3d3;
        span{
            line-height: 4rem;
        }
        span:first-child{
            color:#474747;
        }
        span:last-child{
            color: #00b8a8;
            margin-left: 1rem;
        }
    }
    .livingPayment_nav{
        width:100%;
        font-size: 1.8rem;
        padding:0 1.7rem;
        border-bottom:1px solid #d3d3d3;
        color: #474747;
        background:white;
        li:first-child{
            width:100%;
            height:6.4rem;
            display: flex;
            align-items: center;
            border-bottom:1px solid #d3d3d3;
            img{
                width:3.1rem;
                height:3.1rem;
            }
            span{
                margin-left: 1rem;
            }
        }
        li:last-child{
            width:100%;
            height:4.8rem;
            display: flex;
            justify-content: space-between;
            align-items:center;
            div{
                color: #808080;
                span{
                    font-size: 1.6rem;
                }
                img{
                    width:2.4rem;
                    height:2.4rem;
                }
            }
        }
    }
    .livingPayment_main{
        width:100%;
        margin-top: 1.7rem;
        border-bottom:1px solid #d3d3d3;
        border-top:1px solid #d3d3d3;
        color:#474747;
        font-size: 1.8rem;
        background:white;
        padding:0 1.7rem;
        li{
            width:100%;
            height:4.8rem;
        }
        li:first-child{
            display: flex;
            justify-content: space-between;
            align-items:center;
            border-bottom:1px solid #d3d3d3;
            div{
                color: #808080;
                span{
                    font-size: 1.6rem;
                }
                img{
                    width:2.4rem;
                    height:2.4rem;
                }
            }
        }
        li:last-child{
            display: flex;
            align-items:center;
            justify-content: space-between;
            div{
                display: flex;
                align-items:center;
                justify-content: space-between;
                width:86%;
                height:100%;
                input{
                    font-size: 1.6rem;
                    border:none;
                    outline: none;
                    height:100%
                }
            }
        }
    }
    .livingPayment_footer{
        width:100%;
        height:4.2rem;
        margin-top:6rem;
        padding:0 1.7rem;
        a{
            display: block;
            width:100%;
            height:4.2rem;
            text-align: center;
            line-height: 4.2rem;
            background:#e1e1e1;
            color: #808080;
            font-size: 1.9rem;
            border-radius:6px;
        }
    }
    .bat-popup{ height:108px; background: #fff; margin:5px 20px; position: relative; border-radius:12px; }
    .bat-popup::after{width:12px; height:12px; content: ""; display: block; position: absolute; top:-5px; right:8px; background:#fff; transform:rotate(45deg);  }
    .bat-popup h4{font-size: 14px; padding-left: 20px; padding-top: 22px; padding-bottom: 5px;}
    .bat-popup p{font-size: 14px; color: #808080; padding-left: 20px; line-height: 24px;}
    .bat-popup span{color:#00baa8;}
</style>
