<style lang="scss">
	.payfees{
		*, *:before, *:after{
			box-sizing:initial;
		}
		.clear {clear:both;}
		width:100%;
		height:100%;
		margin:0 auto;
		padding: 0 0;
		background:#f4f4f4;
		font-family: "Microsoft YaHei",Lyh-Regular,helvetica,arial,sans-serif;
		overflow-y:auto; 
		.fees-top{
			background:#fff;
			border-bottom: 1px solid #d3d3d3;
			.fees-up{
				height:75px;
				margin-left: 20px;
				border-bottom:1px solid #d3d3d3; 
				>i{
					background:url(../../../assets/images/components/qietu-25.png) no-repeat center center; 
					background-size: 100% 100%;
       				width:36px; 
       				height:36px; 
       				border-radius: 50%; 
       				display: inline-block; 
       				margin-top: 18px;
       				float: left;
				}
				span{
					line-height: 72px; 
					display:inline-block;
					float: left; 
					padding-left: 14px; 
					font-size: 16px;
				}
			}
			.fees-bottom{
				padding: 14px 20px 0 20px;
				>p{
					font-size: 14px;
					color:#808080;
					line-height: 30px;
					>span{
						float:right;
					}
				}
			}
			.fees-dow{
				padding: 25px 20px 24px 20px;
				font-size: 16px;
				color:#808080;
				>p{
					line-height: 30px;
					>span{
						float:right;
					}
				}
			}
		}
		.fees-down{
			margin-top: 10px;
			height:49px;
			border-top:1px solid #d3d3d3;
			border-bottom:1px solid #d3d3d3;
			background:#fff;
			overflow:hidden;
			>label{
				line-height: 51px;
				font-size:18px;
				color:#474747;
				padding-left:110px;
				overflow:hidden;
				position:relative;
				height:100%;
				display:block;
				>span{
					position:absolute;
					display:block;
					height:49px;
					line-height:49px;
					left:20px;
					top:0;
				}
				>input{
					display:block;
					margin:auto;
					width:100%;
					height:47px;
					font-size: 16px;
				}
			}
		}
		.jfMoneTip {
			padding:16px 0 0 110px;
			color:red;
			font-size:14px;
		}
		.fees-bun{
			margin:20px 20px;
			display:block;
			background:#e1e1e1;
			border-radius:6px;
			text-align: center;
			line-height: 49px;
			font-size: 18px;
			color:#808080;
		}
		.fees-avies{
			background:#ff585f;
			color:#fff;
		} 
		.payTypebox {
		  // transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		  transition: all .5s ease;
		  position:fixed;
		  background-color:#fff;
		  z-index:1;
		  width:100%;
		  height:auto;
		  left:0;
		  bottom:-100%;
		  opacity: 0;
		}
		.payTypebox-show {
		  bottom:0;
		  opacity: 1;
		  z-index:10001;
		}
		.TipBox {
		  transition: all .5s ease;
		  transform:scale(0);-moz-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);-webkit-transform:scale(0);
		  position:fixed;
		  background-color:rgba(255,255,255,.8);
		  z-index:1;
		  width:290px;
		  height:110px;
		  margin:auto;
		  top:0;
		  left:0;
		  right:0;
		  bottom:0;
		  opacity: 1;
		  border-radius:10px;
		  text-align:center;
		  overflow:hidden;
		  h3{
		  	border-bottom:1px solid #555;
		  	height:70px;
		  	line-height:70px;
		  	font-size:18px;
		  	color:#000;
		  }
		  a{
		  	display:block;
		  	height:40px;
		  	line-height:40px;
		  	color:#0079fe;
		  	text-decoration:none;
		  }
		}
		.TipBox-show {
		  transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);-webkit-transform:scale(1);
		  opacity: 1;
		  z-index:10001;
		}
		.bgbox ,.bgbox2 {
		  // transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		  transition: all .5s ease;
		  position:fixed;
		  background-color:#000;
		  z-index:1;
		  width:100%;
		  height:100%;
		  left:0;
		  bottom:0;
		  opacity: 0;
		}
		.bgbox-show ,.bgbox2-show {opacity:.7;z-index:10000;}
		.zindex10{z-index:10;position:relative;}
		.payTypebox ul{
			padding:0 20px;
			li{
				height:40px;
				line-height:40px;
				padding:10px 0 10px 45px;
				border-bottom:1px solid #d2d2d2;
				position:relative;
				font-size:16px;
				color:#474747;
				span{font-size:18px;float:right;font-family:arial;}
				.p1 {font-size:16px;line-height:25px;}
				.p2 {font-size:13px;line-height:15px;color:#a39d9d;}
				i{
					position:absolute;
					display:block;
					width:30px;
					height:30px;
					left:0;
					top:50%;
					margin-top:-15px;
				}
				i.icon-balance{background:url(../../../assets/images/my/ye.png) no-repeat center center/100% 100%;}
				i.icon-cpchange{background:url(../../../assets/images/my/lq.png) no-repeat center center/100% 100%;}
				i.icon-weixin{background:url(../../../assets/images/my/wx.png) no-repeat center center/100% 100%;}
				i.icon-alipay{background:url(../../../assets/images/my/zf.png) no-repeat center center/100% 100%;}
				i.icon-bankcard{background:url(../../../assets/images/my/yhk.png) no-repeat center center/100% 100%;}
			}
			li:last-child{border:none;}
		}
	}
