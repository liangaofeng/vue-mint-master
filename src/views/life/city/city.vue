<template>
 <div class="body city">
 <mt-index-list>
   <div class="page-search">
         <mt-search autofocus v-model="value" cancel-text="取消" placeholder="搜索城市">
              <mt-cell
                v-for="item in filterResult"  :title="item.city_name" @click.native="changeCity(item)" >
              </mt-cell>
         </mt-search>
  </div>
<div class="mt53"></div>
<mt-index-section index="当前">
      <div class="hot">
        <div class="box">
            <div class="col">
              {{city||'定位中...'}}
            </div>
        </div>
      </div>
     </mt-index-section>
     <mt-index-section index="热门">
     <div class="hot">
        <div class="box">
          <div class="col" v-for="city in citysHotList" @click="changeCity(city)">
           {{city.city_name}}
          </div>
        </div>
      </div>
     </mt-index-section>
      <mt-index-section  v-for="(citys, index) in citysList" v-bind:index="citys.title">
         <mt-cell v-for="city in citys.item"  v-bind:title="city.city_name" @click.native="changeCity(city)"></mt-cell>
      </mt-index-section>
 </mt-index-list>
  </div>
</template>
 <script>
 
import {LocationService} from '../../../libs/LocationService';

    export default {
        data() {
            return {   
              value:'',     
              defaultResult: [],
              citysList:[],
              citysHotList:[],
              city:'',
              location:new LocationService()
            };
          },

        beforeRouteEnter(to, from, next) {
            console.log(to);
            next();
        },
        computed: {
          filterResult() {
            return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value.city_name));
          }
        },
        mounted() { 
             let that =this;
             that.location.getLocation().then(function(json){
                that.city = that.location.getCity();
                 console.log(json);
             },function(json){
                 console.log(json);
             });
              this.Fetch("getprovincecity",{type:2}).fetchData().then(function  (json) {
              that.citysHotList = json.data.HotItems;
              that.citysList = json.data.items;
              that.citysList.forEach(function(_list){
                  _list.item.forEach(function(_citys){
                    that.defaultResult.push(_citys);
                  })
              }) 
           }); 
        },
         methods: {
            changeCity(city) {
              this.city =city.city_name;
              this.location.setCity(city.city_name,city.city_id,city.province_id);
             this.$router.go(-1);
            }
        }
    }
</script>


  <style  lang="scss">
  .city  {
  .mint-indexsection-index{
  position:relative;
  }
  .mint-indexlist-content{
  margin-right: 0px!important;
  }
  .mint-indexlist-nav{
  background-color: rgba(255, 255, 255, 0);
  border-left: solid 0px #ddd;
  }
  .mint-indexlist-navitem{
  color:#00b8a8;
  font-size: 11px;
  padding: 2px 6px;
  }
  .page-search{

  position: absolute;
  width: 100%;
  }
  .mt53{
  margin-top: 44px;
  }
  .mint-searchbar{
  z-index: 9;
  }
  .mint-search-list{
  height: 100%;

  z-index: 2;
  }
  .mint-search-list-warp{
  height:100%;
  background-color: rgba(0, 0, 0, 0.7);
  }
  .hot{
  position: relative;
  display: block;
  background-color: #fafafa;
  padding-left: 10px;
  .box{
  display: flex;
  font-size: 12px;
  color:#808080;
  justify-content:space-between;
  flex-wrap: wrap;
  padding-right: 36px;
  p{
  margin:0px 15px;
  }
  .col{

  height:35px;
  width:100px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #d3d3d3 ;
  line-height: 35px;
  border-radius: 1px;
  text-align: center;
  }
  }
  }
  }

  </style>



