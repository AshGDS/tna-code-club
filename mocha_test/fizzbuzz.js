class fizzbuzz {
    fizz_or_buzz() {
        let s = "";

        if( this.i % 3 === 0){s = s+ "Fizz"}

        if( this.i % 5 === 0){s = s + "Buzz"}

        if( this.i % 3 !== 0 && this.i % 5 !== 0) {s = this.i}

        return s;
    };

    constructor(int) {
        if (isNaN(int)) throw new Error('Bad input');
        this.i = int;
    }
}
 module.exports = fizzbuzz;


