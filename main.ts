basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        Environment.ledBrightness(AnalogPin.P1, true)
        Environment.ledBrightness(AnalogPin.P2, false)
        Environment.ledBrightness(AnalogPin.P9, false)
    } else if (input.isGesture(Gesture.TiltLeft) || input.isGesture(Gesture.TiltRight)) {
        Environment.ledBrightness(AnalogPin.P1, false)
        Environment.ledBrightness(AnalogPin.P2, true)
        Environment.ledBrightness(AnalogPin.P9, false)
    } else {
        Environment.ledBrightness(AnalogPin.P1, false)
        Environment.ledBrightness(AnalogPin.P2, false)
        Environment.ledBrightness(AnalogPin.P9, true)
    }
})
