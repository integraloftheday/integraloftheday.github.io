function doGet(e) {
  var arguments = e.parameter.theArg;
  Parg=eval(arguments);
  var sheetId=Parg[0];
  var location=Parg[1];
  var data=Parg[2];
  Logger.log(arguments);
  var sheet=SpreadsheetApp.openById(sheetId).getActiveSheet();
  sheet.getRange(location).setValue(data);
}