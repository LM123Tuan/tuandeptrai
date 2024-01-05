// Vòng lặp
var i = 1
while (i < 5) {
    console.log(i);
    i = i + 1;
}
console.log("Hello");
document.write("Hello")
for (let j = 1; j < 5; j++) {
    document.write(j)
}
// danh sách (mảng)
const arr = ["Thành", "Tuấn", "Nguyên", "Dương", "Đức"]
console.log(arr);
for (let k = 0; k < arr.length; k += 1) {
    console.log(arr[k]);
}
console.log("'Đảo ngược'")
for (let k = 4; k >= 0; k -= 1) {
    console.log(arr[k]);
}
// object (dictionary)
var nhanvo = {
    truong: "THPT LVT",
    ten: "Anh Tuan",
    lop: "11T",
    mon: "jsa",
    namhoc: "2023-2024",
}
console.log(nhanvo);
console.log(nhanvo.ten);
nhanvo.lop = "12T"
console.log(nhanvo.lop);
for (x in nhanvo) {
    console.log(x + " , " + nhanvo[x]);
}