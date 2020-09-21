function getSampleColumn(key, title, type) {
  var obj = {};
  obj.name = key;
  obj.title = title;
  obj.type = type;
  
  // if (key == 'email') {
  //   obj.getCellValue = (row) => {
  //     return row['email'] ? row['email'] + ' of (' + row['name'] + ')' : undefined;
  //   }
  // } 
  return obj;
}

function getSampleRows(fromCounter, toCounter, cols) {
  var records = [];
  for (let i = fromCounter; i < toCounter; i++) {
    var row = {};
    cols.forEach((e) => {
      row[e] = e + "-" + i;
    });
    records.push(row);
  }
  return records;
}

export function generateSampleDataRange(fromCounter = 0, toCounter=10) {
  var colId = getSampleColumn("id", "Id", "number");
  var colName = getSampleColumn("name", "Name", "text");
  var colPhoneNum = getSampleColumn("phNum", "Phone Number", "text");
  var colEmail = getSampleColumn("email", "Email", "text");

  var columns = [colId, colName, colPhoneNum, colEmail];
  var rows = getSampleRows(fromCounter, toCounter, ["id", "name", "phNum", "email"]);

  return {
    columns: columns,
    rows: rows,
  };
}

export function generateSampleData(nRows = 10) {
  return generateSampleDataRange(0, nRows)
}