import Mock from 'mockjs'

let List = []
export default{
    getStatisticalData:()=>{
        for (let i =0; i<2; i++){
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                }))
        }
        return {
            code: 20000,
            data: {
                videoData: [
                {
                    name: "苹果",
                    value: 5999
                },
                {
                    name: "vivo",
                    value: 1500
                }
                ],
                userData: [
                {
                    date: '周一',
                    new: 5,
                    active: 200
                },
                {
                    date: '周二',
                    new: 10,
                    active: 500
                }
                ],
                orderData:{
                    date: ['20220223', '20220323'],
                    data: List
                },
                tableData:[
                    {
                        name: 'oppo',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: 'vivo',
                        todayBuy: 100,
                        monthBuy: 400,
                        totalBuy: 800
                    },
                    {
                        name: '苹果',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    }
                ]
            }
        }
    }
}