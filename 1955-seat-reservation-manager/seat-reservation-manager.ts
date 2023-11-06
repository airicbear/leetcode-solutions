class SeatManager {
    private seats: number[];
    private nextSeat: number;

    constructor(n: number) {
        this.seats = [];
        for (let i = 1; i < n; i++) {
            this.seats[i] = 0;
        }
        this.nextSeat = 1;
    }

    reserve(): number {
        const ret = this.nextSeat;
        this.seats[this.nextSeat] = 1;
        while (this.seats[this.nextSeat] == 1) {
            this.nextSeat++;
        }
        return ret;
    }

    unreserve(seatNumber: number): void {
        this.seats[seatNumber] = 0;
        if (this.nextSeat > seatNumber) {
            this.nextSeat = seatNumber;
        }
    }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */