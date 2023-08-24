document.addEventListener("DOMContentLoaded", function () {
    // Sử dụng XMLHttpRequest để đọc tệp JSON
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "students.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonString = xhr.responseText;
            var students = JSON.parse(jsonString);

            // Biến để theo dõi sinh viên hiện tại
            var currentStudentIndex = 0;

            // Lấy các phần tử HTML cần thiết
            var personalInfoContainer = document.querySelector("#personalInfoContainer");
            var prevButton = document.getElementById("prevButton");
            var nextButton = document.getElementById("nextButton");

            // Hàm để hiển thị thông tin cá nhân
            function displayPersonalInfo(index) {
                var student = students[index];
                personalInfoContainer.innerHTML = "";

                for (var key in student) {
                    var itemDiv = document.createElement("div");
                    itemDiv.classList.add("personal-info-item");
                    itemDiv.innerHTML = `<strong>${key}:</strong> ${student[key]}`;
                    personalInfoContainer.appendChild(itemDiv);
                }
            }

            // Hiển thị thông tin cá nhân ngay khi trang web được nạp
            displayPersonalInfo(currentStudentIndex);

            // Sự kiện click cho nút "Trước"
            prevButton.addEventListener("click", function () {
                if (currentStudentIndex > 0) {
                    currentStudentIndex--;
                    displayPersonalInfo(currentStudentIndex);
                }
            });

            // Sự kiện click cho nút "Tiếp theo"
            nextButton.addEventListener("click", function () {
                if (currentStudentIndex < students.length - 1) {
                    currentStudentIndex++;
                    displayPersonalInfo(currentStudentIndex);
                }
            });
        }
    };
    xhr.send();
});
