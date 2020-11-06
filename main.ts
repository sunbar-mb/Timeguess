input.onButtonPressed(Button.A, Start_game)
input.onButtonPressed(Button.B, End_game)
input.onButtonPressed(Button.AB, function Nastaveni() {
    
    
    start = 0
    if (Setup_mode == 0) {
        input.onButtonPressed(Button.B, function Increase_time() {
            
            Interval_test = Interval_test + 1000
            if (Interval_test > 25000) {
                Interval_test = 25000
            }
            
            Higlight_X_dots(Interval_test / 1000)
        })
        input.onButtonPressed(Button.A, function Decrease_time() {
            
            Interval_test = Interval_test - 1000
            if (Interval_test < 1000) {
                Interval_test = 1000
            }
            
            Higlight_X_dots(Interval_test / 1000)
        })
        Higlight_X_dots(Interval_test / 1000)
        Setup_mode = 1
    } else {
        input.onButtonPressed(Button.A, Start_game)
        input.onButtonPressed(Button.B, End_game)
        basic.clearScreen()
        Setup_mode = 0
    }
    
})
let start = 0
let Interval_test = 17000
let Setup_mode = 0
basic.showString("Ready")
function Start_game() {
    
    start = input.runningTime()
    let processing = 1
    basic.showNumber(Math.round(Interval_test / 1000))
}

function End_game() {
    let elapsed: number;
    let score: number;
    
    if (start > 0) {
        elapsed = input.runningTime() - start
        score = Math.abs(elapsed - Interval_test) / Interval_test
        if (score > 1) {
            score = 1
        }
        
        Higlight_X_dots(Math.roundWithPrecision(score * 25, 0))
    } else {
        basic.showIcon(IconNames.No)
    }
    
}

function Higlight_X_dots(Number_of_Dots: number) {
    let Line_num = 0
    let Row_num = 0
    basic.clearScreen()
    if (Number_of_Dots > 25) {
        Number_of_Dots = 25
    }
    
    if (Number_of_Dots == 0) {
        basic.showIcon(IconNames.Yes)
    }
    
    for (let i = 0; i < Number_of_Dots; i++) {
        led.plot(Line_num, Row_num)
        Line_num = Line_num + 1
        // Row_num = Row_num + 1
        if (Line_num > 4) {
            Line_num = 0
            Row_num = Row_num + 1
        }
        
    }
}

