var die = {
    size: 10,
    _totalRolls: 0,
    get totalRolls(){
        return this._totalRolls;
    },
    roll: function () {
        var result = Math.ceil(this.size * Math.random());
        this._totalRolls++;
        return result;
    },
    reset: function(){
        this.size = 10;
        this._totalRolls = 0;
    }
};


exports.die = die;