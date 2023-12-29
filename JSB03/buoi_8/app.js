var a = 123
var b = 561
var c = 621
document.write(tim_max(a, b, c))

function tim_max(a, b, c) {
    let max = a
    if (max < b) {
        max = b
    }
    if (max < c) {
        max = c
    }
    return max
}
