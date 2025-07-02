input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.showArrow(ArrowNames.East)
    basic.pause(1000)
    basic.showIcon(IconNames.No)
    basic.pause(1000)
    basic.showIcon(IconNames.Yes)
})
basic.showIcon(IconNames.Yes)
