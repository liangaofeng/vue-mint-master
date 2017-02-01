<template>
    <!-- <div class="phone-header headerSty">
        水电费
    </div> -->
    <div class="body bodySty">
        <div class="rechargeBox">
            <div class="rechargeMoney">
               <h3>金额(元)</h3><!-- type="tel" maxlength="100000" -->
               <!-- <input type="tel" v-model="number" onKeyPress="if((event.keyCode<48 || event.keyCode>57) && event.keyCode!=46 || /\.\d\d$/.test(value))event.returnValue=false" maxlength="9"  @keyup="gaveBonus()" placeholder="请输入金额" /> -->
               <input type="tel" v-model="money" maxlength="6"  @keyup="gaveBonus()" placeholder="请输入金额" />
            </div>
        </div>
        <div class="rechargeTip">{{tiket_money}}</div>

        <form action="https://yintong.com.cn/llpayh5/payment.htm" id="llpay" method="post">
            <input type="hidden" name="req_data" :value="llpaydata">
        </form>
        <form action="" method="POST" id="wrap_form" style="display: none"></form>
        <!-- <div class="nextBtn" v-link="{path:'pocketRechargeStatus'}">下一步</div> -->
        <div class="nextBtn" @click="recharge">提交</div>


        <!-- 充值方式弹出层 -->
        <div class="popup" :class="popup ? 'popupShow' : 'popupHide'"  @click="rechargeClose">
            <div class="payWayList">
                <div class="payWay" @click="bankCardPay()">
                    <img src="../../assets/images/my/yhk.png">
                    <div class="payBox">
                        <h3>银行卡支付</h3>
                        <span>有连连支付提供安全保障</span>
                    </div>
                </div>
                <div class="payWay" @click="weChartPay()">
                    <img src="../../assets/images/my/wx.png">
                    <div class="payBox">
                        <h3>微信支付</h3>
                        <span>推荐使用5.0及以上版本</span>
                    </div>
                </div>
                <div class="payWay payWayNoBorder" @click="alipayPay()">
                    <img src="../../assets/images/my/zf.png">
                    <div class="payBox">
                        <h3>支付宝支付</h3>
                        <span>推荐支付宝用户使用</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            tabPage:1,
            popup:false,
            uid:localStorage.uid,
            llpaydata:{},
            llpayurl:'',
            ordersn:'',
            money:null,
            paytype:'',
            tiket_money:null
        }
    },
    mounted(){
        // let _this = this;
        // let ua = navigator.userAgent;
        // if(ua.indexOf('MicroMessenger') > -1){
        //     if(_this.getQueryString('code') == null && !localStorage.MY_USER_INFO){
        //         sessionStorage.scanhref = window.location.href;
        //         location.replace('https://open.weixin.qq.com/connect/oauth2/authorize?appid='+appid+'&redirect_uri='+encodeURIComponent(sessionStorage.scanhref)+'&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect');
        //     }
        //     if(_this.getQueryString('code') != null){
        //         $.ajax({
        //             type:'post',
        //             url: apipath2+'user/get_wechat_info',
        //             data:{
        //                 code: _this.getQueryString('code')
        //             },
        //             dataType: 'json',
        //             success: function(d){
        //                 if(d.code == '1000'){
        //                     localStorage.setItem('MY_USER_INFO',JSON.stringify(d.data));
        //                     location.replace(sessionStorage.scanhref);
        //                 }
        //             }
        //         })
        //     }
        //     _this.paytype = 'wx';
        // }else if(ua.indexOf('Alipay') > -1){
        //    _this.paytype = 'zfb';
        // }
    },
    // route:{
    //     data(transition){
    //         let _this = this;
    //         var ua = navigator.userAgent;
    //         console.log(ua);
    //         if(ua.indexOf('MicroMessenger') > -1){
    //             _this.paytype = 'wx';
    //         }else if(ua.indexOf('Alipay') > -1){
    //            _this.paytype = 'zfb';
    //         }
    //     }
    // },
    methods:{
        getQueryString: function(name) { //获取授权码
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
            var r = window.location.search.substr(1).match(reg);
            if (r!=null){
                return unescape(r[2]);
            }else{
                return null 
            };
        },
        recharge:function(){
            //MessageBox('提示', '操作成功');
            let _this = this;
            if(_this.money == '' || !_this.money){
                MessageBox('提示', '充值金额不能为空');
                _this.money='';
                return false; 
            }else if(_this.money < 1 || _this.money > 100000){
                MessageBox('提示', '充值金额应大于0元，小于10万');
                return false; 
            }else{
                var reg = /^[0-9]+$/;
                if(!reg.test(_this.money)){
                     MessageBox('提示', '输入的金额应为6位整数');
                    _this.money='';
                    return false; 
                }
            }
            this.popup = true;
        },
        rechargeClose:function(){
            this.popup = false;
        },
        gaveBonus:function(){
            // let _this = this;
            // let _alert = this.alert;
            // console.log(_this.money);
            // if(_this.money){
            //     if(_this.money == 0){
            //         //_alert.show = true;
            //         // _alert.showtext = '充值要大于0元';
            //         // setTimeout(()=>{
            //         //     _alert.show = false;
            //         // },1000)
            //         return false;
            //     }
            //     $.ajax({
            //         type: 'POST',
            //         url: apipath3,
            //         data: {
            //             opact:'yield/recharge_back',
            //             version:'3_0_0',
            //             uid:_this.uid,
            //             money:_this.money
            //         },
            //         dataType: "json",
            //         success: function(d){
            //             console.log(d);
            //             if(d.code == 1000){
            //                 _this.tiket_money = d.data.title;                       
            //             }else{
            //                 alert(d.data);
            //             }
            //         }
            //     });
            // }
        },
        bankCardPay:function(){
            // let _this = this;
            // let _dialog = this.dialog;
            // let _alert = this.alert;
            // $.ajax({
            //     type: 'POST',
            //     url: apipath3,
            //     data: {
            //         opact:'walletrecharge/set_order',
            //         version:'3_0_0',
            //         uid:_this.uid,
            //         money:_this.money,
            //         url_return:window.location.href.split("#")[0]+'#!/pocketRechargeStatus/',
            //         pay_type:'llpay'
            //     },
            //     dataType: "json",
            //     success: function(d){
            //         console.log(d);
            //         if(d.code == 1000){
            //             const getdata = new Promise((resolve,reject)=>{
            //                 _this.llpaydata = d.data.para;
            //                 _this.llpayurl = d.data.post_url;
            //                 _this.ordersn = d.data.order_sn;
            //                 resolve();
            //             })
            //             getdata.then(()=>{
            //                 $('#llpay').submit();
            //             })
                        
            //         }else if(d.code == 1005){
            //             _this.dialog.show = !_this.dialog.show;
            //             _dialog.content = '您还未绑定银行卡哟，<br />请先绑定一张银行卡！'
            //             _dialog.buttons = [{
            //                 name: '取消',
            //                 classes: 'gray',
            //                 onClick () {
            //                     _this.dialog.show = false;
            //                 }
            //             },{
            //                 name: '绑定银行卡',
            //                 onClick () {
            //                     _this.dialog.show = false;
            //                     _this.$route.router.go('/addbankCard');
            //                 }
            //             }]
            //         }else{
            //             _alert.show = true;
            //             _alert.showtext = d.msg;
            //             setTimeout(()=>{
            //                 _alert.show = false;
            //             },1000)
            //         }
                    
            //     }
            // });
        },
        weChartPay:function(){
            // let _this = this;
            // let _dialog = _this.dialog;
            // $.ajax({
            //     type: 'POST',
            //     url: apipath3,
            //     data: {
            //         opact:'walletrecharge/set_order',
            //         version:'3_0_0',
            //         uid:_this.uid,
            //         money:_this.money,
            //         pay_type:'wxpay',
            //         openid:JSON.parse(localStorage.MY_USER_INFO).openid
            //     },
            //     dataType: "json",
            //     success: function(d){
            //         console.log(d);
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
            //                 WeixinJSBridge.invoke(
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
            //                         _this.$route.router.go('/pocketRechargeStatus/'+_this.ordersn)
            //                       }
            //                    }
            //                 ); 
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
            //         }else if(d.code == '1006'){
            //             _this.dialog.show = !_this.dialog.show;
            //             _dialog.content = d.msg;
            //             _dialog.buttons = [{
            //                 name: '取消',
            //                 classes: 'gray',
            //                 onClick () {
            //                      _this.dialog.show = false;
            //                 }
            //             },{
            //                 name: '去绑定',
            //                 classes: '#8a8b8f',
            //                 onClick () {
            //                     _this.$route.router.go('/cellPhoneNumberBinding');
            //                     _this.dialog.show = false;
            //                 }
            //             }]
            //         }else{
            //             alert(d.msg);
            //         }
            //     }
            // });
        },
        alipayPay:function(){
            // let _this = this;
            // let _dialog = _this.dialog;
            // $.ajax({
            //     type: 'POST',
            //     url: apipath3,
            //     data: {
            //         opact:'walletrecharge/set_order',
            //         version:'3_0_0',
            //         uid:_this.uid,
            //         money:_this.money,
            //         pay_type:'alipay',
            //         url_return:window.location.href.split("#")[0]+'#!/pocketRechargeStatus/',
            //         alipay_version:'v2'
            //     },
            //     dataType: "json",
            //     success: function(d){
            //         console.log(d);
            //         if(d.code==1009){
            //             localStorage.removeItem('uid');
            //             localStorage.removeItem('MY_USER_INFO');
            //             _this.$route.router.replace('/loginway');
            //         }else if(d.code == '1000'){
            //             _this.ordersn = d.data.order_sn;
            //             $('#wrap_form').attr('action', d.data['post_url']);
            //             $('#wrap_form').attr('method', 'get');
            //             $('#wrap_form').html(d.data['shtml']);
            //             $("#input_form").val(d.data['para']);
            //             $('#wrap_form').submit();
            //             return false;
            //         }else if(d.code == '1001'){
            //             _this.dialog.show = !_this.dialog.show;
            //             _dialog.content = d.msg;
            //             _dialog.buttons = [{
            //                 name: '确定',
            //                 onClick () {
            //                     _this.dialog.show = false;
            //                 }
            //             }]
            //         }else if(d.code == '1006'){
            //             _this.dialog.show = !_this.dialog.show;
            //             _dialog.content = d.msg;
            //             _dialog.buttons = [{
            //                 name: '取消',
            //                 classes: 'gray',
            //                 onClick () {
            //                      _this.dialog.show = false;
            //                 }
            //             },{
            //                 name: '确定',
            //                 classes: '#8a8b8f',
            //                 onClick () {
            //                     _this.$route.router.go('/cellPhoneNumberBinding');
            //                     _this.dialog.show = false;
            //                 }
            //             }]
            //         }else{
            //             alert(d.msg);
            //         }

            //     }
            // });

        }
    },
    components:{
    }
}
</script>
<style lang="scss" scoped>
    .bodySty{
        padding-top: 1rem;
        background:#fafafa;
    }
    .rechargeBox{
        width: 100%;
        background:#fff;
        border-top: 1px solid #d2d2d2;
        border-bottom:1px solid #d2d2d2; 
        padding: 0 1.5rem;
        .rechargeMoney{
            width: 100%;
            height:7rem;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            h3{
                font-size: 1.5rem;
                width:6rem;
            }
            input{
                width:calc(100% - 8.5rem);
                height: 3rem;
                font-size: 1.5rem;
            }
        }
    }
    .rechargeTip{
        width: 100%;
        font-size: 1.2rem;
        color:#ff585f;
        text-align: center;
        margin-top: 1rem;
    }
    .nextBtn{
        width: 95%;
        height: 4rem;
        line-height: 4rem;
        font-size: 1.5rem;
        color:#fff;
        border-radius: 0.4rem;
        margin: 2rem auto;
        text-align: center;
        background:#ff595e;
    }
    .popup{
        width: 100%;
        height:100%;
        position: fixed;
        transition: all .2s ease;
        left: 0rem;
        background:rgba(0,0,0,0.7);
        z-index: 10;
    }
    .popupShow{
        opacity:1;
        bottom:0rem;
    }
    .popupHide{
        opacity:0;
        bottom:-100%;
    }
    .payWayList{
        width: 100%;
        padding:0 1.5rem; 
        background:#fff;
        position: absolute;
        bottom:0rem;
        left:0rem;
        .payWay{
            width: 100%;
            height:5.8rem;
            border-bottom:1px solid #d2d2d2; 
            display:flex;
            justify-content:flex-start;
            align-items:center;
            img{
                width: 3.5rem;
                height: 3.5rem;
            }
            .payBox{
                margin-left: 1.5rem;
                h3{
                    font-size: 1.4rem;
                    color:#333;
                }
                span{
                    font-size: 1.3rem;
                    color:#999999;
                }
            }
        }
        .payWayNoBorder{
            border-bottom:none; 
        }
    }
    .popupAnimate{
        transition: all .3s ease;

    }
    .popupAnimate-enter {
        opacity: 1;
    }
    .popupAnimate-leave {
        height: 0;
        padding: 0 10px;
        opacity: 0;
    }

    
</style>