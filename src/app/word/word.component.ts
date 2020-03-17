import { Component, OnInit } from '@angular/core';
import { IpService } from '../ip.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  vnInput: String = '';
  enInput: String = '';
  arrWord: Word[] = [
    new Word(1, "sách", "book", true),
    new Word(2, "vở", "notebook", true),
    new Word(3, "con mèo", "cat", false),
    new Word(4, "con chó", "dog", false),
    new Word(5, "con lợn", "pig", false),
    new Word(6, "tiền", "money", true)
  ];
  isAdd: boolean = false;
  ipWord: any = '<h1>abc</h1>';
  public Editor = ClassicEditor;
  public model = {
    editorData: '<h1>test</h1>'
  };

  public config = {
    placeholder: 'Type the content here!'
  };

  constructor(private ipService: IpService) {

  }

  ngOnInit() {

    ClassicEditor
      .create(document.querySelector('#editor'))
      .then(editor => {
        console.log('Editor was initialized', editor);
      })
      .catch(err => {
        console.error(err.stack);
      });

  }

  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();

    console.log(data);
  }

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  deleteWord(id: number) {
    this.arrWord.splice(this.arrWord.findIndex(word => word.getId == id), 1);
  }

  addWord() {
    let newWord = new Word(this.arrWord.length + 1, this.vnInput, this.enInput, false);

    this.arrWord.unshift(newWord);

    this.vnInput = '';
    this.enInput = '';
    this.isAdd = false;
  }

  showAddDialog() {
    this.isAdd = true;
  }

  content: String = "This is content";

  updateContent(text: any) {
    console.log("keyUp: ", text);
    this.content = text;
  }
}

class Word {
  private id: number;
  private vn: String;
  private en: String;
  private memorized: boolean;

  constructor(id: number, vn: String, en: String, memorized: boolean) {
    this.id = id;
    this.vn = vn;
    this.en = en;
    this.memorized = memorized;
  }

  public get getId(): number {
    return this.id;
  }

  public get getVn(): String {
    return this.vn;
  }

  public get getEn(): String {
    return this.en;
  }

  public get isMemorized(): boolean {
    return this.memorized;
  }

  public set setId(id: number) {
    this.id = id;
  }

  public set setVn(vn: String) {
    this.vn = vn;
  }

  public set setEn(en: String) {
    this.en = en;
  }

  public set setMemorized(memorized: boolean) {
    this.memorized = memorized;
  }
}
