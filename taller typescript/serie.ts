export class Serie{

    public name: string;
    public channel: string;
    public seasons: number;
    public tupleNum: number;

    constructor (name: string, channel: string, seasons: number, tupleNum:number){
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.tupleNum = tupleNum;
    }
}