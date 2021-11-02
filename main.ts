input.onButtonPressed(Button.A, function () {
    radio.sendValue(control.deviceName(), 番号)
})
radio.onReceivedValue(function (name, value) {
    if (name == control.deviceName()) {
        if (value == 0) {
            basic.showIcon(IconNames.Heart)
        } else if (value == 1) {
            basic.showArrow(ArrowNames.South)
        } else {
            basic.showArrow(ArrowNames.North)
        }
    }
})
let 番号 = 0
radio.setGroup(1)
番号 = 0
