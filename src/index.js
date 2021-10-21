const xlsx = require('xlsx')
const fs = require('fs')

const xlsAJson = () => {
  const exceldocument = xlsx.readFile(
    'C:\\Users\\keba2\\Desktop\\proyectos\\Dinosol\\Explotacion\\Inventario de Jobs\\convertXlmJson\\prueba_plantilla.xlsx'
  )
  const nameSheet = exceldocument.SheetNames;
  let datos = xlsx.utils.sheet_to_json(exceldocument.Sheets[nameSheet[0]]);
  convert = JSON.stringify(datos);
  fs.writeFile("thing.json", convert, function(err) {
    if(err) console.log('error', err);
  })
}
xlsAJson()
