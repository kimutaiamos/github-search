import { Component, OnInit } from '@angular/core';
import { RepoRequestService } from '../repo-http/repo-request.service';
import { HttpClientModule } from '@angular/common/http';
import { RepoComponent } from '../repo/repo.component';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  username:any;
  gituser:any;
  gitRepos:any;
  getUsername(){
    this.service.getuser(this.username).subscribe(details=>{
      console.log(details);
      return this.gituser = details;
    });
  }
  getRepos(){
    this.aron.getRepo(this.username).subscribe(details=>{
      console.log(details);
      return this.gitRepos = details;

    });
  }

  constructor(private service:RepoRequestService, private aron:RepoRequestService) {
    
   }

  ngOnInit(): void {
  }
}
