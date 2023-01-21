input.onButtonPressed(Button.A, function () {
    zwaaien = false
    basic.showLeds(`
        # . . . .
        # # . . .
        # # . . .
        # # . . .
        # . . . .
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        . # # . .
        . . # # .
        . . # # .
        . . # # .
        . # # . .
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . #
        . . . . #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    zwaaien = false
    while (true) {
        basic.showLeds(`
            . # . . .
            . . . . #
            . . . . .
            # # . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . # .
            . # . . .
            . . . . #
            # # . . #
            # # # # #
            `)
        basic.showLeds(`
            # . . . .
            . . . # .
            . # . . .
            # # . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . # .
            # # . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            # . . . .
            # # . # #
            # # # # #
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    zwaaien = false
    while (true) {
        aftellen = 45
        while (aftellen > 9) {
            led.plotBarGraph(
            aftellen,
            45
            )
            aftellen += -1
            basic.pause(1000)
        }
        while (aftellen > 0) {
            basic.showNumber(aftellen, 0)
aftellen += -1
            basic.pause(1000)
        }
        basic.showArrow(ArrowNames.East)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.InBackground)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    zwaaien = false
    basic.showLeds(`
        . . . . #
        . . . # #
        . . . # #
        . . . # #
        . . . . #
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        . . # # .
        . # # . .
        . # # . .
        . # # . .
        . . # # .
        `)
    basic.showLeds(`
        # # . . .
        # . . . .
        # . . . .
        # . . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let aftellen = 0
let zwaaien = false
zwaaien = true
while (zwaaien) {
    basic.showLeds(`
        . . # # .
        . # # # .
        . # # # #
        . # # # #
        . . # # .
        `)
    if (zwaaien) {
        basic.showLeds(`
            . # # . .
            # # # . .
            # # # # .
            # # # # .
            . # # . .
            `)
    }
}
