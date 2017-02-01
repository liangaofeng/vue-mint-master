<template>
    <div class="body bodybg-a">
        <div class="recharge-info clearfix">
           <span class="fl">小鸡充电</span>
           <span class="fr">余额：<em>{{rechargedata.balance_money}}元</em></span>
        </div>
        
        <div class="flex-recharge">
            <!-- <h2 class="tit">{{exp_tiket_ratio==0?'充100送15 多充多送':'充值送10倍分红金'}}</h2> -->
            <!-- <h2 class="tit">{{rechargeTit}}</h2> -->
            <ul>
                <li v-for="(item,index) in rechargedata.rule" @click="setActiveRule(index)">
                    <div :class="{'active':activeIndex===index}">
                        <!-- <h2>充{{item.buy_money}}元</h2>
                        <span>送{{item.back_money}}{{exp_tiket_ratio==0?'元':'分红金'}}</span> -->
                        <h2>￥{{item.buy_money}}</h2>
                        <!-- <span>赠送￥{{item.back_money}}{{exp_tiket_ratio==0?'':''}}</span> -->
                        <span>赠送￥{{item.back_money}}</span>
                    </div>
                </li>
            </ul>
        </div>
<!--         <div class="list-recharge">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in rechargedata.rule" @click="showPropup">
                        <div class="item-recharge-content" v-if="exp_tiket_ratio == 0">
                            <h2>充{{item.buy_money}}元<span>送{{item.back_money}}元</span></h2>
                        </div>

                        <div class="item-recharge-content" v-if="exp_tiket_ratio > 0">
                            <h2>充{{item.buy_money}}送<span class='bounsSty'>{{item.back_money}}</span><div class="bonusFont">分红金</div></h2>
                            <div class="bonusExplain">
                                <p>1.分红体验金有效期30天，30天后失效，不可用于消费。</p>
                                <p>2.分红利率最高可达13.5%。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div> -->

       <div class="recharge-input">
            <input type="tel" maxlength="6" autofocus="autofocus" v-model="rechargemoney" @keyup="formatNumber($event)" placeholder="请输入充值金额">
            <span class="tipbox" :class="{'visible':showtip}">赠送：￥{{inputtip}}</span>
        </div>
        <p class="squreWord"><i></i>账户余额安全由平安保险担保</p>
        <div class="phone-footer phone-footer-btns checkbtn">
          <span class="footer-btn footer-btn2" @click="showPropup" >确认充值</span>
        </div>
        <p class="xieyibox">充值即表示您同意存票<a>《充值协议》</a></p>
    <div class="propup-fullheight propup-pay" @click="hidePropup">
        <div>
            <ul class="propup-pay-list">
                <li @click="payByChange">
                    <i class="icon-change"></i>
                    <div>
                        <h3>零钱支付</h3>
                        <p class="red">推荐存票用户使用</p>
                    </div>
                </li>
                <li @click="payByWechat">
                    <i class="icon-wechat"></i>
                    <div>
                        <h3>微信支付</h3>
                        <p>推荐安装微信5.0及以上版本的使用</p>
                    </div>
                </li>
                <li @click="payByBank">
                    <i class="icon-bank"></i>
                    <div>
                        <h3>银行卡支付</h3>
                        <p>支付服务由连连支付提供，保障资金安全</p>
                    </div>
                </li>
            </ul>
            <form action="" method="POST" id="wrap_form" style="display: none"></form>
            <!-- <span  class="propup-close"></span> -->
        </div>
    </div>
    <!-- 支付密码 -->
    <div v-show="payPsd" class="bg_shadow"></div>
    <div v-show="payPsd" class="bg_baikuang">
        <div class="bg_title">
            <img class="payClose" @click="payClose" src="../../assets/images/my/wrong.png" />
            <span>{{payTitle}}</span>
        </div>
        <!-- <div class="bg_banner">
            <div>
                <i></i>
                <span>存票</span>
            </div>
        </div> -->
        <div class="bg_money">
            <!-- <span>￥&ensp;{{money}}</span> -->
            <div class="moneyBox">
                <span class="moneyIcon">￥</span>
                <span class="moneyAccount">{{recharge.buy_money}}</span>
            </div>

        </div>
        <h3 class="payWayTit">零钱支付</h3>
        <label class="psdBox" for="psdText">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li class="bg_int"></li>
            </ul>
        </label>
        <div class="forgetPayPsd">忘记支付密码?</div>
        <input type="tel" id="psdText" class="psdInp" maxlength="6"/>    
    </div>    
