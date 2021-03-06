import { Component, Input, OnInit } from '@angular/core';
import { Nodule } from 'src/app/models/nodule.model';
import { EditorService } from 'src/app/services/editor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  @Input()
  risk: boolean;

  /**
   * Quill variables
   */
  modules = {};
  content = '';
  editor: any;
  editorPlainText: string;

  constructor(
    private editorService: EditorService,
    private _snackBar: MatSnackBar
  ) {}

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

    this.content = this.editorService.getEditorText(
      this.nodules.filter((item) => Boolean(item.select) === true)
    );
  }

  updateNodule(nodule: Nodule) {
    const currNoduleIndex = this.nodules.findIndex(
      (item) => item.title === nodule.title
    );
    if (currNoduleIndex !== -1) {
      this.nodules[currNoduleIndex] = nodule;
    }

    this.content = this.editorService.getEditorText(
      this.nodules.filter((item) => Boolean(item.select) === true)
    );
  }

  onEditorCreation(editor: any) {
    this.editor = editor;
    this.editorPlainText = this.editor.getText();
  }

  onCopyContent() {
    this._snackBar.open('Plain text copied', 'OK', {
      duration: 2000,
    });
  }
}
