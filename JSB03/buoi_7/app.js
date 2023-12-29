var a = 12
var b = 13
document.writeln("<p>", a + b, "</p>")
console.log("ABC")

if (a > b) {
    document.writeln("<p>", a, "</p>")
}
if (a < b) {
    document.writeln("<p>", b, "</p>")
}
else {
    document.writeln("<p>", "Hai số bằng nhau", "</p>")
}

document.writeln("<p>", 1 === "1", "</p>")
document.writeln("<p>", 1 == "1", "</p>")

// = : gán
// == : so sánh tương đối (không quan tâm kiểu dữ liệu)
// === : so sánh tuyệt đối (xét kiểu dữ liệu)
