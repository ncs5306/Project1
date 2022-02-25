const Transaction = require("../src/transaction");
//creates transaction within the blockhain
function listtransactions(app) {

    app.get("/listtransactions", function (request, responce) {
        let txStr = "";

        for (let i = 0; i < global.transactions.length; i++) {
            txStr += global.transactions[i].prettify();
        }

        responce
            .status(200)
            .send(txStr);
    });

    

}

module.exports = listtransactions;