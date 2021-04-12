import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/post';
import { PostService } from 'src/app/services/post.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  posts: Array<Post> = new Array<Post>();

  constructor(private token: TokenStorageService, private postService : PostService
    ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);
    this.reloadData();
  }

  reloadData(){
    this.postService.getAllPostByUser(this.currentUser.id).subscribe(res => {
      this.posts = res;
      console.log(res);
    })
  }
}
