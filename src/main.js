// let listScores = [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4];
const tbody = document.getElementById("tblBody");

let listScores = [];

function getListScores() {
  // DOM tới class "td-scores"
  const listClassScores = document.getElementsByClassName("td-scores");
  // Duyệt qua listClassScores
  for (let i = 0; i < listClassScores.length; i++) {
    // lấy item (cột) từ listClassScores
    const td = listClassScores[i];
    // lấy nội dung (dtb) từ td => convert to number
    const score = td.innerHTML * 1;
    // thêm score vào listScores
    listScores.push(score);
  }
}

getListScores();

console.log(listScores);

/**
 * tìm sv có dtb cao nhất
 *
 * listScores = [3, 5, 6, 2];
 * 1. khai biến max = listScores[0] => để nhận số lớn nhất tìm dc
 *    Khai báo biến index = 0
 *
 * 2. Duyệt mảng; bắt đầu từ i = 1
 *      2.1. Tạo biến score = listScores[i]
 *      2.2. So sanh max với score => nếu max < score
 *            => true => 2.3. Cập nhật max có giá tri là score
 *                    => 2.4. Cập nhật lại i cho index
 * 3. Tạo biến namStudent = tbody.rows[index].cells[2].innerHTML;
 * 4. Tạo biến rs = `${namStudent} - ${max}`
 * 5. Show ket qua UI
 */
const btnSVCaoDiemNhat = document.getElementById("btnSVCaoDiemNhat");
btnSVCaoDiemNhat.onclick = function () {
  // 1. Khởi tạo max bằng phần tử đầu tiên
  let max = listScores[0];
  let index = 0;

  // 2. Duyệt mảng, bắt đầu từ i = 1
  for (let i = 1; i < listScores.length; i++) {
    // 2.1. Lấy điểm tại vị trí i
    let score = listScores[i];

    // 2.2. So sánh max với score
    if (max < score) {
      // 2.3. Cập nhật max
      max = score;
      // 2.4 Cập nhật index
      index = i;
    }
  }
  const namStudent = tbody.rows[index].cells[2].innerHTML;

  const rs = `${namStudent} - ${max}`;

  document.getElementById("svGioiNhat").innerHTML = rs;
};

/**
 * Đếm SV giỏi >= 8
 * 1. Tạo biến count = 0;
 * 2. Duyệt mảng từ i = 0
 *      2.1. Tạo biến score = listScores[i];
 *      2.2. Nếu score >= 8
 *              => true => 2.3. tăng count 1 đơn vị
 *
 * 3. Show ra UI
 */
document.getElementById("btnSoSVGioi").onclick = function () {
  // 1. Khởi tạo biến đếm
  let count = 0;

  // 2. Duyệt qua danh sách điểm
  for (let i = 0; i < listScores.length; i++) {
    // 2.1. Lấy điểm của sinh viên
    let score = listScores[i];

    // 2.2. Kiểm tra sinh viên giỏi
    if (score >= 8) {
      // 2.3. Tăng biến đếm
      count++;
    }
  }

  document.getElementById("soSVGioi").innerHTML = count;
};

/**
 * DS SV DTB > 5
 * 1. Tạo biến content = "";
 * 2. Duyệt mảng từ i = 0;
 *      2.1. Tạo score = listScores[i];
 *      2.2. Nếu score > 5
 *          => true => 2.3. Tạo nameStudent = tbody.rows[i].cells[2].innerHTML
 *                     2.4. content += tích luỹ => `${nameStudent} - score <br />`
 *
 * 3. Show UI
 */
document.getElementById("btnSVDiemHon5").onclick = function () {
  let content = "";

  for (let i = 0; i < listScores.length; i++) {
    const score = listScores[i];
    if (score > 5) {
      const nameStudent = tbody.rows[i].cells[2].innerHTML;
      content += `${nameStudent} - ${score} <br />`;
    }
  }

  document.getElementById("dsDiemHon5").innerHTML = content;
};

/**
 * Sap xep sv co dtb tang dan
 */
document.getElementById("btnSapXepTang").onclick = function(){
  for(let i = 0; i < listScores.length - 1; i++) {
    for (let j = i + 1; j < listScores.length; j++) {
      if (listScores[i] > listScores[j]) {
        // hoán vị
        const temp = listScores[i];
        listScores[i] = listScores[j];
        listScores[j] = temp;
      }
    }
  }

  console.log(listScores);
}