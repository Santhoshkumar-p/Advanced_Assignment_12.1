import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{
    private users: any[] = [
        {name: 'Mon', type: 'private'},
        {name: 'Nar', type: 'public'},
        {name: 'mit', type: 'private'},
        {name: 'Sara', type: 'private'}
        
  ]
}
               
         
