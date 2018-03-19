import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'role'
})
export class RolePipe implements PipeTransform {

    transform(value: number) {
        let result = '';
        switch(value) {
            case 1:
            result = 'Tank';
            break;
            case 2:
            result = 'Heal';
            break;
            case 3:
            result = 'Melee';
            break;
            case 4:
            result = 'Range';
            break;
            default:
            result = 'N/A';
            break;
        }
        return result;
    }

}