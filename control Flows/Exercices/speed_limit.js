/* 
speed limit = 70
after every 5km increase point 1
if reached 12 points print license suspended
{  use Math.floor(5.15) it prints 5  --- know this  }
*/
function speed_test(speed) {
    const limit_speed = 70;
    const points_to_increase = 5;
    if (speed < limit_speed + points_to_increase) {
        console.log("Ok")
    }
    else {
        const points = Math.floor(((speed - limit_speed) / points_to_increase));
        if (points >= 12) {
            console.log("License suspended")
        }
        else {
            console.log("points: ", points)
        }
    }
}
speed_test(70)
speed_test(73)
speed_test(75)
speed_test(85)
speed_test(110)
speed_test(130)
speed_test(180)
speed_test(86)