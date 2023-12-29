var x = 1234.12
if (x > 0 && x % 1 != 0) {
    document.write("x là số thập phân dương")
}
else if (x > 0) {
    document.write("x là số nguyên dương")
}
else if (x < 0) {
    document.write("x là số âm")
}
else if (x === 0) {
    document.write("x=0")
}