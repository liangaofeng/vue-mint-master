/*5046*/
import {Fetch} from './fetchData';

'use strict';
class LocationService {
    constructor(_city,_cityId,_provinceId) {
        this.position = {
            latitude: '',
            longitude: ''
        }
        this.locationcity = '';
        this.city = _city||sessionStorage.city;
        this.cityId = _cityId||sessionStorage.cityId;
        this.provinceId = _provinceId||sessionStorage.provinceId;   
    };
    renderMap() {
        return new Promise((resolve, reject) =>{
            if (!$("#bmap").length) {
                let script = document.createElement("script");
                script.id = "bmap";
                script.type = "text/javascript";
                script.src = "https://api.map.baidu.com/api?v=2.0&ak=x1QOjfQRIAgkVLk556CruG7V&s=1&callback=initMap";
                document.body.appendChild(script);

            }
            window.initMap = () =>resolve();
        })
    };
    getAutoLocation() {
        let _this = this;
        return new Promise((resolve, reject) =>{
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function(pos) {
                    let _city = pos.address.city.replace('市', '');
                    _this.position.latitude = pos.latitude;
                    _this.position.longitude = pos.longitude;
                    _this.locationcity = _city;
                    _this.city = _city;
                    sessionStorage.city = _city;
                    sessionStorage.localcity = _city;
                    resolve(_this)
                },
                {
                    enableHighAccuracy: true
                });
        })
    };

    setCity(_city,_cityId,_provinceId) {
        sessionStorage.city = _city;
        sessionStorage.cityId = _cityId;
        sessionStorage.provinceId = _provinceId;
        this.city = _city;
        this.cityId = _cityId;
        this.provinceId = _provinceId;
    };
    getLocation() {
   
       let _this = this;
       return new Promise((resolve, reject) =>{
  
        if (sessionStorage.city && sessionStorage.localcity&&sessionStorage.cityId) {
                _this.localcity = sessionStorage.localcity;
                _this.city = sessionStorage.city;
                _this.cityId = sessionStorage.cityId;
                _this.provinceId = sessionStorage.provinceId;
                resolve(_this);
                console.log('sessionStorage获取城市 localcity: ' +_this.localcity  +'  city:'+ _this.city + '  cityId:'+ _this.cityId);
            }else{

              this.renderMap().then(()=>{
                    this.getAutoLocation().then((pos)=>{
                            new Fetch("getcityidbyname",{cityName:pos.city}).fetchData().then(function(json) {
                                if(json.code==1000){
                                    let d = json.data;
                                    sessionStorage.city = d.city_name;
                                    sessionStorage.cityId = d.city_id;
                                    sessionStorage.provinceId = d.province_id;
                                    _this.city = sessionStorage.city;
                                    _this.provinceId = sessionStorage.provinceId;
                                    _this.cityId = sessionStorage.cityId;
                                     _this.localcity = sessionStorage.localcity;
                                    if(d.city_id){
                                          resolve(_this)
                                      }else{
                                          resolve('找不到该城市')
                                      }
                                     console.log('服务器获取城市 localcity: ' +_this.localcity  +'  city:'+ _this.city + '  cityId:'+ _this.cityId);
                                } else{
                                    resolve('找不到该城市')
                                }
                            });
                        })        
                    })  
            }
    })
    };
    getCity() {
        return this.city;
    };
    getCityId() {
        return this.cityId;
    };
    getProvinceId() {
        return this.provinceId;
    };
    getLocationCity() {
        return this.locationcity;
    };
    getPos() {
        return this.position;
    };

}

module.exports = {
    LocationService: LocationService
}