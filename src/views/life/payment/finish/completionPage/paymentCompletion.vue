<template>
	<div class="body paymentCompletion">
		<div class="paymentCompletion-all">
			<div class="paymentCompletion-title">
				<div>
					<img src="../../../../../assets/images/my/df.png">
					<span>{{company}}</span>
				</div>
			</div>
			<p class="paymentCompletion-money">{{money}}</p>
			<p class="paymentCompletion-zhuangtai">交易成功</p>
			<ul class="paymentCompletion-fkxx">
				<li>
					<span>付款方式</span>
					<span>{{mode}}</span>
				</li>
			</ul>
			<ul class="paymentCompletion-ddxx">
				<li>
					<span>付款方式</span>
					<span>{{mode}}</span>
				</li>
			</ul>
		</div>
		<div class="paymentCompletion-footer">
			<a @click="show">开通代扣</a>
		</div>
		<div class="paymentCompletion-shadow" v-show="shadow"></div>
		<div class="paymentCompletion-konw" v-show="shadow">
			<div>
				<p>自动扣款，不再担心忘记缴费</p>
				<ul>
					<li>
						<div>
							<img src="../../../../../assets/images/my/koukuanshijian.png">
							<span>扣款时间</span>
						</div>
						<p>出账后次日完成扣款</p>
					</li>
					<li>
						<div>
							<img src="../../../../../assets/images/my/koukuanfangshi.png">
							<span>扣款方式</span>
						</div>
						<p>余额、零钱、储蓄卡</p>
					</li>
					<li>
						<div>
							<img src="../../../../../assets/images/my/shenghuoshijian.png">
							<span>生效时间</span>
						</div>
						<p>开通/关闭服务，立即生效</p>
						<p>历史欠费账单将于签约次日自动缴纳</p>
					</li>
					<div class="paymentCompletion-footers">
						<a @click="go('openingWithholding')">我知道了</a>
					</div>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>

    export default {  
      data() {
        return {
        	company:'上海供电公司',
        	money:'0',
        	mode:'微信',
        	shadow:false
        }
      },
      methods: {
      	 	show(){
      	 		this.shadow=true;
      	 	},
      	  go(name){
      	  	this.$router.push(name);
      	  }
      }
    };
</script>
 

<style lang="scss">
	.paymentCompletion{
		width:100%;
		height:100%;
		padding-top:0.85rem;
	}
	.paymentCompletion-all{
		width:100%;
		background: white;
		padding:2rem 1.3rem;
		ul{
			width:100%;
			li{
				width:100%;
				display: flex;
				justify-content: space-between;
				font-size: 1.6rem;
				margin-top: 1.3rem;
				span:first-child{
					color: #474747;
				}
				span:last-child{
					color:#808080;
				}
			}
		}
	}
	.paymentCompletion-title{
		width:100%;
		display: flex;
		justify-content: center;
		div{
			display: flex;
			align-items: center;
			font-size: 1.2rem;
			color: #474747;
			img{
				width:3rem;
				height:3rem;
			}
			span{
				margin-left:1rem;
			}
		}
	}
	.paymentCompletion-money{
		width:100%;
		text-align: center;
		font-size: 4.6rem;
	}
	.paymentCompletion-zhuangtai{
		width:100%;
		text-align: center;
		font-size: 1.2rem;
		color: #808080;
		padding-bottom:2.8rem;
	}
	.paymentCompletion-fkxx{
		border-bottom: 1px solid #d3d3d3;
		padding-bottom:2rem;
	}
	.paymentCompletion-ddxx{
		padding-top:1rem;
	}
	.paymentCompletion-footer{
		width:100%;
		padding:3.2rem 1.7rem 0;
		a{
			display: block;
			width:100%;
			height:3.6rem;
			text-align: center;
			line-height: 3.6rem;
			background:#ff585f;
			color: white;
			font-size: 1.8rem;
			border-radius:8px;
		}
	}
	.paymentCompletion-shadow{
		width:100%;
		height:100%;
		background:black;
		opacity: 0.7;
		position:fixed;
		top:0;
		left:0;
	}
	.paymentCompletion-konw{
		width:100%;
		height: 100%;
		position:fixed;
		top:0;
		left:0;
		padding:6.4rem 3rem 0;
		>div{
			width:100%;
			background:white;
			padding:0 1.3rem 2rem;
			>p{
				width:100%;
				height:5.1rem;
				border-bottom:1px solid #d3d3d3;
				text-align: center;
				line-height: 5.1rem;
				font-size: 1.6rem;
				color: #474747;
			}
			ul{
				width:100%;
				padding-top:1.7rem;
				li{
					width:100%;
					padding-bottom:2rem;
					div{
						width:100%;
						display: flex;
						align-items:center;
						img{
							width:3rem;
							height:3rem;
						}
						span{
							font-size: 1.6rem;
							color: #474747;
							margin-left:1rem;
						}
					}
					p{
						width:100%;
						font-size: 1.5rem;
						color: #808080;
						padding-left:4rem;
					}
				}
			}
			.paymentCompletion-footers{
				width:100%;
				padding:0 2rem;
				a{
					display: block;
					width:100%;
					height:4.2rem;
					text-align: center;
					line-height: 4.2rem;
					background:#ff585f;
					color: white;
					font-size: 1.8rem;
					border-radius:8px;
				}
			}
		}
	}
</style>