export type MonsterMode = "ATK" | "DEF";

export type MonsterStatus = "ALIVE" | "DESTROYED";

export type GameEventType = "CREATE_SINGLE_PLAYER_GAME" | "START_GAME" | "JOIN_GAME" | "PLAY_GAME";

export type GameEvent = {
    type: GameEventType;
    payload: any;
}