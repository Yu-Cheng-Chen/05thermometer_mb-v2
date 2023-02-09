input.onButtonPressed(Button.A, function () {
    x = 0
})
let x = 0
x = 0
basic.forever(function () {
    basic.pause(300)
    if (x == 0) {
        if (input.temperature() >= 30) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            music.playTone(523, music.beat(BeatFraction.Half))
            TobbieII.rightward()
            TobbieII.forward()
            basic.pause(5000)
            TobbieII.stopwalk()
            TobbieII.stopturn()
            x = 1
        } else {
            basic.showNumber(input.temperature())
            music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
            TobbieII.stopwalk()
            TobbieII.stopturn()
        }
    }
    if (x == 1) {
        music.playTone(587, music.beat(BeatFraction.Whole))
        basic.showNumber(input.temperature())
        TobbieII.stopwalk()
        TobbieII.stopturn()
    }
})
