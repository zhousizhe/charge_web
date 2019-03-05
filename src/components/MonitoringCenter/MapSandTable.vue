<template>
    <div id="map">
    <baidu-map class="BaiduMap"
    center="上海"
    :zoom="15"
    :scroll-wheel-zoom="true"
    :map-style="{styleJson:styleJson}"
    map-type="BMAP_NORMAL_MAP">
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
    </baidu-map>
    </div>
</template>

<!--:center="{lng:108.927154,lat:34.229157}"-->
<script>
    export default {
        name: "MapSandTable",
      data(){
          return{
            styleJson: [
             /* {
                "featureType":"all",
                "elementType":"geometry",
                "stylers":{
                  "hue":"#20a0ff",
                  "saturation":89
                }
              },*/
              {
                "featureType":"water",
                "elementType":"all",
                "stylers":{
                  "color":"#ffffff"
                }
              }
            ]
          }
      }
    }
</script>

<style scoped>
  .chart-container {
    width: 100%;
    float: left;
  }
  .BaiduMap{
    height: 600px;
    width: 100%;
  }
</style>
