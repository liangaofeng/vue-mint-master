<template>
	<div class="body openingWithholding">
		<div class="openingWithholding-main">
			<div class="openingWithholding-title">
				<img src="../../../../../assets/images/my/df.png">
				<span>{{pay_unitname}}</span>
			</div>
			<ul>
				<li>
					<span>缴费公司</span>
					<span>{{gongsi}}</span>
				</li>
				<li>
					<span>缴费户号</span>
					<span>{{account}}</span>
				</li>
				<li>
					<span>户名</span>
					<span>{{account_name}}</span>
				</li>
			</ul>
		</div>
		<div class="openingWithholding-center">
			<ul>
				<li>
					<span>扣款账户</span>
					<span>{{mobile}}</span>
				</li>
				<li>
					<span>扣款方式</span>
					<span>{{pay_type}}</span>
				</li>
				<li>
					<span>扣款时间</span>
					<span>立即生效</span>
				</li>
			</ul>
		</div>
		<p class="openingWithholding-nav">同意<a>《存票代扣协议》</a></p>
		<div class="openingWithholding-footer">
			<a @click="go">{{message}}</a>
		</div>
	</div>
</template>
<script>
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
    export default {  
      data() {
        return {
        	company:'上海供电公司',
        	money:'0',
        	mode:'微信',
        	message:'立即开通',
        	pay_unitname:null,
        	account:null,
        	account_name:null,
        	mobile:null,
        	pay_type:null,
        	gongsi:null
        }
      },
      mounted(){
      	let _this=this;
      	this.Fetch("getautopaymentinfo",{uid:14,card_id:7}).fetchData().then(function  (d) {
      		console.log(d);
      		_this.pay_unitname=d.data.pay_unitname;
      		_this.account=d.data.account;
      		_this.account_name=d.data.account_name;
      		_this.mobile=d.data.mobile;
      		_this.pay_type=d.data.pay_type;
      		_this.gongsi=d.data.pay_unitname;
      		if(_this.gongsi.length>6){
      			_this.gongsi=_this.gongsi.substring(0,6)+"*";
      		}
      	});
      },
      methods: {
      	  go(){
      	  	let _this=this;
      	  	if(this.message=="返回首页"){
      	  		this.$router.push('index');
      	  		return;
      	  	}else{
      	  		this.Fetch("setautopayment",{uid:14,card_id:7}).fetchData().then(function  (d) {
      	  			 if(d.code==1000){
                        let instance = Toast('完成开通');
						setTimeout(() => {
						  instance.close();
						  _this.message="返回首页";
						}, 3000);
                    }else{
                    	MessageBox('提示', d.msg);
                    }
      	  		});
	      //       $.ajax({
	      //           type:'post',
	      //           url:apipath+'setautopayment',
	      //           data:{uid:14,card_id:7},
	      //           dataType:'json',
	      //           success:function(d){
	      //           	console.log(d);
	      //               if(d.code==1000){
	      //                   let instance = Toast('完成开通');
							// setTimeout(() => {
							//   instance.close();
							//   _this.message="返回首页";
							// }, 3000);
	      //               }else{
	      //               	MessageBox('提示', d.msg);
	      //               }
	      //           }
	      //       });
      	  	}
      	  }
      }
    };
</script>
 

<style lang="scss">
	.openingWithholding{
		width:100%;
		height:100%;
		padding-top:0.85rem;
		ul{
			width:100%;
			padding-top:1.7rem;
			li{
				width:100%;
				display: flex;
				justify-content: space-between;
				font-size: 1.6rem;
				color: #474747;
				padding-bottom:1.3rem;
				span:last-child{
					color:#808080;
				}
			}
		}
	}
	.openingWithholding-main,.openingWithholding-center{
		width:100%;
		padding:0 1.7rem 0.43rem;
		background: white;
		border-top: 1px solid #d3d3d3;
		border-bottom:1px solid #d3d3d3;
	}
	.openingWithholding-center{
		margin-top: 0.85rem;
	}
	.openingWithholding-title{
		width:100%;
		height:4.3rem;
		border-bottom:1px solid #d3d3d3;
		display: flex;
		align-items:center;
		img{
			width:2.6rem;
			height:2.6rem;
		}
		span{
			margin-left: 0.6rem;
			font-size: 1.2rem;
			color: #474747;
			display: inline-block;
			width:65%;
		}
	}
	.openingWithholding-nav{
		width:100%;
		padding:1.7rem 1.7rem 2.2rem;
		color: #808080;
		font-size: 1.4rem;
		a{
			color: #67789e;
		}
	}
	.openingWithholding-footer{
		width:100%;
		padding:0 1.7rem;
		a{
			display: block;
			width:100%;
			height:4.2rem;
			background:#ff585f;
			color: white;
			font-size: 1.6rem;
			border-radius:6px;
			text-align: center;
			line-height: 4.2rem;
		}
	}
</style>