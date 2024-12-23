function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Tra cứu thông tin');
}

function vlookup(searchKey) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) { // Bỏ qua hàng tiêu đề
    if (data[i][0] == searchKey) { // Giả sử cột đầu tiên là cột tra cứu
      return data[i]; // Trả về toàn bộ hàng
    }
  }
  return ["Không tìm thấy thông tin."];
}
