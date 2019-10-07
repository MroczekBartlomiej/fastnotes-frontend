import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-oauth',
    templateUrl: './oauth.component.html',
    styleUrls: ['./oauth.component.scss']
})
export class OAuthComponent implements OnInit {

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.route.queryParamMap.subscribe(params =>
            this.getParams(params));
    }


    private getParams(param: ParamMap) {
        const token = param.get('token');
        const error = param.get('error');

        if (token) {
            sessionStorage.setItem('token', token);
            this.authenticationService.prepareUserValue()
                .pipe(first())
                .subscribe(() => {
                        this.router.navigate(['/notes']);
                    },
                    error => {
                    console.error(error);
                    });
        } else {
            // TODO: Add action, maybe redirection.
            console.error(error);
        }
    }


}
