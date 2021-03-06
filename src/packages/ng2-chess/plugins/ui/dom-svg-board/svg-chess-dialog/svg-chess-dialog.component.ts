import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: '[chess-banner]',
  template: require('./svg-chess-dialog.template.html'),
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SVGChessBanner {
  @Input() textStyle: any = {
    fill: '#35322a',
    filter: `url('#money')`,
    fontFamily: `'Playfair Display', 'Georgia', serif`,
    fontSize: `80px`,
    fontWeight: 900
  };

  @Input() title: string;
  @Input() message: string;
}
