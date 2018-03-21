import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Injectable } from "@angular/core";
import { IApply } from './apply';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApplyService {
    private _discortUrl = 'https://discordapp.com/api/webhooks/425962410604494849/mVLeQOHU79tu3oh_TyWv9mtQT0aUvxjIcZ4JthqR05B-WL3HgkVJxkOzFimaMkA1e9mP';
    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    };

    constructor(private _http: HttpClient) { }

    postMessageRecrutement(apply: IApply): Observable<any> {
        let payload = JSON.stringify({embeds: [this.createMessage(apply)]});
        return this._http.post(this._discortUrl, payload, this.httpOptions);
    }

    private createMessage(apply: IApply): any {
        return {
            title: '__Nouvelle candidature__',
            timestamp: new Date(),
            fields: [{
                name: 'Présentation IRL',
                value: apply.irlDescription
            },{
                name: 'BattleTag',
                value: apply.battleTag
            },{
                name: 'Présentation IG',
                value: apply.igDescription
            },{
                name: 'Liens utiles',
                value: 'Armurerie - '+apply.armory+'\nWarcraft Logs - '+apply.warcraftLogs
            },{
                name: 'Expériences précédentes',
                value: apply.pastGuilds
            },{
                name: 'Pourquoi Famous ?',
                value: apply.whyJoinUs
            },{
                name: 'Vos disponibilités',
                value: apply.availability
            },{
                name: 'Le mot de la fin',
                value: apply.comments
            }],
            image: {
                url: apply.screenshot
            }
        };
    }
}