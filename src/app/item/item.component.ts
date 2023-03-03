import { Component, Input } from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'ds-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() dsProduct : Product;
}
