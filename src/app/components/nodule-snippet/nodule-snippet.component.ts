import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Nodule } from 'src/app/models/nodule.model';

@Component({
  selector: 'app-nodule-snippet',
  templateUrl: './nodule-snippet.component.html',
  styleUrls: ['./nodule-snippet.component.scss'],
})
export class NoduleSnippetComponent implements OnInit {
  @Input()
  nodule: Nodule;
  @Input()
  lobeList: string[];
  @Input()
  typeList: string[];
  @Input()
  borderList: string[];

  @Output()
  onUpdateNodule: EventEmitter<Nodule> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updateNodule(field: string, newValue: any): void {
    switch (field) {
      case 'select':
        this.onUpdateNodule.emit({
          ...this.nodule,
          select: newValue,
        });
        break;
      case 'lobe':
        this.onUpdateNodule.emit({ ...this.nodule, lobe: newValue });
        break;
      case 'type':
        this.onUpdateNodule.emit({ ...this.nodule, type: newValue });
        break;
      case 'cal':
        this.onUpdateNodule.emit({ ...this.nodule, cal: newValue });
        break;
      case 'size':
        this.onUpdateNodule.emit({ ...this.nodule, size: newValue });
        break;
      case 'vol':
        this.onUpdateNodule.emit({ ...this.nodule, vol: newValue });
        break;
      case 'border':
        this.onUpdateNodule.emit({
          ...this.nodule,
          border: newValue,
        });
        break;
    }
  }
}
