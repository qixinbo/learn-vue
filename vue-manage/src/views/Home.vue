<template>
    <el-row class='home' :gutter='20'>
        <el-col :span="8" style="margin-top: 20px;">
            <el-card shadow="hover">
                <div class="user">
                    <img class="user" :src="userImg"/>
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间：<span>2022</span></p>
                    <p>上次登录地点：<span>北京</span></p>
                </div>
            </el-card>
            <el-card style="margin-top: 20px; height: 460px;">
                <el-table :data="tableData">
                    <el-table-column v-for="(value, key) in tableLabel" :key="key" :prop="key" :label="value">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col style="margin-top: 20px;" :span="16">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{display:flex, padding:0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
                    <div class="detail">
                        <p class="num">¥{{item.value}}</p>
                        <p class="txt">{{item.name}}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 280px;">
                <div style="height: 280px" ref="echarts"></div>
            </el-card>
            <div class="graph">
                <el-card style="height: 260px"></el-card>
                <el-card style="height: 260px"></el-card>
            </div>
        </el-col>
    </el-row>   
</template>

<script>
import {getData} from '../../api/data.js'
import * as echarts from 'echarts'

export default{
    name: 'home',
    data () {
        return {
            userImg: require('../assets/visLCA.png'),
            tableData:[],
            tableLabel:{
                name: '课堂',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买'
            },
            countData:[
            {
                name: "今日支付订单",
                value: 1234,
                icon: "success",
                color: "#2ec7c9"
            },
            {
                name: "今日支付订单",
                value: 1234,
                icon: "success",
                color: "#2ec7c9"
            },
            {
                name: "今日支付订单",
                value: 1234,
                icon: "success",
                color: "#2ec7c9"
            }           
            ]
        }
    },
    mounted(){
        getData().then(res=>{
            const {code, data} = res.data 
            if (code === 20000){
                this.tableData = data.tableData
                const order = data.orderData
                const xData = order.date
                const keyArray = Object.keys(order.data[0])
                const series = []
                keyArray.forEach(key=>{
                    series.push({
                        name: key,
                        data: order.data.map(item=>item[key]),
                        type: 'line'
                    })
                })
                const option = {
                    xAxis:{
                        data: xData
                    },
                    yAxis:{},
                    legend:{
                        data: keyArray
                    },
                    series
                }
                const E = echarts.init(this.$refs.echarts)
                E.setOption(option)
            }
            console.log(res)
        })
    }
}
</script>
