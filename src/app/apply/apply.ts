export interface IApply {
    id: number,
    irlDescription: string,
    battleTag: string,
    igDescription: string,
    armory: string,
    warcraftLogs: string,
    pastGuilds: string,
    whyJoinUs: string,
    availability: string,
    comments: string,
    screenshot: string
}

export class Apply {
    id: number;
    irlDescription: string;
    battleTag: string;
    igDescription: string;
    armory: string;
    warcraftLogs: string;
    pastGuilds: string;
    whyJoinUs: string;
    availability: string;
    comments: string;
    screenshot: string;
    constructor() {
        /*this.id = 1;
        this.irlDescription = "Salut, je m'appelle Kévin, j'ai 12ans et mon rêve est d'être GM2018";
        this.battleTag = "Meikai#2018";
        this.igDescription = "Je suis un druide ours trop fort nommé Thorbiorn. C'est le plus beau.";
        this.armory = "https://worldofwarcraft.com/fr-fr/character/elune/thorbiörn";
        this.warcraftLogs = "https://www.warcraftlogs.com/character/eu/elune/thorbiörn";
        this.pastGuilds = "J'étais dans une guilde paumée sur Voljin.";
        this.whyJoinUs = "Famous a vraiment l'air trop intéressant. En plus il parait que vous faites du social.";
        this.availability = "Dispo les 4 soirs sans problème";
        this.comments = "Prenez moi plz";
        this.screenshot = "http://gotwarcraft.com/wp-content/uploads/2012/07/sitting-bear.jpg";
        */
    }
}