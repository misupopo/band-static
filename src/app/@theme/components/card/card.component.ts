import { Component, Input } from '@angular/core';

@Component({
    selector: 'orb-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() title: String;
}