</div>

    
   
</template>

<script>
import {MessageBox} from 'mint-ui';
    export default {
        data(){
            return{
                businessid: null,
                storeid: null,
                rechargedata:{
                    balance_money:null,
                    rule:[],
                    index:null
                },
                ordersn:'',
                rechargemoney: null,
                recharge:{
                    buy_money: null,
                    rule_id: null,
                    back_money: null,
                },
                onoff:true,
                inputtip:'',
                showtip: false,
                paytype:'',
                alipayurl:'',
                alipaydata:{},
                exp_tiket_ratio:'',
                redtitle:'',    //红包标题
                payPsd:false,
                payTitle:'',
                pay_pwd:'',
                activeIndex:0,
                rechargeTit:'',
                fhjTitname:''
            }
        },
        mounted(){
            let _this=this;
            // let ua = navigator.userAgent;
            // if(ua.indexOf('MicroMessenger') > -1){
            //     if(_this.getQueryString('code') == null && !localStorage.MY_USER_INFO){
            //         sessionStorage.scanhref = window.location.href;
            //         location.replace('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx938060d53cfbcdb5'+'&redirect_uri='+encodeURIComponent(sessionStorage.scanhref)+'&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect');
            //     }
            //     console.log(111);
            //     if(_this.getQueryString('code') != null){
            //         $.ajax({
            //             type:'post',
            //             url: 'https://cpdev.cunpiao.com/apish/M/V1/user/get_wechat_info',
            //             data:{
            //                 code: _this.getQueryString('code')
            //             },
            //             dataType: 'json',
            //             success: function(d){
            //                 if(d.code == '1000'){

            //                     console.log(d);
            //                     localStorage.setItem('MY_USER_INFO',JSON.stringify(d.data));
            //                     location.replace(sessionStorage.scanhref);
            //                 }
            //             }
            //         })
            //     }
            //     _this.paytype = 'wx';
            // }
            this.Fetch("getbackrule",{uid:14}).fetchData().then(function  (d) {
                if(d.code==1000){
                    // console.log(d);
                    _this.rechargedata.balance_money=d.data.balance;
                    _this.rechargedata.rule=d.data.items;
                }
            });
            // $.ajax({ //获取充值规则
            //     type: "POST",
            //     // url: apipath+"recharge/recharge",
            //     url: apipath3,
            //     data: {
            //         opact:'recharge/recharge',
            //         version:'3_0_0',
            //         uid: localStorage.uid, 
            //         business_id: _this.businessid
            //     },
            //     dataType: "json",
            //     success: function(d){
            //         console.log(d);
            //         if(d.code==1009){
            //             localStorage.removeItem('uid');
            //             localStorage.removeItem('MY_USER_INFO');
            //             _this.$route.router.replace('/scanCodeQuickLogin/'+_this.businessid+'/'+_this.storeid);
            //         }else{ 
            //             _this.rechargedata = d.data;
            //             _this.rechargedata.rule = d.data.rule.filter(l=>l.buy_money>0);
            //             _this.exp_tiket_ratio = parseFloat(d.data.exp_tiket_ratio);//分红金
            //             _this.rechargeTit = d.data.rule_tile;
            //             setTimeout(function(){
            //                 _this.renderSwipe();
            //             },0)
            //         }
            //     }
            // });
            
            // $.ajax({
            //     type:'post',
            //     url:apipath3,
            //     data:{
            //         opact:'red/getRedTitle',
            //         version: '3_0_0',
            //         business_id: _this.businessid,
            //         store_id: _this.storeid,
            //         uid: localStorage.uid
            //     },
            //     success:function(d){
            //         _this.redtitle = d.data;
            //     }
            // })
        },
        methods:{
            getQueryString: function(name) { //获取授权码
                // var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
                // var r = window.location.search.substr(1).match(reg);
                // if (r!=null){
                //     return unescape(r[2]);
                // }else{
                //     return null 
                // };
            },
            formatNumber:function(e){
                if(e.srcElement.value == 0){
                    e.srcElement.value = '';
                    this.showtip = false;
                }
                this.rechargemoney = e.srcElement.value.replace(/[^0-9]/g,'');
                if(e.srcElement.value > 0){
                    this.activeIndex = null;
                    this.getRechargeRule(e.srcElement.value);
                    this.showtip = true;
                }else{
                    this.activeIndex = 0;
                    this.showtip = false;
                }
            },
            setActiveRule:function(i){
                this.activeIndex = i;
                const rechargerule = this.rechargedata.rule[i];
                this.rechargemoney = rechargerule.buy_money;
                this.getRechargeRule(this.rechargemoney);
            },
            showPropup : function() {
                let _this=this;
                $(".propup-pay").css({"top":"0","opacity":1});
                if(this.rechargemoney>0){
                    this.getRechargeRule(this.rechargemoney);
                    this.recharge.buy_money = this.rechargemoney;
                    this.Fetch("createrechargeorder",{uid:1,from_channel:1,payAmount:_this.recharge.buy_money}).fetchData().then(function  (d) {
                        if(d.code==1000){
                            console.log(1111111);
                            console.log(d);
                        }
                    });
                }else{
                    const rechargerule = _this.rechargedata.rule[_this.activeIndex];
                    this.recharge.rule_id=rechargerule.id;
                    this.Fetch("createrechargeorder",{uid:1,from_channel:1,payAmount:_this.recharge.rule_id}).fetchData().then(function  (d) {
                        if(d.code==1000){
                            console.log(222222)
                            console.log(d);
                        }
                    });
                }
               
            },
            hidePropup : function(e){
                if(e.target.className.indexOf('propup-pay')>-1){
                    $(".propup-pay").css({"top":"100%","opacity":0})
                }
            },
            getRechargeRule: function(m){
                // let _this = this;
                // $.ajax({
                //     type: 'POST',
                //     url: apipath3,
                //     data: {
                //         opact:'recharge/backMoney',
                //         version:'3_0_0',
                //         uid: localStorage.uid,
                //         money : m,
                //         business_id : _this.businessid
                //     },
                //     dataType: "json",
                //     success: function(d){
                //         if(d.code==1009){
                //             localStorage.removeItem('uid');
                //             localStorage.removeItem('MY_USER_INFO');
                //             _this.$route.router.replace('/loginway');
                //         }else{
                //             _this.recharge.rule_id = d.data.rule_id;
                //             _this.recharge.back_money = d.data.back_money;
                //             if(d.data.exp_tiket_ratio == 0){
                //                 // _this.inputtip = '充'+m+'送'+d.data.back_money+'元';
                //                 _this.inputtip = '赠送：￥'+d.data.back_money;
                //             }else{
                //                 // _this.inputtip = '充'+m+'送'+d.data.back_money+'分红金'; 
                //                 _this.inputtip = '赠送：￥'+d.data.back_money+'分红金'; 
                //             }
                //         }
                //     }
                // })
            },
            payByChange(){
                let _this = this;
                $(".propup-pay").css({"top":"100%","opacity":0});
                const rechargerule = _this.rechargedata.rule[_this.activeIndex];
                if(this.rechargemoney<=0){
                    this.recharge.buy_money=rechargerule.buy_money;
                    this.recharge.rule_id=rechargerule.id;
                    this.recharge.back_money=rechargerule.back_money;
                }
                MessageBox.confirm('您确定使用零钱充值'+_this.recharge.buy_money+'元吗？').then(action => {
                    // _this.$router.push('changeRechargeSuccess');
                    // let data=_this.sig();
                    // let sig='';
                    // for(let i in data){
                    //     sig+=i+'='+data[i]+'&';
                    // }
                    // sig=sig.substr(0,sig.length-1);
                    // sig=decodeURI(sig);
                    // sig=hex_md5(sig);
                    // console.log(sig);
                });

                // _dialog.show = !_dialog.show;
                // _dialog.content = '您确定使用零钱充值'+_this.recharge.buy_money+'元吗？'
                // _dialog.buttons = [{
                //     name: '取消',
                //     classes: 'gray',
                //     onClick () {
                //         _this.dialog.show = false;
                //     }
                // },{
                //     name: '确定',
                //     onClick () {
                //         _this.dialog.show = false;
                //         const blancePsd = new Promise((resolve,reject) =>{
                //             $.ajax({
                //                 type: 'post',
                //                 url: apipath3,
                //                 data:{
                //                     opact:'userinfo/set_info',
                //                     version:'3_0_0',
                //                     uid:localStorage.uid
                //                 },
                //                 dataType: 'json',
                //                 success: function(d){
                //                     if(d.code==1009){
                //                         localStorage.removeItem('uid');
                //                         localStorage.removeItem('MY_USER_INFO');
                //                         _this.$route.router.replace('/loginway');
                //                     }else if(d.code==1000){
                //                         if(d.data.pay_pwd == '' || d.data.pay_pwd == '0'){
                //                             _this.dialog.show = !_this.dialog.show;
                //                             _dialog.content = '您还未设置支付密码。'
                //                             _dialog.buttons = [{
                //                                 name: '取消',
                //                                 classes: 'gray',
                //                                 onClick () {
                //                                     _this.dialog.show = false;
                //                                 }
                //                             },{
                //                                 name: '去设置',
                //                                 onClick () {
                //                                     _this.dialog.show = false;
                //                                     _this.$route.router.go('/setPayPsd');
                //                                 }
                //                             }]
                //                         }else{
                //                             $.ajax({
                //                                 type:'post',
                //                                 url:apipath3,
                //                                 data:{
                //                                     opact:'recharge/wallet_is_pay_pwd',
                //                                     version: '3_0_0',
                //                                     uid: localStorage.uid,
                //                                     money: _this.recharge.buy_money
                //                                 },
                //                                 success:function(d){
                //                                     if(d.code==1006){ //余额不足
                //                                         _dialog.show = true;
                //                                         _dialog.content = d.msg;
                //                                         _dialog.buttons = [{
                //                                             name: '取消',
                //                                             classes: 'gray',
                //                                             onClick () {
                //                                                 _this.dialog.show = false;
                //                                             }
                //                                         },{
                //                                             name: '去充值',
                //                                             onClick () {
                //                                                 _this.dialog.show = false;
                //                                                 _this.$route.router.go('/pocketRecharge');
                //                                             }
                //                                         }]
                //                                     }else if(d.code==1007){
                //                                         resolve();
                //                                     }else if(d.code==1008){
                //                                         _this.payByBlance();
                //                                     }else{
                //                                         alert(d.msg);
                //                                     }
                //                                 }
                //                             })  
                //                         }
                //                     }else{
                //                         _alert.show = true;
                //                         _alert.showtext = d.msg;
                //                         setTimeout(()=>{
                //                             _alert.show = false;
                //                         },1500)
                //                         _this.money = '';
                //                     }
                //                 }
                //             })
                //         })
                        
                //         blancePsd.then((resolve,reject)=>{
                //             _this.payPsd = true;
                //             _this.payTitle="请输入支付密码";
                //             $('#psdText').on('input', function (e){
                //                 var numLen = 6, pw = $('#psdText').val();
                //                 var list = $('.psdBox li');
                //                 for(var i=0; i<numLen; i++){
                //                     if(pw[i]){
                //                         $(list[i]).text('•');
                //                     }else{
                //                         $(list[i]).text('');
                //                     }
                //                 }
                //                 if(pw.length == 6){
                //                     _this.pay_pwd =pw;
                //                     _this.payByBlance();
                //                     _this.payPsd = false;
                //                     $('#psdText').val('');
                //                     for(var i=0; i<numLen; i++){
                //                         $(list[i]).text('');
                //                     }
                //                 }
                //             });
                //             _this.pay_pwd =null; 
                //         });
                //     }
                // }]
            },
            payByBlance(){
                // let _this = this;
                // let _dialog = _this.dialog;
                // $.ajax({
                //     type:'post',
                //     url:apipath3,
                //     data:{
                //         opact:'recharge/set_order',
                //         version: '3_0_0',
                //         uid: localStorage.uid,
                //         money: _this.recharge.buy_money,
                //         rule_id: _this.recharge.rule_id,
                //         back_money: _this.recharge.back_money,
                //         business_id: _this.businessid,
                //         store_id: _this.storeid,
                //         pay_pwd: _this.pay_pwd,
                //         pay_type: 'walletpay'
                //     },
                //     success:function(d){
                //         if(d.code==1000){
                //             _this.$route.router.go('/lqrechargestatus/'+d.data.order_sn);
                //         }else{
                //             _dialog.show = true;
                //             _dialog.content = d.msg;
                //             _dialog.buttons = [{
                //                 name: '确定',
                //                 onClick () {
                //                     _this.dialog.show = false;
                //                 }
                //             }]
                //         }
                //     }
                // })
            },
            payByBank(){    //银行卡充值
                // let _this = this
                // let _dialog = this.dialog;
                // $(".propup-pay").css({"top":"100%","opacity":0});
                // const hasbankcard = new Promise((resolve,reject)=>{
                //     $.ajax({
                //         type: 'POST',
                //         url: apipath+"userset/userset_mybank",
                //         data: {
                //             uid: localStorage.uid
                //         },
                //         dataType: "json",
                //         success: function(d){
                //             if(d.code==1009){
                //                 localStorage.removeItem('uid');
                //                 localStorage.removeItem('MY_USER_INFO');
                //                 _this.$route.router.replace('/loginway');
                //             }else{
                //                 resolve(d.data.items.length>0)
                //             }
                //         }
                //     });
                // })
                // hasbankcard.then((hasbankcard)=>{
                //     if(hasbankcard){ // 未绑卡
                //         if(this.rechargemoney<=0){
                //             const rechargerule = _this.rechargedata.rule[_this.activeIndex];
                //             sessionStorage.rechargerule = JSON.stringify(_this.rechargedata.rule[_this.activeIndex]);
                //         }else{
                //             _this.recharge.buy_money = _this.rechargemoney;
                //             sessionStorage.rechargerule = JSON.stringify(_this.recharge)
                //         }
                //         _this.$route.router.go('/cardpay/'+_this.businessid+'/'+_this.storeid);
                //         _this.dialog.show = false;
                //     }else{
                //         _this.dialog.show = !_this.dialog.show;
                //         _dialog.content = '您还未绑定银行卡哟，<br />请先绑定一张银行卡！'
                //         _dialog.buttons = [{
                //             name: '取消',
                //             classes: 'gray',
                //             onClick () {
                //                 _this.dialog.show = false;
                //             }
                //         },{
                //             name: '绑定银行卡',
                //             onClick () {
                //                 _this.dialog.show = false;
                //                 _this.$route.router.go('/addbankCard');
                //             }
                //         }]
                //     }
                // });
                // $(".propup-pay").css({"top":"100%","opacity":0})
            },
            payByWechat(){  //微信支付
                // let _this = this;
                // let _dialog = _this.dialog; 
                // $(".propup-pay").css({"top":"100%","opacity":0});
                // const rechargerule = _this.rechargedata.rule[_this.activeIndex];
                // if(this.rechargemoney<=0){
                //     this.recharge.buy_money=rechargerule.buy_money;
                //     this.recharge.rule_id=rechargerule.id;
                //     this.recharge.back_money=rechargerule.back_money;
                // }

                // $.ajax({
                //     type: 'POST',
                //     url: apipath3,
                //     data: {
                //         opact:'recharge/set_order',
                //         version: '3_0_0',
                //         uid: localStorage.uid,
                //         money: _this.recharge.buy_money,
                //         rule_id: _this.recharge.rule_id,
                //         back_money: _this.recharge.back_money,
                //         business_id: _this.businessid,
                //         store_id: _this.storeid,
                //         pay_type: 'wxpay',
                //         openid:JSON.parse(localStorage.MY_USER_INFO).openid,
                //         salesman_id:sessionStorage.sid,
                //         wechat_id:sessionStorage.wid,
                //         inviter_wechat_id:sessionStorage.inviter_wechat_id,
                //         inviter_uid:sessionStorage.inviter_uid
                //     },
                //     success: function(d){
                //         if(d.code==1009){
                //             localStorage.removeItem('uid');
                //             localStorage.removeItem('MY_USER_INFO');
                //             _this.$route.router.replace('/loginway');
                //         }else if(d.code == '1000'){
                //             _this.ordersn = d.data.order_sn;
                //             if (typeof WeixinJSBridge == "undefined"){
                //                if( document.addEventListener ){
                //                    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                //                }else if (document.attachEvent){
                //                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
                //                    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                //                }
                //             }else{
                //                onBridgeReady();
                //             }
                //             function onBridgeReady(){
                //                WeixinJSBridge.invoke(
                //                    'getBrandWCPayRequest', {
                //                       "appId": d.data.appId,
                //                       "timeStamp" : d.data.timeStamp.toString(), 
                //                       "nonceStr" : d.data.nonceStr,
                //                       "package" : d.data.package,
                //                       "signType" : d.data.signType,
                //                       "paySign" : d.data.paySign,
                //                    },
                //                    function(res){
                //                       if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                //                         // _this.$route.router.go('/rechargestatus/'+_this.ordersn+'/'+_this.businessid+'/'+_this.storeid)
                //                         _this.$route.router.go('/rechargestatus/'+_this.ordersn)
                //                       }
                //                    }
                //                ); 
                //             }
                //         }else if(d.code == '1001'){
                //             _this.dialog.show = !_this.dialog.show;
                //             _dialog.content = d.msg;
                //             _dialog.buttons = [{
                //                 name: '确定',
                //                 onClick () {
                //                     _this.dialog.show = false;
                //                 }
                //             }]
                //         }
                //     }
                // });
            },
            payClose:function(){
                // this.payPsd = false;
                // var numLen = 6;
                // var list = $('.psdBox li');
                // $('#psdText').val('');
                // for(var i=0; i<numLen; i++){
                //     $(list[i]).text('');
                // }
            },
            payShow:function(){
                // this.payPsd = true;
            },
            sig(){
                let obj={
                    opact:'recharge/wallet_is_pay_pwd',
                    version:'3_0_0',
                    uid:70,
                    money:100
                };
                let newkey = Object.keys(obj).sort();
                let newObj = {};
                for (let i = 0; i < newkey.length; i++) {
                    newObj[newkey[i]] = obj[newkey[i]];
                }
                return newObj;
            }
        },
        components:{
        
        }
    }
