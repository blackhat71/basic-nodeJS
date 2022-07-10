const { PerformanceNodeTiming } = require("perf_hooks")

const connect = false
let url1 = "www.google.co.th"

function downloading(url) {
    return new Promise(function (resolve, reject){
        if(connect){
            resolve(`โหลด  ${url} เรียบร้อย`)
        }else{
            reject(`เกิดข้อผิดพลาด`)
        }
    })
}

downloading(url1).then(result => {
    console.log(result);
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log("End of work")
})