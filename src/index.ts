import * as CryptoJS from "crypto-js";

class Block{
  public index:number;
  public hash: string;
  public perviousHash: string;
  public data: string;
  public timestamp: number;



  static calculateBlockHah = (
    index:number , 
    perviousHash: string , 
    timestamp: number , 
    data: string): string => CryptoJS.SHA256(index + perviousHash + timestamp + data).toString();

    static validateStructure = (ablock: Block) : boolean => {
      
    }

  constructor(index:number , 
    hash: string , 
    perviousHash:string, 
    data:string, 
    timestamp:number
    ){
      this.index = index;
      this.hash = hash;
      this.perviousHash = perviousHash;
      this.data = data;
      this.timestamp = timestamp;
  }
}


const genesisBlock:Block = new Block( 0 , "232323" , " " , "hello" , 123456)

let blockchain: Block[] = [genesisBlock]

const getBlockchain = () : Block[] => blockchain;

const getLatestBlock = () : Block => blockchain[blockchain.length - 1]

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000)

const createNewBlock = (data:string) : Block => {
  const previousBlock : Block = getLatestBlock();
  const newIndex : number = previousBlock.index + 1;
  const newTimestamp : number = getNewTimeStamp();
  const newHash : string = Block.calculateBlockHah(
    newIndex , 
    previousBlock.hash , 
    newTimestamp , 
    data
    );
    const newBlock : Block = new Block(
      newIndex , 
      newHash , 
      previousBlock.hash , 
      data , 
      newTimestamp
      );

      return newBlock;
}



const isBlockValid = (candidateBlock : Block , previousBlock: Block) : boolean => {
  if(){}
}

export{}



