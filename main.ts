function 原地右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    -150
    )
}
function 原地左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    150
    )
}
function 右转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    200,
    makerobo.Motors.Right,
    0
    )
}
function 左转 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    200
    )
}
function 后退 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    -150,
    makerobo.Motors.Right,
    -150
    )
}
function 前进 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    150,
    makerobo.Motors.Right,
    150
    )
}
function 停止 () {
    makerobo.MotorRunDual(
    makerobo.Motors.Left,
    0,
    makerobo.Motors.Right,
    0
    )
}
let D3 = 0
let D2 = 0
let D1 = 0
let speed = 200
makerobo.Servo(makerobo.Servos.S1, 90)
停止()
basic.showIcon(IconNames.Happy)
while (!(input.buttonIsPressed(Button.A))) {
    停止()
    TM1650.showNumber(0)
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    停止()
    basic.pause(600)
    makerobo.Servo(makerobo.Servos.S1, 150)
    basic.pause(600)
    D1 = makerobo.ping(DigitalPin.P0, makerobo.PingUnit.Centimeters)
    while (D1 == 0) {
        D1 = makerobo.ping(DigitalPin.P0, makerobo.PingUnit.Centimeters)
    }
    TM1650.showNumber(D1)
    makerobo.Servo(makerobo.Servos.S1, 90)
    basic.pause(600)
    D2 = makerobo.ping(DigitalPin.P0, makerobo.PingUnit.Centimeters)
    while (D2 == 0) {
        D2 = makerobo.ping(DigitalPin.P0, makerobo.PingUnit.Centimeters)
    }
    TM1650.showNumber(D2)
    makerobo.Servo(makerobo.Servos.S1, 30)
    basic.pause(600)
    D3 = makerobo.ping(DigitalPin.P0, makerobo.PingUnit.Centimeters)
    while (D3 == 0) {
        D3 = makerobo.ping(DigitalPin.P0, makerobo.PingUnit.Centimeters)
    }
    TM1650.showNumber(D3)
    makerobo.Servo(makerobo.Servos.S1, 90)
    basic.pause(600)
    if (D1 < 20 && D3 - D1 > 0) {
        speed = speed - 100
        右转()
        speed = 200
    } else if (D3 < 20 && D1 - D3 > 0) {
        speed = speed - 100
        左转()
        speed = 200
    } else if (D2 < 15) {
        后退()
        basic.pause(500)
        if (D3 - D1 > 0) {
            speed = speed - 100
            右转()
            speed = 200
        } else {
            speed = speed - 100
            左转()
            speed = 200
        }
    } else {
        前进()
    }
    basic.pause(500)
})