</style>
<template>
	<div class="payfees">
		<div class="fees-top zindex10">
			<div class="fees-up">
				<i></i>
            	<span>电费</span>
			</div>
			<div class="fees-bottom">
				<p>缴费单位<span>上海供电公司</span><p>
				<p>缴费户号<span>06688</span><p>
				<p>户名<span>*爱平</span><p>
				<!-- <p>地址信息<span>东方路***22号403室</span><p> -->
			</div>
			<div class="fees-dow">
				<p>当前可用余额<span>0.00</span></p>
				<p>当前欠费余额<span>0.00</span></p>
		    </div>
		</div>
		<div class="fees-down zindex10">
			<label>
				<span>缴费金额</span> 
				<input type="tel" id="jfMoney" v-model="jfMoney" @keyup="fnkeyupIpt" maxlength="9" placeholder="请输入缴费金额" />
			</label>
		</div>
		<div class="jfMoneTip zindex10" v-if="jfMoneTip">{{TipText}}</div>
		<a class="fees-bun zindex10" @click="fnPays">立即缴费</a>
	
		<!-- <div id="menuss" class="zindex10">
			<mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
		</div> -->
		<!-- 支付方式弹层----0 -->
		<div class="payTypebox">
			<ul class="">
				<li @click="fnPaysType('balance')">
					<i class="icon-balance"></i>
					余额支付
					<span id="balanceMoney">￥{{balanceMoney}}</span>
					<div class="clear"></div>
				</li>
				<li @click="fnPaysType('cpchange')">
					<i class="icon-cpchange"></i>
					<p class="p1">存票零钱支付</p>
					<p class="p2">推荐存票用户使用</p>
				</li>
				<li @click="fnPaysType('weixin')">
					<i class="icon-weixin"></i>
					<p class="p1">微信支付</p>
					<p class="p2">推荐使用5.0及以上版本</p>
				</li>
				<li @click="fnPaysType('alipay')">
					<i class="icon-alipay"></i>
					<p class="p1">支付宝支付</p>
					<p class="p2">推荐支付宝用户使用</p>
				</li>
				<li @click="fnPaysType('bankcard')">
					<i class="icon-bankcard"></i>
					<p class="p1">银行卡支付</p>
					<p class="p2">有连连支付提供安全保障</p>
				</li>
			</ul>
		</div>
		<div class="bgbox" @click="fnClosePays"></div>
		<!-- 支付方式弹层----1 -->

		<!-- 提示弹层A----0 -->
		<div class="TipBox">
			<h3>{{tipTCtext}}</h3>
			<a href="#">去充值</a>
		</div><!-- @click="fnCloseTip" -->
		<div class="bgbox2" ></div>
		<!-- 提示弹层A----1 -->
	</div>
</template>
<script>
import { Actionsheet } from 'mint-ui';
// Vue.component(Actionsheet.name,Actionsheet);
export default{
	data(){
		return{
			jfMoney:'',//输入值
			jfMoneTip:false,//提示层状态
			TipText:'',//错误提示语
			tipTCtext:'',
			userId:'',
			account:'',//缴费户号
			payunitname:'',//缴费单位
			balanceMoney:30,
			uid:localStorage.uid,
			actions:[
				{
					name:'test001',
					methods:function(){
						console.info('test001')
					}
				},
				{
					name:'test002',
					methods:{
						test2:function(){
						console.info('test002')
						}
					}
				}
			],
			sheetVisible:false
		}
	}, 
	mounted(){
		console.info('uid--'+this.uid)
		// this.account = this.$route.params.account;
		// this.payunitname = this.$route.params.payunitname;
		// console.info('account::'+this.account+'----payunitname::'+this.payunitname)
	},
	methods:{
		fnkeyupIpt:function(obj){//键盘输入
			var $obj=$('#jfMoney');
			this.TipText='';
			this.jfMoneTip=false;
			this.fnNaNs($obj.val());
		},
		fnPays:function(){//立即缴费按钮
			var _val = $('#jfMoney').val(),
			    _bool = $('.fees-bun').hasClass('fees-avies');
			if(_bool){
				$('.payTypebox').addClass('payTypebox-show');
				$('.bgbox').addClass('bgbox-show');
			}
		},
		fnPaysType:function(num){//点击具体的支付方式
			console.info(num)
			var _this = this;
			switch(num){
				case 'balance'://余额支付
				    console.info('余额支付')
				    if(this.jfMoney>this.balanceMoney){//余额不足
				    	_this.fnClosePays();
						$('.TipBox').addClass('TipBox-show');
						$('.bgbox2').addClass('bgbox2-show');
						_this.tipTCtext = '账户余额不足';
				    }else{//余额足

				    }
				    break;
				case 'cpchange'://存票零钱支付
				    console.info('存票零钱支付')
				    break;
				case 'weixin'://微信支付
				    console.info('微信支付')
				    break;
				case 'alipay'://支付宝支付
				    console.info('支付宝支付')
				    break;
				case 'bankcard'://银行卡支付
				    console.info('银行卡支付')
				    break;
			}
		},
		fnClosePays:function(){//关闭弹层
			$('.payTypebox').removeClass('payTypebox-show');
			$('.bgbox').removeClass('bgbox-show');
		},
		fnNaNs:function(vals){//验证输入值
			var $ipts = $('#jfMoney');
			if(isNaN(vals)){
				this.TipText='请输入数字';
				$('.fees-bun').removeClass('fees-avies')
				this.jfMoneTip=true;
			}else{
				if(vals==0||vals<0){
					this.TipText='输入金额必须大于0';
					$('.fees-bun').removeClass('fees-avies')
					this.jfMoneTip=true;
				}else{
					this.TipText='';
					this.jfMoneTip=false;
					$('.fees-bun').addClass('fees-avies')
					this.jfMoney = vals;
					console.info('通过')
				}
			}
		}
	} 
}
</script>