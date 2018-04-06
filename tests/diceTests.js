var dice = require("../lib/dice").die;

exports["setUp"] = function(callback){
    dice.reset();
    callback();
};

exports["Can set die size"] = function(test){
    dice.size = 10;
    test.equal(dice.size, 10);
    test.done();
};

exports["May not set total rolls"] = function(test){
    dice.totalRolls = 20;
    test.notEqual(dice.totalRolls , 20);
    test.done();
};
exports["Total rolls good count"] = function(test){
    dice.roll();
    dice.roll();

    test.equal(dice.totalRolls, 2);
    test.done();
}