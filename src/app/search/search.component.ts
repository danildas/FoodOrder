import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchItem: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchItem'])
        this.searchItem = params['searchItem'];
    })
  }

  search(): void {
    console.log("....searchItem")
    if (this.searchItem)
    console.log("....", this.searchItem)
      this.router.navigateByUrl('/search/' + this.searchItem)
  }
}
