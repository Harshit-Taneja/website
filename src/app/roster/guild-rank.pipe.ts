import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'guildRank'
})
export class GuildRankPipe implements PipeTransform {

    transform(value: number) {
        let result = '';
        switch(value) {
            case 1:
            result = 'Officier';
            break;
            case 2:
            result = 'Membre';
            break;
            case 3:
            result = 'Apply';
            break;
            default:
            result = 'N/A';
            break;
        }
        return result;
    }

}