<style lang="scss">
	.payafter{
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
				.after-up{
					width:100%;
					background:#fff;
					height:78px;
					.aft-p-1{
						font-size: 14px;
						color:#474747;
					}
					.aft-p-2{
						font-size: 36px;
						color:#474747;
						text-align: right;
					}
				}
				>p{
					font-size: 14px;
					color:#808080;
					line-height: 30px;
					.aftmag{
						padding-right: 20px;
					}
					>span{
						float:right;
						position:relative;
						.icons{
							width:10px; 
							height:16px;
						    display:block; 
						    background:url(../../../assets/images/components/go_icon.png) no-repeat center center; 
						    background-size:100% 100%;  
						    content: ""; 
						    position: absolute; 
						    top:7px; 
						    right: 0px;
						}
					}
				}
			}
			// .fees-dow{
			// 	padding: 25px 20px 24px 20px;
			// 	font-size: 16px;
			// 	color:#808080;
			// 	>p{
			// 		line-height: 30px;
			// 		>span{
			// 			float:right;
			// 		}
			// 	}
			// }
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
				padding:0 20px;
				overflow:hidden;
				>input{
					padding:0 30px;
					width:50%;
					height:47px;
					font-size: 16px;
				}
			}
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
	<div class="payafter">
		<div class="fees-top">
			<div class="fees-up">
				<i></i>
            	<span>电费</span>
			</div>
			<div class="fees-bottom">
				<div class="after-up">
					<p class="aft-p-1">2017年1月</p>
					<p class="aft-p-2">33433.44</p>
				</div>
				<p>付款方式<span class="aftmag">中国建设银行(9511)<i class="icons"></i></span><p>
				<p>缴费户号<span>06688</span><p>
				<p>户名<span>*爱平</span><p>
				<p>地址信息<span>东方路***22号403室</span><p>
				<p>代扣<span>未开通</span></p>
			</div>
			<!-- <div class="fees-dow">
				<p>当前可用余额<span>0.00</span></p>
				<p>当前欠费余额<span>0.00</span></p>
		    </div> -->
		</div>
		<div class="fees-down">
			<label>缴费金额 
			<input type="tel" maxlength="9" placeholder="请输入缴费金额" />
			</label>
		</div>
		<a class="fees-bun">立即缴费</a>
	</div>
</template>
<script>
</script>