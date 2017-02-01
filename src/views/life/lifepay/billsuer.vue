<style lang="scss">
	.subox{width:100%;
		overflow-y:auto;
		margin: 0 auto;
		padding: 0 0; 
		background: #f4f4f4;
		font-family: "Microsoft YaHei",Lyh-Regular,helvetica,arial,sans-serif;
		.su-cont{
			background:#fff;
			margin-top: 10px;
			border-top: 1px solid #d3d3d3;
			border-bottom:1px solid #d3d3d3;
			.su-top{
				height:275px;
				margin:0 20px;
				border-bottom: 1px solid #d3d3d3;
				.su-name{
					margin-top: 15px;
					margin-bottom: 20px;
					display: -ms-flexbox;
				    display: flex;
				    -ms-flex-pack: center;
				    justify-content: center;
				    >div{
				    	display: flex;
					    -ms-flex-align: center;
					    align-items: center;
					    color: #474747;
						>span{
							font-size: 16px;
							color:#474747;
							line-height: 30px;
							display:inline-table;
							padding-left: 7px;
						}		
						>img{
	       					width:30px;
	       					height:30px; 
	       					border-radius: 50%; 
							}
						}
				}
				.su-p{
					color:#474747;
					text-align: center;
					font-size:32px;
					width:100%;
				}
				.su-p-2{
					color:#fbb11c;
					text-align: center;
					font-size:14px;
					width:100%;
					margin-top: 20px;
					margin-bottom: 32.5px;
				}
				.su-lep{
					color:#474747;
					font-size: 18px;
					margin: 7.5px 0;
					>span{
						color:#808080;
						float: right;
					}
				}
				.su-op{
					color:#474747;
					font-size: 18px;
					margin: 7.5px 0;
					>span{
						color:#808080;
						float: right;
					}
					>i{
						width:10px; 
						height:16px; 
						display:inline-block; 
						background:url(../../../assets/images/components/go_icon.png) no-repeat center center;
						background-size:100% 100%;  
						content: ""; 
						float:right;
						margin-top: 4px;
						margin-left: 10px;
					}
				}
			}
			
			.su-down{
				margin:20px 20px;
				.su-mar{margin-top: 15px !important;}
				.su-dup{
					    color:#474747; 
						font-size: 18px;
						margin: 7.5px 0px;
						>span{
							color:#808080;
							float: right;
						}
						.su-spn{
							padding-left: 5px;
						}
				}
			}
		}
	}
</style>
<template>
	<div class="subox">
		<div class="su-cont">
			<div class="su-top">
				<div class="su-name">
					<div>
						<img src="../../../assets/images/components/qietu-25.png">
						<span>上海供电公司</span>
					</div>
				</div>
				<p class="su-p">￥0</p>
				<p class="su-p-2">交易成功|缴费中</p>
				<div class="su-op">付款方式<i></i><span>中国建设银行(9511)</span></div>
				<div class="su-lep">缴费说明<span>电费</span></div>
				<div class="su-lep">户号<span>003333333</span></div>
			</div>
			<div class="su-down">
				<div class="su-dup su-mar">创建时间<span class="su-spn">12:01</span><span>2017-12-02</span></div>
				<div class="su-dup">订单号<span>234555555555555</span></div>
				<div class="su-dup">商户订单号<span>543555555</span></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>