const csvParser = require("json2csv").Parser;
const fs = require("fs");
var jsonFile = require('./apiresults.json');


let arrayOfObj = [];

function getData(jsonFile) {
			jsonFile.forEach(item => {
			let obj = {
					asset_id: item.asset_id,
					data_quote_start: item.data_quote_start,
					data_quote_end: item.data_quote_end,
					data_orderbook_start: item.data_orderbook_start,
					data_orderbook_end: item.data_orderbook_end,
					data_trade_start: item.data_trade_start,
					data_trade_end: item.data_trade_end,
					volume_1mth_usd: item.volume_1mth_usd
			};
			arrayOfObj.push(obj);
		});
			convertToCSV();
} 


function convertToCSV() {
		const fields = ["asset_id", "data_quote_start", "data_quote_end", "data_orderbook_start", "data_orderbook_end", "data_trade_start", "data_trade_end", "volume_1mth_usd"];
		const parser = new csvParser({ fields });
		const csv = parser.parse(arrayOfObj);
		fs.writeFile("result.csv", csv, err => {
				if (err) throw err;
			console.log("file saved");
		});
}


getData(jsonFile);


