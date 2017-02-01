<style lang="scss">
	.battery-box{width:100%; height: 100%; margin: 0 auto; padding: 0 0; background:#f4f4f4; font-family: "Microsoft YaHei",Lyh-Regular,helvetica,arial,sans-serif; overflow-y:auto; }
	.bat-header{padding-left: 20px; font-size:14px; color: #474747; line-height: 45px; }
	.bat-header span{color:#63cec6; margin-left: 14px;}
  .bat-cont{background:#fff; border-top:1px solid #e9e9e9; border-top:1px solid #dcdcdc; border-bottom:1px solid #d3d3d3; margin-bottom: 20px; font-size:16px; }
  .bat-top,.bat-up{height:75px; border-bottom: 1px solid #d3d3d3; margin-left: 20px;}
  .bat-next{height:56px;}
  .bat-top i{background:url(../../../assets/images/components/qietu-25.png) no-repeat center center; background-size: 100% 100%;
        width:36px; height:36px; border-radius: 50%; display: inline-block; margin-top: 18px;float: left;}
  .bat-top span{line-height: 72px; display:inline-block;float: left; padding-left: 14px; font-size: 16px;}   
  .bat-p-1{padding-left: 20px; display:inline-block; line-height: 56px;} 
  .bat-p-2{padding-right: 40px; display: inline-block; line-height: 56px; float: right; color:#808080;}
  .bat-posi{position: relative;}  
  .bat-ico{width:10px; height:16px; display:block; background:url(../../../assets/images/components/go_icon.png) no-repeat center center; background-size:100% 100%;  content: ""; position: absolute; top:20px; right: 20px;}
  .bat-p-3{ display:inline-block; line-height: 74px;} 
  .bat-p-4{padding-right: 40px; display: inline-block; line-height: 74px; float: right; color:#808080;}
  .bat-ico-2{width:10px; height:16px; display:block; background:url(../../../assets/images/components/go_icon.png) no-repeat center center; background-size:100% 100%;  content: ""; position: absolute; top:28px; right: 20px;}
  .bat-inpt{width:60%; height: 56px; background:#dcdcdc; display: inline-block; margin-left: 20px; overflow: hidden;}
  .inpt{width:100%; height: 100%; border: 0 none; line-height: 56px; text-indent: 10px; outline: none;}
  .bat-fl{float:left;}
  .bat-a-1{width:20px; height:20px; display:inline-block; background:url(../../../assets/images/components/qietu-26.png) no-repeat center center; background-size:100% 100%; margin-right: 20px; margin-top: 20px; float: right;}
  .bat-set{width:90%; height: 49px; text-align: center; line-height: 49px; color: #808080; font-size: 16px; display: block; background:#e1e1e1; border-radius: 6px; margin-left: 5%; margin-top: 60px;}
  .bat-popup{ height:108px; background: #fff; margin:0px 20px; position: relative; border-radius:12px; }
  .bat-popup::after{width:12px; height:12px; content: ""; display: block; position: absolute; top:-5px; right:8px; background:#fff; transform:rotate(45deg);  }
  .bat-popup h4{font-size: 14px; padding-left: 20px; padding-top: 22px; padding-bottom: 5px;}
  .bat-popup p{font-size: 14px; color: #808080; padding-left: 20px; line-height: 24px;}
  .bat-popup span{color:#00baa8;}
  .mint-msgbox-message{color:#494949 !important;}
  .bat-a-2{width:25px; height:25px; display:inline-block; background:url(../../../assets/images/components/qietu-29.png) no-repeat center center; background-size:100% 100%; margin-right: 20px; margin-top: 15px; float: right;}
  .bgcolor{background: #00b8a8; color:#fff;}
</style>
<template>
	<div class="battery-box">
		<div class="bat-header">GPS:{{city}}<span @click="mdifes">修改</span></div>
    <div class="bat-cont">
        <div class="bat-top">
            <i></i>
            <span>电费</span>
        </div>
        <div class="bat-next">
            <span class="bat-p-1">家庭</span>
            <router-link to="/family"><span class="bat-p-2 bat-posi">{{home}}<i class="bat-ico"></i></span></router-link>
        </div>
    </div>
    <div class="bat-cont">
        <div class="bat-up"> 
                <span class="bat-p-3">缴费单位</span>
                <span class="bat-p-4 bat-posi" @click="acct">{{payunitname}}<i class="bat-ico-2"></i></span>
        </div>
        <div class="bat-next">
            <span class="bat-p-1 bat-fl">户号</span>
            <p class="bat-inpt bat-fl">
                <input type="text" @focus="usfoucs" @blur='usblur' v-model="message" maxlength="10" class="inpt" placeholder="查看纸质账单或拨打98898" />
            </p>
            <a class="bat-a-1" v-show="sows" @click="hides"></a>
            <a class="bat-a-2" v-show="cahid" @click="delt"></a>
        </div>
    </div>
    <div class="bat-popup" v-show="hids">
        <h4>如何知道客户编号</h4>
        <p>1.查看当月历史纸质账单或手机短信</p>
        <p>2.拨打<span @click="phone">95598</span>通过身份信息查询</p>
    </div>
    <a class="bat-set" v-bind:class="{'bgcolor': isActive}" v-show="shows" @click="gotu">下一步</a>
	</div>
</template>
<script>
	import {LocationService} from '../../../libs/LocationService';
  import { MessageBox } from 'mint-ui';
  export default{
  		data(){
  			return{
  				city:'',
          home:'我家',
          shows:true,
          hids:false,
          isActive:false,
          cahid:false,
          sows:true,
          onOff:false,
          message:'',
          parent_id:'',
          city_id:'',
          city_name:'',
          items:'',
          num:0,
          nuber:1,
          provid:'',
          city_ids:'',
          payunitname:'',
          type:'',
          corpid:'',
          paymodeId:'',
          family_id:'',  //家庭id
          uid:'',       //  用户id
          provid:'',     //  必填  省份id
          account:'', //户号/条形码
  			};
  		},
      mounted(){
        let _this = this;
          let location =new LocationService()
               location.getLocation().then(function(json){
                _this.city = location.city;
                _this.mdify();
             });
          if(localStorage.electricity && localStorage.electricity!='undefined'){
              _this.nuber = localStorage.electricity;
           }
           _this.uid = localStorage.uid; 
          
           if(sessionStorage.family && sessionStorage.family!='undefined'){
              _this.family_id = sessionStorage.family; 
              _this.home = sessionStorage.familyName;
           }else{
              _this.myhome();  
           }
      },
  		methods:{
          hides:function(){
              let _this=this;
              if(_this.hids==true){
                 _this.shows = true;
                 _this.hids = false;
              }else{
                 _this.shows = false;
                 _this.hids = true;
              }
          },
          phone:function(){
              MessageBox({
                  title: '提示',
                  message:'确定拨打电话：95598 吗?',
                  showCancelButton: true,
                  }).then(action => {
                   window.location.href="tel:95598";
              });
          },
          usfoucs:function(){
              let _this = this;
              _this.isActive = true;
              _this.cahid = true;
              _this.sows = false;
          },
          delt:function(){
              let _this = this;
              _this.message='';
              _this.sows = true;
              _this.cahid = false;
          },
          usblur:function(){
              let _this = this;
              _this.sows = true;
              _this.cahid = false;
              _this.isActive = false;
          },
          mdify:function(){
              let _this = this;
             _this.Fetch("citysearch",{ keywords:_this.city}).fetchData().then(function(json) {
                  _this.items = json.data.items;
                  for(var i=0; i<_this.items.length; i++){
                     _this.parent_id = _this.items[i].province_id;  //省份id
                     _this.city_id = _this.items[i].city_id;    //城市id
                     _this.city_name = _this.items[i].city_name; // 城市名称
                  }
                 _this.company(_this.parent_id,_this.city_id);  //调用缴费单位函数    
             });
          },
          company:function(e,d){
              let _this = this;
              _this.Fetch('payunitname',{provid:e, cityId:d}).fetchData().then(function(json){
                      if(json.code==1000){
                          if(json.data.items.length>1){
                              _this.onOff=true;
                              _this.provid = json.data.items[_this.nuber].provid;   //省份id
                              _this.city_ids = json.data.items[_this.nuber].city_id; // 城市id
                              _this.payunitname = json.data.items[_this.nuber].payunitname; // 缴费单位名
                              _this.type = json.data.items[_this.nuber].type;  //  缴费类型ID
                              _this.corpid = json.data.items[_this.nuber].corpid;  //  缴费单位ID
                              _this.paymodeId = json.data.items[_this.nuber].paymodeId; //  缴费方式(条形码:1 户号:2)
                          }else{                            
                              _this.provid = json.data.items[_this.num].provid;   //省份id
                              _this.city_ids = json.data.items[_this.num].city_id; // 城市id
                              _this.payunitname = json.data.items[_this.num].payunitname; // 缴费单位名
                              _this.type = json.data.items[_this.num].type;  //  缴费类型ID
                              _this.corpid = json.data.items[_this.num].corpid;  //  缴费单位ID
                              _this.paymodeId = json.data.items[_this.num].paymodeId; //  缴费方式(条形码:1 户号:2)
                          }
                      }

              })                
          },
          myhome:function(){
              let _this=this;
              _this.Fetch('getinfobycardid',{uid:_this.uid}).fetchData().then(function(json){
                  sessionStorage.family =json.data.family_id;
                  _this.family_id = json.data.family_id;
                  
              })
          },
          acct:function(){
                let _this = this;
                if(_this.onOff == true){
                    _this.$router.push({name:'units',params:{nuber:_this.nuber}})
                }
          },
          gotu:function(){
            let _this=this;
            var regu = /^[0-9]*$/; 
              if(_this.message==''){
                  MessageBox({
                    title: '提示',
                    message:'请输入户号',
                    showCancelButton: true,
                    })
              }else if(_this.message.length<10){
                  MessageBox({
                    title: '提示',
                    message:'输入户号有误',
                    showCancelButton: true,
                    })
              }else if(!regu.test(_this.message)){
                     MessageBox({
                    title: '提示',
                    message:'输入户号有误',
                    showCancelButton: true,
                    })
              }else{
                  _this.Fetch('addcard',{
                        family_id: _this.family_id,  //家庭id--------------------------------------
                        uid:_this.uid,       //  用户id-----------------------------------------------
                        provid:_this.provid,     //  必填  省份id
                        cityId:_this.city_ids,  //  必填  城市id
                        type:_this.type, //缴费类型ID
                        corpid:_this.corpid,  //缴费单位ID
                        account:_this.message, //户号/条形码
                        paymodeId:_this.paymodeId    // 缴费方式编号(条形码:1, 户号:2)
                  }).fetchData().then(function(d){
                       if(d.code==1000){
                           if(d.prePaidflag == 1){
                               _this.$router.push({name:'pays',params: { 
                                  userId: _this.uid,  //用户id
                                  account:_this.message,
                                  payunitname:_this.payunitname,  //缴费单位
                                  pageshow:0
                                  }}); //预付费
                           }else{
                              _this.$router.push({name:'pays',params:{
                                   userId: _this.uid,  //用户id
                                   account:_this.message,
                                   payunitname:_this.payunitname,  //缴费单位
                                   pageshow:1
                              }});  //后付费
                           }
                          
                       }else{
                          _this.$router.push({name:'billerror', params:{ citys:_this.city,msg:d.msg}})
                       }
                  })
              }
          },
          mdifes:function(){
              let _this=this;
              _this.$router.push({name:'city'});
          }
  		},
  		computed:{

  		},

  }
</script>