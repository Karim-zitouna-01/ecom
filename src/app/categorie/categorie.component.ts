import { Component,OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories: any[] = [];
  constructor(private categorieService: CategorieService){}
  ngOnInit(): void {
      this.categorieService.getAllCategories().subscribe(data=>{
        this.categories=data;
      });
  }
}
