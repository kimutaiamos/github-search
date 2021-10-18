import { Component, OnInit } from '@angular/core';

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
    this.service.getUser(this.username).subscribe(details=>{
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

  constructor(private service:GithubserviceService, private aron:RepoService) {
    
   }

  ngOnInit(): void {
  }
}
