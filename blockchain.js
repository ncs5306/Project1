const Block = require("./block");

class Blockchain {

    constructor() {
        this.chain = [new Block(Array(65).join("0"))];

    }
//gets the last block
    getLastBlock() {

        return this.chain[this.chain.length -1];
    }
//gets the length of the blockchain
    getChainLength(){
        return this.chain.length;
    }

    addBlock() {

        let newBlock = new Block(this.getLastBlock().hash, global.transactions);

        this.chain.push(Object.freeze(newBlock));

    }
//checks if the block is valid using consencius 
    isChainValid(blockchain = this){

        for (let i = 1; i < blockchain.chain.length; i++){
            const currentBlock = blockchain.chain[i];
            const prevBlock = blockchain.chain[i -1 ];

            if (
                currentBlock.hash !== currentBlock.getHash() ||

                prevBlock.hash !== currentBlock.prevHash
            ) {
                return false;
            }

            let checkString = Array(global.difficulty + 1).join("0");

            if (!currentBlock.hash.startsWith(checkString)) {
                return false;
            }

        }

        return true;
    }
//replaces block if not valid
    replaceChain(newChain) {
        if (newChain.length <= this.chain.length) return;

        if (!this.isChainValid(newChain)) return;

        this.chain = newChain;
    }

    prettify() {

        let chainStr = "";

        for (let i = 0; i < this.chain.length; i++) {
            chainStr += this.chain[i].prettify();
            chainStr += "<br><hr>";
        }
        return chainStr;
    }


}

module.exports = Blockchain;