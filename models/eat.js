class Eat {
    constructor(text) {
        this.text = text;

        this.constructor.all.push(this);
    }

    static all = [];

    static delete = index => {
        this.all.splice(index, 1);
    }
};

module.exports = Eat;