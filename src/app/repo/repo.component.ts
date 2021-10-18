import { Component, OnInit } from '@angular/core';
import { RepoRequestService } from '../repo-http/repo-request.service';
import { HttpClientModule } from '@angular/common/http';
import { GithubComponent } from '../github/github.component';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  
  username:any;
  gituser:any;
  getUsername(){
    this.service.getuser(this.username).subscribe(profile=>{
      console.log(profile);
      return this.gituser = profile;
    });
  }

  constructor(private service:RepoRequestService) {
    
   }


  ngOnInit(): void {
  }

}
