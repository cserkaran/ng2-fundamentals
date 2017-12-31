import { Component } from '@angular/core'
 
@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1> 
        <hr>
        <event-thumbnail [event]="event"></event-thumbnail>
    </div>
    `
})
export class EventsListComponent{
    event ={
        id:1,
        name: 'Angular Connect',
        data: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data){
        console.log(data);
    }
}