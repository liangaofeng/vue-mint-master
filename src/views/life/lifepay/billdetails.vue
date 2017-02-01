<style lang="scss">
	.bilbox{width:100%;
		overflow-y:auto;
		margin: 0 auto;
		padding: 0 0; 
		background: #f4f4f4;
		font-family: "Microsoft YaHei",Lyh-Regular,helvetica,arial,sans-serif;
		.bil-cont{
			background:#fff;
			margin-top: 10px;
			border-top: 1px solid #d3d3d3;
			border-bottom:1px solid #d3d3d3;
			.bil-top{
				height:235px;
				margin:0 20px;
				border-bottom: 1px solid #d3d3d3;
				.bil-name{
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
				.bil-p{
					color:#474747;
					text-align: center;
					font-size:32px;
					width:100%;
				}
				.bil-p-2{
					color:#fbb11c;
					text-align: center;
					font-size:14px;
					width:100%;
					margin-top: 20px;
					margin-bottom: 32.5px;
				}
				.bil-lep{
					color:#474747;
					font-size: 18px;
					margin: 7.5px 0;
					>span{
						color:#808080;
						float: right;
					}
				}
			}
			.bil-mar{margin-top: 15px !important;;}
			.bil-dup{
				    color:#474747; 
					font-size: 18px;
					margin: 7.5px 20px 7.5px 20px;
					>span{
						color:#808080;
						float: right;
					}
					.bil-spn{
						padding-left: 5px;
					}
			}
		}
		.bil-go{
			width:100%;
			height:56px;
			display: block;
			background:#ff595e;
			position: fixed;
			bottom:0;
			left:0;
			color:#fff;
			text-align: center;
			line-height: 56px;
			font-size: 20px;
			font-weight: bold;
		}
	}
</style>
<template>
	<div class="bilbox">
		<div class="bil-cont">
			<div class="bil-top">
				<div class="bil-name">
					<div>
						<img src="../../../assets/images/components/qietu-25.png">
						<span>上海供电公司</span>
					</div>
				</div>
				<p class="bil-p">￥0</p>
				<p class="bil-p-2">等待付款</p>
				<div class="bil-lep">缴费说明<span>电费</span></div>
				<div class="bil-lep">户号<span>003333333</span></div>
			</div>
			<div class="bil-dup bil-mar">创建时间<span class="bil-spn">12:01</span><span>2017-12-02</span></div>
			<div class="bil-dup">订单号<span>234555555555555</span></div>
			<div class="bil-dup">商户订单号<span>543555555</span></div>
		</div>
		<a class="bil-go">立即付款</a>
	</div>
</template>
<script>
	export default{

	}
</script>