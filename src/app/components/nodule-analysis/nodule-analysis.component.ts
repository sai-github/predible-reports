import { Component, Input, OnInit } from '@angular/core';
import { Nodule } from 'src/app/models/nodule.model';
import { EditorService } from 'src/app/services/editor.service';

@Component({
  selector: 'app-nodule-analysis',
  templateUrl: './nodule-analysis.component.html',
  styleUrls: ['./nodule-analysis.component.scss'],
})
export class NoduleAnalysisComponent implements OnInit {
  @Input()
  nodules: Nodule[];
  @Input()
  optionList: {
    lobeList: string[];
    typeList: string[];
    borderList: string[];
  };

  /**
   * Quill variables
   */
  modules = {};
  content = '';

  constructor(private editorService: EditorService) {}

  ngOnInit(): void {
    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ direction: 'rtl' }], // text direction

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ['clean'], // remove formatting button

        ['link', 'image'], // link and image, video
      ],
    };

    this.content = this.editorService.getEditorText(this.nodules);
  }
}
