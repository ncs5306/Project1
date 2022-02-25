const Transaction = require("../src/transaction");
// new transaction function creates new transactions
function newtransaction(app) {

    app.get("/newtransaction", function (request, responce) {
        let tx = new Transaction();

        global.transactions.push(tx);

        responce
            .status(200)
            .send(tx.prettify());
    });

}

module.exports = newtransaction;