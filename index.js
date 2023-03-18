const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code

const excelToJson = require('convert-excel-to-json');
var cors = require('cors')
app.use(cors())
const result = excelToJson({
    sourceFile: 'excel/as3ar.xlsx',
    columnToKey: {
        B: 'Manakish',
        C: 'Price',
        D: 'Cur',
        E: 'Pic'
    }
});
app.get('/', function (req, res) {
  res.send(result)
})
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});