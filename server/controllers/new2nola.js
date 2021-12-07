const drink = require('../../db/drink.json');
const eat = require('../../db/eat.json');
const beMerry = require('../../db/beMerry.json');
const Drink = require('../../models/drink.js');
const Eat = require('../../models/eat.js');
const BeMerry = require('../../models/beMerry.js');

module.exports = {
    getDrink: (req, res) => {
        let index = Math.floor(Math.random() * Drink.all.length);
        let drink = Drink.all[index];
        res.status(200).send(drink.text);
    },
    getEat: (req, res) => {
        let index = Math.floor(Math.random() * Eat.all.length);
        let eat = Eat.all[index];
        res.status(200).send(eat.text);
    },
    getBeMerry: (req, res) => {
        let index = Math.floor(Math.random() * BeMerry.all.length);
        let beMerry = BeMerry.all[index];
        res.status(200).send(beMerry.text);
    },
    genDrink: (req, res) => {
        if (Drink.all.length === 0) {
            drink.forEach(drink => new Drink(drink.text));
        }
        if (drink) {
            res.status(200).send(Drink.all);
        } else {
            res.status(500).send("Error generating Drink.")
        }
    },
     genEat: (req, res) => {
        if (Eat.all.length === 0) {
            eat.forEach(eat => new Eat(eat.text));
        }
        if (eat) {
            res.status(200).send(Eat.all);
        } else {
            res.status(500).send("Error generating Eat.")
        }
    },
    genBeMerry: (req, res) => {
        if (BeMerry.all.length === 0) {
            beMerry.forEach(beMerry => new BeMerry(beMerry.text));
        }
        if (beMerry) {
            res.status(200).send(BeMerry.all);
        } else {
            res.status(500).send("Error generating Be Merry.")
        }
    },
    createEat: (req, res) => {
        let text = req.body.text;
        let newEat = new Eat(text);
        let target = Eat.all.find(f => f.text === text);
        let index = Eat.all.indexOf(target);
        let fObj = {
            index: index,
            text: newEat.text
        };
        res.status(200).send(fObj);
    },
    createDrink: (req, res) => {
        let text = req.body.text;
        let newDrink = new Drink(text);
        let target = Drink.all.find(f => f.text === text);
        let index = Drink.all.indexOf(target);
        let fObj = {
            index: index,
            text: newDrink.text
        };
        res.status(200).send(fObj);
    },
    createBeMerry: (req, res) => {
        let text = req.body.text;
        let newBeMerry = new BeMerry(text);
        let target = BeMerry.all.find(f => f.text === text);
        let index = BeMerry.all.indexOf(target);
        let fObj = {
            index: index,
            text: newBeMerry.text
        };
        res.status(200).send(fObj);
    },
    deleteEat: (req, res) => {
        let index = req.params.index;
        Eat.delete(index);
        res.status(200).send(index);
    },
    deleteDrink: (req, res) => {
        let index = req.params.index;
        Drink.delete(index);
        res.status(200).send(index);
    },
    deleteBeMerry: (req, res) => {
        let index = req.params.index;
        BeMerry.delete(index);
        res.status(200).send(index);
    },
    updateEat: (req, res) => {
        let { index, text } = req.body;
        let target = Eat.all[+index];
        target.text = text;
        let fObj = {
            index: index,
            text: text
        };
        res.status(200).send(fObj);
    },
    updateDrink: (req, res) => {
        let { index, text } = req.body;
        let target = Drink.all[+index];
        target.text = text;
        let fObj = {
            index: index,
            text: text
        };
        res.status(200).send(fObj);
    },
    updateBeMerry: (req, res) => {
        let { index, text } = req.body;
        let target = BeMerry.all[+index];
        target.text = text;
        let fObj = {
            index: index,
            text: text
        };
        res.status(200).send(fObj);
    }
}