import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AuthEffects{

    constructor(private action$: Actions){
        action$.subscribe(
            action=>{
                if(action.type == '[Login Page] User Login'){
                    localStorage.setItem('user', JSON.stringify(action["user"]));
                }
            }
        )
    }

}
