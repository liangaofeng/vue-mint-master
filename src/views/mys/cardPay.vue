<template>
    <div class="body">
        <div>
            <div class="check-box" v-for="item in cardlist" :class="{'active':$index===setindex}" @click="chooseBank($index)">
                <div class="check-img">
                    <img :src="item.logo" :alt="item.bank_name">
                </div>
                <div class="check-text">
                    <h2>{{item.bank_name}}</h2>
                    <p>储蓄卡（尾号{{formatCode(item.bank_no)}}）</p>
                </div>
            </div>
        </div>
        <div class="check-input">
            <h2>充值金额(元)</h2>
            <input type="text" v-model="rechargerule.buy_money">
        </div>
        <div class="phone-footer phone-footer-btns checkbtn">
            <form action="https://yintong.com.cn/llpayh5/payment.htm" id="llpay" method="post">
                <input type="hidden" name="req_data" :value="llpaydata">
            </form>
            <span class="footer-btn" :class="{'disabled':submiting}" @click="payByCard">立即支付</span>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                cardlist:[],
                setindex : 0,
                businessid: null,
                storeid: null,
                rechargerule:{},
                llpaydata:{},
                llpayurl:'',
                ordersn:'',
                submiting: false
            }
        },
        ready(){
            // let _this = this;
            // $.ajax({
            //     type: 'POST',
            //     url: apipath+"userset/userset_mybank",
            //     data: {
            //         uid: localStorage.uid
            //     },
            //     dataType: "json",
            //     success: function(d){
            //         if(d.code==1009){
            //             localStorage.removeItem('uid');
            //             localStorage.removeItem('MY_USER_INFO');
            //             _this.$route.router.replace('/loginway');
            //         }else{
            //             _this.cardlist = d.data.items;
            //         }
            //     }
            // });
        },
        methods:{
            formatCode: function(val){
                // return val.substr(val.length-4)
            },
            chooseBank:function(i){
                // this.setindex = i;
            },
            payByCard: function(){
            //     let _this = this;
            //     let _dialog = this.dialog;
            //     $.ajax({
            //         type: 'POST',
            //         url: apipath+"recharge/set_order",
            //         data: {
            //             uid: localStorage.uid,
            //             money: _this.rechargerule.buy_money,
            //             rule_id: _this.rechargerule.rule_id,
            //             back_money: _this.rechargerule.back_money,
            //             business_id: _this.businessid,
            //             store_id: _this.storeid,
            //             pay_type: 'llpay',
            //             url_return: window.location.href.split("#")[0]+'#!/rechargestatus/'
            //         },
            //         success: function(d){
            //             // alert(JSON.stringify(d))
            //             if(d.code==1009){
            //                 localStorage.removeItem('uid');
            //                 localStorage.removeItem('MY_USER_INFO');
            //                 _this.$route.router.replace('/loginway');
            //             }else if(d.code == '1000'){
            //                 const getdata = new Promise((resolve,reject)=>{
            //                     _this.llpaydata = d.data.para;
            //                     _this.llpayurl = d.data.post_url;
            //                     _this.ordersn = d.data.order_sn;
            //                     resolve();
            //                 })
            //                 getdata.then(()=>{
            //                     $('#llpay').submit();
            //                     _this.submiting = true;
            //                 })
            //             }else{
            //                 _this.dialog.show = !_this.dialog.show;
            //                 _dialog.content = d.msg;
            //                 _dialog.buttons = [{
            //                     name: '确定',
            //                     onClick () {
            //                         _this.dialog.show = false;
            //                     }
            //                 }]
            //             }
            //         }
            //     });
            }
        },
        components:{
            // 'Dialog': require('./../components/dialog.vue')
        }
    }
</script>
<style lang="scss">
    .check-box{
        padding: 1.5rem;
        display: flex;
        border-bottom: 1px solid #e9e9e9;
        align-items: center;
    }
    .check-img{
        width: 5rem;
        height: 5rem;
        overflow: hidden;
        border-radius: 50%;
        img{
            max-height: 5rem;
            min-width: 5rem;
        }
    }
    .check-text{
        flex:1;
        margin-left: 1.5rem;
        h2{
            font-size: 1.8rem;
        }
        p{
            font-size: 1.4rem;
            color: #828282;
        }
    }
    .check-input{
        padding: 1.5rem;
        h2{
            font-size: 1.5rem;
            line-height: 4;
        }
        input{
            border: none;
            outline: none;
            background: none;
            font-size: 4rem;
            border-bottom: 1px solid #ddd;
            width: 100%;
            height: 5rem;
            line-height: 5rem;
            font-size: 2.6rem;
        }
    }
    .footer-btn.disabled{
        background: #ccc;
    }
</style>