/*
Link: https://www.codewars.com/kata/59752e1f064d1261cb0000ec/train/javascript/62096826f7693300308b4b84
Kata: Clocky Mc Clock-Face, 6 kyu

Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.

Examples
12:00 = 0 degrees
03:00 = 90 degrees
06:00 = 180 degrees
09:00 = 270 degrees
12:00 = 360 degrees

Notes
0 <= angle <= 360

Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.

3 o'clock is 03:00, not 15:00
7 minutes past midnight is 12:07
7 minutes past noon is also 12:07
 */

const whatTimeIsIt = (angle) => {

    let mins = angle*2;
    let h = Math.floor(mins / 60);
    let m = Math.floor(mins % 60);
    if (h===0) {h = "12"}
    if (h<10) {h = "0"+h}
    if (m<10) {m = "0"+m}
    return h + ":" + m;
}

whatTimeIsIt(90);//"03:00"