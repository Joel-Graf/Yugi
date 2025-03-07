import { POSITION_LIMITS } from "../constants/constants";

class Position {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        if (!Position.isPositionInbounds(x, y)) {
            throw new Error(`Invalid position: (${x}, ${y}). Must be within (0-10, 0-14).`);
        }
        this.x = x;
        this.y = y;
    }

    static isPositionInbounds(x: number, y: number): boolean {
        const isValidX = x >= POSITION_LIMITS.X_LOWER && x <= POSITION_LIMITS.X_UPPER;
        const isValidY = y >= POSITION_LIMITS.Y_LOWER && y <= POSITION_LIMITS.Y_UPPER;

        return isValidX && isValidY;
    }

    getIndex() {
        const yIndexFactor = POSITION_LIMITS.X_UPPER + 1;
        return this.x + this.y * yIndexFactor;
    }
}

export { Position };
