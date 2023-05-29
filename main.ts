radio.onReceivedNumber(function (receivedNumber) {
    ESTAT_ALARMA = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
let ESTAT_ALARMA = 0
radio.setGroup(15)
basic.forever(function () {
    if (ESTAT_ALARMA == 0) {
        basic.showIcon(IconNames.Yes)
    } else if (ESTAT_ALARMA == 1) {
        basic.showIcon(IconNames.No)
    }
})
