import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/AppComponents/Home'
import echarts from '@/components/charts/echarts'
import APPUsers from '@/components/ManageUsers/APPUsers'
import MapSandTable from '@/components/MonitoringCenter/MapSandTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: '首页',
      leaf: true,//只有一个节点
      iconCls: 'el-icon-third-shouye',//图标样式class
      children:[
        { path: '/page1', component: null, name: '首页' },
      ]
    },
    {
      path: '/',
      component: Home,
      name: '监控中心',
      iconCls: 'el-icon-third-shebeiguanli',//图标样式class
      children:[
        { path: '/mapSandTable', component: MapSandTable, name: '地图沙盘' },
        { path: '/page3', component: null, name: '运营沙盘' },
        { path: '/page4', component: null, name: '站点监控' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '交易中心',
      iconCls: 'el-icon-third-shop-car',//图标样式class
      children: [
        { path: '/page8', component: null, name: '订单管理' },
        { path: '/page9', component: null, name: '评价管理' },
        { path: '/page10', component: null, name: '充电币交易' },
        { path: '/page11', component: null, name: '分润支付' },
        { path: '/page12', component: null, name: '对账记录' },
      ]
    },
    {
      path: '/',
      component: Home,
      name: '充点卡管理',
      leaf: true,//只有一个节点
      iconCls: 'el-icon-third-zhanghaoquanxianguanli',//图标样式class
      children: [
        { path: '/page13', component: null, name: '充点卡管理' },
      ]
    },
    {
      path: '/',
      component: Home,
      name: '用户管理',
      iconCls: 'el-icon-third-icon_zhanghao',//图标样式class
      children: [
        { path: '/APPUsers', component: APPUsers, name: 'APP用户' },
        { path: '/page14', component: null, name: '用户类型' },
        { path: '/page15', component: null, name: '运营商' },
      ]
    },
    {
      path: '/',
      component: Home,
      name: '互动平台',
      iconCls: 'el-icon-third-yunyingguanli',//图标样式class
      children: [
        { path: '/page16', component: null, name: '话题管理' },
        { path: '/page17', component: null, name: '我的话题' },
        { path: '/page18', component: null, name: '咨询管理' },
        { path: '/page19', component: null, name: 'APP反馈' },
      ]
    },
    {
      path: '/',
      component: Home,
      name: '数据分析',
      iconCls: 'el-icon-third-chucun',//图标样式class
      children: [
        { path: '/page20', component: null, name: '充电桩数据分析' },
        { path: '/page21', component: null, name: '桩群数据分析' },
        { path: '/page22', component: null, name: '用户数据分析' },
      ]
    },
    {
      path: '/',
      component: Home,
      name: '消息通知',
      iconCls: 'el-icon-third-xiaoxitongzhi',//图标样式class
      children: [
        { path: '/page23', component: null, name: '系统通知' },
      ]
    },
    {
      path: '/',
      component: Home,
      name: '系统成员管理',
      iconCls: 'el-icon-third-quanxianshenpi',//图标样式class
      children: [
        { path: '/page24', component: null, name: '成员列表' },
        { path: '/page25', component: null, name: '角色列表' },
        { path: '/page26', component: null, name: '操作日志列表' },
      ]
    },
    {
      path: '/',
      component: Home,
      name: 'Charts',
      iconCls: 'el-icon-home',
      children: [
        { path: '/echarts', component: echarts, name: 'echarts' }
      ]
    },
  ]
})
