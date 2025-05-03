export type MonsterMode = "ATK" | "DEF";

export type MonsterStatus = "ALIVE" | "DESTROYED";

export type GameEventType = "CREATE_SINGLE_PLAYER_GAME" | "START_GAME" | "JOIN_GAME" | "PLAY_GAME";

export type GameEvent = {
    type: GameEventType;
    payload: any;
}

export type Wall = {
    up: boolean;
    right: boolean;
    down: boolean;
    left: boolean;
}

export type Position = {
    x: number;
    y: number;
}

export type Tile = {
    position: Position;
    wall?: Wall;
    monster?: Monster;
}
