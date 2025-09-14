input.onPinPressed(TouchPin.P1, function () {
    if (pins.analogReadPin(AnalogPin.P0) > 100) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
