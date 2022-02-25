function generateRandomIPv4(){

//generates random IP used in transactions
    let ipv4 = "";

    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";


    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";


    ipv4 += Math.floor(Math.random() * 255) + 1;
    ipv4 += ".";

    ipv4 += Math.floor(Math.random() * 255) + 1;

    return ipv4;


}

function generateRandomMoney(){
    return Math.floor(Math.random() * 1000000);
}

//responcable fot generating transactions within blockchain
class Transaction {
    constructor(fromAddress = "", toAddress = "", amount = 0){
        this.fromAddress = generateRandomIPv4();

        this.toAddress = generateRandomIPv4();

        this.amount = generateRandomMoney();
    }
//uses html to make interaction look better
    prettify() {

        let txStr = '<div>Host <i>${this.fromAddress}</i> sent <i>${this.toAddress}</i> \$${this.amount}.</div>';
        return txStr;
    }


}

module.exports = Transaction;