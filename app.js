
const now = new Date()
const discountDate = now.getDate()
const discountDeadline = new Date (`Mar ${discountDate}, 2020 23:59:59`)
const hoursContainer = document.getElementById('sales-countdown-hours')
const minsContainer = document.getElementById('sales-countdown-mins')
const secsContainer = document.getElementById('sales-countdown-secs')
let discountSecs = Math.floor(discountDeadline.getSeconds() - now.getSeconds())
let discountMins = Math.floor(discountDeadline.getMinutes() - now.getMinutes())
let discountHours = Math.floor(discountDeadline.getHours() - now.getHours())
minsContainer.innerHTML= discountMins
secsContainer.innerHTML= discountSecs
hoursContainer.innerHTML = discountHours


setInterval(function(){
    const now = new Date()
    discountSecs = Math.floor(discountDeadline.getSeconds() - now.getSeconds())
    secsContainer.innerHTML= discountSecs
    discountMins = Math.floor(discountDeadline.getMinutes() - now.getMinutes())
    minsContainer.innerHTML= discountMins
    discountHours = Math.floor(discountDeadline.getHours() - now.getHours())
    hoursContainer.innerHTML = discountHours
    }, 1000)



///////////////////////// HOLIDAY COUNTDOWN ///////////////////
const EasterDate = new Date ("Apr 25, 2020").getTime()
const countdownTimeEaster = EasterDate - now.getTime()
const EasterCountDownDay = Math.floor(countdownTimeEaster / (1000 * 60 * 60 * 24))
document.getElementById('easter-day').innerHTML = EasterCountDownDay


const XMASDate = new Date ("Dec 24, 2020")
let XMASCountDownDay = XMASDate.getDate() - now.getDate()
if (XMASCountDownDay<1){
    XMASCountDownDay = XMASCountDownDay+30
}
document.getElementById('xmas-day').innerHTML = XMASCountDownDay
const XMASCountDownMonth = XMASDate.getMonth()-now.getMonth()
document.getElementById('xmas-month').innerHTML = XMASCountDownMonth -1




