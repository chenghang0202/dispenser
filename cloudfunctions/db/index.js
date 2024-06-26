// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

const useCodeByRecord = require('./useCodeByRecord')
// 初始化 cloud
cloud.init({
    // API 调用都保持和云函数当前所在环境一致
    env: cloud.DYNAMIC_CURRENT_ENV
})

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 *
 * event 参数包含小程序端调用传入的 data
 *
 */
exports.main = async (event, context) => {
    console.log(event)
    console.log(context)

    // 可执行其他自定义逻辑
    // console.log 的内容可以在云开发云函数调用日志查看
    switch (event.action) {
        case 'useCodeByRecord': {
            return useCodeByRecord(event)
        }
        default: {
            return
        }
    }

}

