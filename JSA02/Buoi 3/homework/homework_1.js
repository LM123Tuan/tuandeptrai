var n = 9
var k = 0
for (let i = 1; i <= 5; i++) {
    let t = (n - i - k) / 2
    let l = Math.floor(t)
    document.writeln((l * " ") + ((i + k) * "1") + (l * " "))
    k += 1
}