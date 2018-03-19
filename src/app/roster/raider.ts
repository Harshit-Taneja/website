export interface IRaider {
    id: number,
    guildRank: number, // 1: Off, 2: Member, 3: Apply
    role: number, // 1: Tank, 2: Heal, 3: Melee, 4: Range
    name: string,
    description: string,
    armory: string,
    warcraftlogs: string,
    raiderio: string
}