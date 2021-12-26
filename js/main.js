//Khởi Tạo Gía Trị
var numArray = [];
document.getElementById("btnThemSo").onclick = function () {
    var num = Number(document.getElementById("inpSoN").value);
    numArray.push(num);
    document.getElementById("txtThemSo").innerHTML = numArray;
}

                   //Bài Tập 1 Tính Tổng 
document.getElementById("btnTinhTong").onclick = function () {
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (Number(numArray[i]) > 0) {
            sum += Number(numArray[i]);
        }
    }
    document.getElementById("txtTinhTong").innerHTML = "Tổng số dương: " + sum;
}

                    //Bài Tập 2 Đếm Số Dương  
document.getElementById("btnDemSoDuong").onclick = function () {
    var soDem = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (Number(numArray[i]) > 0) {
            soDem++
        };
    }
    document.getElementById("txtDemSoDuong").innerHTML = "Tổng các số dương: " + soDem;
}

                    /**Bài-3: Tìm số nhỏ nhất */
document.getElementById("btnTimSoMin").onclick = function () {
    var soMin = numArray[0];
    for (var i = 0; i < numArray.length; i++) {
        if (soMin > Number(numArray[i])) {
            soMin = numArray[i]
        };
    }
    document.getElementById("txtTimSoMin").innerHTML = "Số nhỏ nhất: " + soMin;
}

                     /**Bài-4: Tìm số dương nhỏ nhất */
document.getElementById("btnTimSoDuongMin").onclick = function () {
    var soDuong = [];
    //Tìm các số dương và đưa vào mảng
    for (var i = 0; i < numArray.length; i++) {
        if (Number(numArray[i]) > 0) {
            soDuong.push(numArray[i])
        };
    }
    console.log(soDuong);
    //Tìm số dương nhỏ nhất
    var soMin = soDuong[0];
    for (var i = 0; i < soDuong.length; i++) {
        if (soMin > Number(soDuong[i])) {
            soMin = soDuong[i];
        };
    }
    document.getElementById("txtTimSoDuongMin").innerHTML = "Số dương nhỏ nhất: " + soMin;
}

                           /**Bài-5: Tìm số chẵn cuối cùng */
document.getElementById("btnTimSoChan").onclick = function () {
    var soLast = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (Number(numArray[i]) % 2 == 0) {
            soLast = numArray[i];
        };
    }
    document.getElementById("txtTimSoChan").innerHTML = "Số chẵn cuối cùng: " + soLast;
}

                      /**Bài-6: Đổi chỗ */
document.getElementById("btnDoiCho").onclick = function () {
    var newNumArray = [];
    for (var i = 0; i < numArray.length; i++) {
        newNumArray.push(numArray[i]);
    }
    var temp = 0;
    var viTri1 = Number(document.getElementById("inpViTri1").value);
    var viTri2 = Number(document.getElementById("inpViTri2").value);
    temp = newNumArray[viTri1];
    newNumArray[viTri1] = newNumArray[viTri2];
    newNumArray[viTri2] = temp;
    document.getElementById("txtDoiCho").innerHTML = "Vị trí các số sau khi đổi chỗ: " + newNumArray;
}

                         //Bài Tập 7 Sắp Xếp Theo Thứ Tự Tăng Dần 
document.getElementById("btnSXTang").onclick = function () {
    // Tạo mảng mới 
    var newNumArray = [];
    for (var i = 0; i < numArray.length; i++) {
        newNumArray.push(numArray[i]);
    }
    for (var i = 0; i < newNumArray.length; i++) {

        for (var j = 0; j < newNumArray.length - 1; j++) {
            if (Number(newNumArray[j]) > Number(newNumArray[j + 1])) {
                var temp = newNumArray[j];
                newNumArray[j] = newNumArray[j + 1];
                newNumArray[j + 1] = temp;
            }
        }
    }
    document.getElementById("txtSXTang").innerHTML = "Sắp xếp tăng dần: " + newNumArray;
}

                   //Bài Tập 8 Tìm Số Nguyên Tố
document.getElementById("btnTimSoNto").onclick = function () {
    var count = 0;
    var numFirst = 0;
    for (var i = 0; i < numArray.length; i++) {

        if (Number(numArray[i]) >= 2) {
            for (var j = 2; j <= Math.sqrt(Number(numArray[i])); j++) {
                if (Number(numArray[i]) % j == 0) {
                    count++;
                }
            }
            if (count == 0) {
                numFirst = numArray[i];
                break;
            }
            count = 0;
        }
    }
    document.getElementById("txtTimSoNto").innerHTML = "Số nguyên tố đầu tiên: " + numFirst;
}

                  //Bài Tập 9 Đếm Số Nguyên
document.getElementById("btnDemSoNg").onclick = function () {
    var count = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (Number.isInteger(numArray[i]) == true) {
            count++;
        }
    }
    document.getElementById("txtDemSoNg").innerHTML = "Số nguyên: " + count;
}

                    //Bài Tập 1 So Sánh số Nguyên Âmm và dương
document.getElementById("btnSoSanh").onclick = function () {
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuong++;
        }
        if (numArray[i] < 0) {
            soAm++;
        }
    }
    if (soDuong > soAm) {
        document.getElementById("txtSoSanh").innerHTML = "Số dương:" + soDuong + " > Số âm:" + soAm;
    } else if (soDuong < soAm) {
        document.getElementById("txtSoSanh").innerHTML = "Số dương:" + soDuong + " < Số âm:" + soAm;
    } else {
        document.getElementById("txtSoSanh").innerHTML = "Số dương:" + soDuong + " = Số âm:" + soAm;
    }
}