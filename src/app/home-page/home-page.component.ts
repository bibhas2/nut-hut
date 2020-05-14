import { Component, OnInit } from '@angular/core';
import { Product, CatalogService } from '../catalog.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  catalog:Product[] = []

  constructor(private catalogSvc:CatalogService) { }

  ngOnInit(): void {
    this.catalog = this.catalogSvc.getCatalog()
  }

}
