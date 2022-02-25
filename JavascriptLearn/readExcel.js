const readXlsxFile = require('read-excel-file/node');

const filePath = 'C:/Users/p.palandurkar/Desktop/JEWELCAVE/Finalized DCX List_04-14-2021.xlsx';

let jsonData = [];

readXlsxFile(filePath).then((rows) => {

    for (const key in rows) {
        
        if (key == 0) continue;

        let json_ele = {};
        for (const key1 in rows[key]) {
            json_ele[rows[0][key1]] = rows[key][key1];
        }

        jsonData.push(
            json_ele
        )
        
    }
    console.log(jsonData)
})

