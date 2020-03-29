import { Component, OnInit } from '@angular/core';
import { IpService } from '../ip.service';
import { PostEntity } from '../postEntity';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  public model = {
    editorData: '<h1>test</h1>'
  };

  public config = {
    placeholder: 'Content'
  };

  public post: PostEntity = {id: -1, title: '', content: '', owner: '1', createdDate: '', modifiedDate: ''};
  public notice:String = "";

  constructor(private ipService: IpService) { }
  
  ngOnInit() {

    
  }

  saveNewPost(){
    this.ipService.saveNewPost(this.post).subscribe(result => {
      this.notice = result;
      console.log(result);
    })
  }

}