</script>
<style lang="scss">
    .bodybg-a {background-color:#f4f4f4;}
    .recharge-info ,.flex-recharge {background-color:#fff;}
    .phone-footer-btns.checkbtn {border-radius:5px; overflow:hidden; margin-top:7rem;}
    .xieyibox{
        text-align:center; 
        color:#858585;
        a{
            color:#6a7aa0;
        }
    }
    .recharge-protocol{
        padding: 1rem 1.5rem;
        background: #fff;
        a{
            font-size: 1.4rem;
            color: #818183;
            text-decoration: underline;
        }
    }
    .flex-recharge{
        padding:1.5rem;
        border-bottom: 1px solid #ececec;
        h2.tit{
            padding-bottom:1rem;
            text-align:center;
            font-size:2rem;
            color:#ff585f;
        }
        ul{
            overflow: hidden;
        }
        li{
            width: 33.33%;
            float:left;
            padding: 0.4rem;
            display: flex;
            div{
                flex:1;
                display: flex;
                flex-direction: column;
                justify-content:center;
                border: 1px solid #dedede;
                // color: #ff585f;
                border-radius: 4px;
                height: 5.4rem;
                text-align: center;
                h2{
                    font-size: 1.6rem;
                    white-space: nowrap;
                }
                span{
                    font-size: 1.2rem;
                    white-space: nowrap;
                }
                &.active{
                    color:#fff;
                    background: #ff585f;
                    border-color: #ff585f;
                }
            }
        }
    }
    .list-recharge{
        background: #eeeeee;
        padding: 20px 0 60px;
        width: 100vw;
        width: 100%;
        overflow: hidden;
        .swiper-pagination{
            bottom: -30px;
        }
        .swiper-slide{
            background: #fff;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 0 8px #d9d9d9;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .swiper-pagination-bullet{
          background: #ffffff;
          opacity: 1;
          border-radius: 0;
          width: 24px;
          height: 5px;
          // margin:0!important;
          &.swiper-pagination-bullet-active{
            background: #00b8a8;
          }
        }
    }
    .swiper-container {
        width: 100%;
        height: 12rem;
        margin: 0 auto;
        overflow: visible;
    }
    .swiper-slide {
        text-align: center;
        width:80%;
    }
    .recharge-btns{
        text-align: center;
        margin: 2rem auto;
        span{
            display: inline-block;
            padding: 0.5rem 1rem;
            margin: 0 0.5rem;
        }
    }
    .item-recharge-title{
        border-bottom: 1px solid #ddd;
        padding: 1rem 0;
        background: #00b8a8;
        color: #fff;
        h2{
            font-size: 2rem;
        }
    }
    .item-recharge-content{
        padding:0 2rem;
        .recharge-tag{
            display: inline;
            padding: 0.2rem 1rem;
            border-radius: 4px;
            font-size: 1.4rem;
            border: 1px solid #f9616d;
            color: #f9616d;
        }
        h2{
            display:flex;
            justify-content:center;
            align-items:center;
            padding-bottom: 1rem;
            .bonusFont{
                height:1.4rem;
                line-height: 1.3rem;
                border:1px solid #ff585f;
                font-size: 1.2rem;
                border-radius: 0.3rem;
                color: #ff585f;
                padding:0px 0.3rem;
                margin-left: 0.4rem; 
            }
        }
        .f_red{
            line-height:2rem;
            .add_ico{ 
                font-size:2.39rem;
            }
            .f_money{
                font-size: 1.39rem;
                color: #ff585d;
            }
        }
        .bounsSty{
            color: #ff585f;
        }
        .bonusExplain{
            width: 100%;
            margin:0 auto;
            border-top: 1px solid #d3d3e3;
            color: #808080;
            font-size: 1rem;
            padding-top: 1rem;
            p{
                text-align: left;
            }

        }
    }
    .recharge-input{
        text-align: center;
        margin: 1rem 0;
        display: flex;
        justify-content: space-between;
        background:white;
        width:100%;
        padding-right:1.7rem;
        span.tipbox{ 
            height:4rem;
            line-height:4rem;
        }
        input{
          font-size: 2rem;
          text-indent:1.5rem;
          width: 60%;
          color: #00b8a8;
          height: 4rem;
          line-height: 3.8rem;
          line-height: calc(4rem - 2px);
          outline: none;
          border:none;
          box-shadow: none;
          -webkit-appearance: none;
          &::-webkit-input-placeholder{
            font-size: 1.4rem;
          }
        }
    }
    .squreWord{
        text-align:center;
        i{
            display:inline-block;
            width:2rem;
            height:2rem;
            vertical-align:middle;
            background: url('../../assets/images/my/anquan.png') no-repeat 50% 50% / 100% auto;
        }

    }
    .recharge-info{
        padding: 1.5rem;
        font-size: 1.4rem;
        margin-top:2rem;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
        display: flex;
        justify-content: space-between;
    }
    .phone-footer-btns .footer-btn2{
        line-height:4rem;
    }
    .propup-pay-list li i{
        &.icon-change{
            background: url('../../assets/images/my/lq.png') no-repeat 50% 50% / 100% auto;
        }
        &.icon-wechat{
            background: url('../../assets/images/my/wx.png') no-repeat 50% 50% / 100% auto;
        }
        &.icon-zfb{
            background: url('../../assets/images/my/zf.png') no-repeat 50% 50% / 100% auto;
        }
        &.icon-bank{
            background: url('../../assets/images/my/yhk.png') no-repeat 50% 50% / 100% auto;
        }
    }

    //存票支付密码
    .bg_shadow{
        width:100%;
        height:100%;
        overflow-y:auto;
        background:black;
        opacity: 0.4;
        position:fixed;
        left:0;
        top:0;
        z-index: 10;
    }
    .bg_baikuang{
        width:72%;
        height:16rem;
        background:white;
        position:fixed;
        left:13%;
        top:35%;
        z-index: 11;
        border-radius: (18rem/23.43);
        .bg_title{
            width:100%;
            height:20%;
            line-height: 3rem;
            border-bottom: 1px solid #e1e1e1;
            color:black;
            text-align: center;
            display:flex;
            justify-content:center;
            align-items:center;
            overflow:hidden;
            position:relative;
            .payClose{
                position: absolute;
                top: 0.8rem;
                left:0.8rem;
                width: 1.5rem;
                height: 1.5rem;
            }
            span{
                font-size: 1.4rem;
            }
        }
        .bg_banner{
            width:100%;
            height:20%;
            display:flex;
            justify-content:center;
            align-items:center;
            div{
                display:flex;
                align-items:center;
                i{
                    width:(52rem/23.43);
                    height:(32rem/23.43);
                    background:url('../../assets/images/my/LOGO.png') no-repeat center center / 100% 100%;
                }
                span{
                    font-size: (36rem/23.43);
                    color:#ff585f;
                    margin-left: (34rem/23.43);
                }
            }
        }
        .bg_money{
            width:100%;
            height:25%;
            display:flex;
            align-items:center;
            justify-content:center;
            .moneyBox{
                color: #333;
               .moneyIcon{
                    font-size: 1.4rem;
               }
               .moneyAccount{
                    font-size: 2.8rem;
               } 
            }


            // span{
            //     font-size:(68rem/23.43);
            //     font-weight: blod;
            //     color:black;
            //     font-family: '宋体';
            // }
        }
        .payWayTit{
            text-align: center;
            color:#656565;
        }
        .forgetPayPsd{
            text-align: right;
            color:#ff585f;
            padding-right: 2rem;
        }
        .bg_biaoge{
            width:100%;
            height:20%;
            padding:0 (40rem/23.43);
            margin-top:5%;
            div{
                width:100%;
                height:100%;
                border:1px solid #b6b7bb;
                display:flex;       
                input{
                    border:none;
                    outline:none;
                    width:16.666%;
                    height:100%;
                    border-right: 1px solid #cecece;
                    font-size: (48rem/23.43);
                    text-align: center;
                }
                .bg_int{
                    border:none;
                }           
            }
        }
        .psdBox{
            width:80%;
            height:20%;
            display: block;
            margin:4% auto 1%;
            ul{
                width:100%;
                height:100%;
                border:1px solid #b6b7bb;
                // display:flex;       
                li{
                    border:none;
                    // outline:none;
                    width:16.66%;
                    height:100%;
                    line-height: 2.7rem;
                    float: left;
                    border-right: 1px solid #cecece;
                    font-size: 4rem;
                    text-align: center;
                }
                .bg_int{
                    border-right:none;
                }           
            }
        }
        .psdInp{
            margin: 0;
            padding: 0;
            width: 1px;
            opacity: 0;
            height: 1px;
            border: none;
        }
    }
            
</style>