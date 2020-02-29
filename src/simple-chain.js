const chainMaker = {

  chain: [],

  getLength() {
    this.chain.length;
  },
  addLink(value) {
    //if (this.chain === undefined)
    if (!this.chain) this.chain = [];
    this.chain.push(`( ${value} )`);
    //returns the object so that we can continue invoking methods
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || typeof position !== 'number') {
      delete this.chain;
      throw new Error();
    };
    //position is a number starting from 1 while elements are counted from 0
    this.chain.splice(position - 1, 1);
    //returns the object so that we can continue invoking methods
    return this;
  },
  reverseChain() {
    //if (this.chain === undefined)
    if (!this.chain) this.chain = [];
    this.chain.reverse();
    //returns the object so that we can continue invoking methods
    return this;
  },
  finishChain() {
    let str = this.chain.join('~~');
    //delete the existing chain
    delete this.chain;
    return str;
  },

};

module.exports = chainMaker;
