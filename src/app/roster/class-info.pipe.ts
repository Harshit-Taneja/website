import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'classInfo'
})
export class ClassInfoPipe implements PipeTransform {

    transform(value: number, property: string) {
        switch(property) {
            case 'color':
            return this.getClassColor(value);
            case 'name':
            return this.getClassName(value);
        }
        return '';
    }

    private getClassColor(value: number): string {
        let color = '';
        switch(value) {
            case 1:
            color = '#C79C6E';
            break;
            case 2:
            color = '#F58CBA';
            break;
            case 3:
            color = '#ABD473';
            break;
            case 4:
            color = '#FFF569';
            break;
            case 5:
            color = '#FFFFFF';
            break;
            case 6:
            color = '#C41F3B';
            break;
            case 7:
            color = '#0070DE';
            break;
            case 8:
            color = '#69CCF0';
            break;
            case 9:
            color = '#9482C9';
            break;
            case 10:
            color = '#00FF96';
            break;
            case 11:
            color = '#FF7D0A';
            break;
            case 12:
            color = '#A330C9';
            break;
        }
        return color;
    }

    private getClassName(value: number): string {
        let className = '';
        switch(value) {
            case 1:
            className = 'Warrior';
            break;
            case 2:
            className = 'Paladin';
            break;
            case 3:
            className = 'Hunter';
            break;
            case 4:
            className = 'Rogue';
            break;
            case 5:
            className = 'Priest';
            break;
            case 6:
            className = 'Death Knight';
            break;
            case 7:
            className = 'Shaman';
            break;
            case 8:
            className = 'Mage';
            break;
            case 9:
            className = 'Warlock';
            break;
            case 10:
            className = 'Monk';
            break;
            case 11:
            className = 'Druid';
            break;
            case 12:
            className = 'Demon Hunter';
            break;
        }
        return className;
    }

}