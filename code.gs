function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('Tra cứu thông tin');
}

function vlookup(searchKey) {
  var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Kz0GxLahLLRO6YrAGtWtqARSZnqS3-heRJ41Pry-gkM/edit?userstoinvite=minhtoan77889900%40gmail.com&sharingaction=manageaccess&role=writer&gid=0#gid=0");
  var sheetdata = sheet.getSheetByName("Sheet1");
  var data = sheetdata.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) { // Bỏ qua hàng tiêu đề
    if (data[i][0] == searchKey) { // Giả sử cột đầu tiên là cột tra cứu
      return data[i]; // Trả về toàn bộ hàng
    }
  }
  return ["Không tìm thấy thông tin."];
}
