// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';
import './assets/icon/iconfont.css';
import Mock from './mock';
import BaiduMap from 'vue-baidu-map';
Mock.bootstrap();


Vue.use(ElementUI);
Vue.use(BaiduMap,{ak: 'apVgGeyuozEHouxjbG0jMATum0QuUQpE'});
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//   [class^="el-icon-third"],
//   [class*=" el-icon-third"]/*这里有空格*/
// {
//   font-family: "iconfont" !important;
//   font-size: 16px;
//   font-style: normal;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }
