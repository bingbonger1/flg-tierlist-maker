import { TierCharacter } from "./tier-character";

export class Tier {
    characters: TierCharacter[] = [];
    name = "Unnamed Tier"
    colorHex = "#8F8"

    constructor(name: string, colorHex: string) { 
        this.name = name;
        this.colorHex = colorHex;
    }
}
