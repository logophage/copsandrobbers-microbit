input.onButtonPressed(Button.A, function () {
    robber = robber + 1
    if (robber >= strip.length() + 2) {
        score = score + 1
        robber = 2
    }
})
let robber = 0
let score = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
strip.setBrightness(100)
strip.clear()
strip.show()
let ticker = 0
score = 0
let police = 5
robber = 14
let tickspermove = 10
let speedup = 1
basic.forever(function () {
    strip.setPixelColor((police - 2) % strip.length(), neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor((robber - 2) % strip.length(), neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor((robber - 1) % strip.length(), neopixel.colors(NeoPixelColors.Purple))
    if (Math.round(ticker / 5) % 2 == 0) {
        strip.setPixelColor((police - 1) % strip.length(), neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor((police - 0) % strip.length(), neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip.setPixelColor((police - 1) % strip.length(), neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor((police - 0) % strip.length(), neopixel.colors(NeoPixelColors.Red))
    }
    strip.setPixelColor(robber % strip.length(), neopixel.colors(NeoPixelColors.Red))
    strip.show()
    if (police == robber) {
        basic.showString("Game Over: ")
        basic.showString("" + (score))
        basic.pause(2000)
        control.reset()
    }
    ticker = ticker + 1
    if (ticker == tickspermove) {
        police = police + 1
        if (police >= strip.length() + 2) {
            police = 2
        }
        ticker = 0
    }
})
