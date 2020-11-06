input.on_button_pressed(Button.A, Start_game)
input.on_button_pressed(Button.B, End_game)
input.on_button_pressed(Button.AB, Nastaveni)


start = 0
Interval_test = 17000
Setup_mode = 0

basic.show_string("Ready")

def Start_game():
    global start
    start = input.running_time()
    processing = 1
    basic.show_number(Math.round(Interval_test/1000))
    
    

def End_game():
    global Interval_test
    
    if start > 0:
        elapsed = input.running_time() - start
        score = abs(elapsed - Interval_test)/Interval_test
        if score > 1:
            score = 1
        Higlight_X_dots(Math.round_with_precision(score*25, 0))
    else:
         basic.show_icon(IconNames.NO)   

def Higlight_X_dots(Number_of_Dots):
    Line_num = 0
    Row_num = 0
    
    basic.clear_screen()

    if Number_of_Dots > 25:
        Number_of_Dots = 25

    if Number_of_Dots == 0:
        basic.show_icon(IconNames.YES)

    for i in range(Number_of_Dots):
        led.plot(Line_num, Row_num)
        Line_num = Line_num + 1
        #Row_num = Row_num + 1
        if Line_num > 4:
            Line_num = 0
            Row_num = Row_num + 1
    


def Increase_time():
    global Interval_test

    Interval_test = Interval_test + 1000
    if Interval_test > 25000:
        Interval_test = 25000
    Higlight_X_dots(Interval_test/1000)


def Decrease_time():
    global Interval_test

    Interval_test = Interval_test - 1000
    if Interval_test < 1000:
        Interval_test = 1000
    Higlight_X_dots(Interval_test/1000)


def Nastaveni():
    global Setup_mode
    global start

    start = 0

    if Setup_mode == 0:
        input.on_button_pressed(Button.B, Increase_time)
        input.on_button_pressed(Button.A, Decrease_time)
        Higlight_X_dots(Interval_test/1000)
        Setup_mode = 1
    else:
        input.on_button_pressed(Button.A, Start_game)
        input.on_button_pressed(Button.B, End_game)
        basic.clear_screen()
        Setup_mode = 0
    
    