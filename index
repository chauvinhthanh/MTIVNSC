<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <script>
      function lookup() {
        var searchKey = document.getElementById("searchKey").value;
        google.script.run.withSuccessHandler(displayResult).vlookup(searchKey);
      }

      function displayResult(result) {
        var output = document.getElementById("result");
        output.innerHTML = ''; // Xóa kết quả cũ
        if (result.length > 0 && result[0] !== "Không tìm thấy thông tin.") {
          output.innerHTML = "SKU_ID: " + result[0] + "<br><br>SKU_NAME: " + result[1] + "<br><br>MTB: " + result[2];
        } else {
          output.innerHTML = result[0]; // Thông báo không tìm thấy
        }
        // Xóa dữ liệu trong ô nhập liệu
        document.getElementById("searchKey").value = '';
      }

      // Xử lý sự kiện nhấn Enter
      function handleKeyPress(event) {
        if (event.key === 'Enter') {
          lookup();
        }
      }
    </script>
  </head>
  <body>
    <h1>Tra cứu thông tin</h1>
    <input type="text" id="searchKey" placeholder="Nhập ID để tra cứu" onkeypress="handleKeyPress(event)">
    <div id="result"></div>
  </body>
</html>
