import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent implements OnInit {
  
  constructor() { }
  videos = [new Video('Catmare Before Christmas', '#', 'Cat Skellington ruins tha family Christmas for a third year by peeing in everyones stocking'), new Video('Feline and Furious 43', '#', 'Two cats go head to head in a face to the food bowl'), new Video('Catasblanca', '#', 'Loner cat, Rick, just wants to be left alone, but an old flame, Fluffy, is about to walk in front of his window again'), new Video('Lorem', '#', 'Lorem Ipsum dkfjdsjfkdljfkdjflkdsjflkdsjflkdsjfkj'), new Video('Lorem', '#', 'Lorem Ipsum dkfjdsjfkdljfkdjflkdsjflkdsjflkdsjfkj'), new Video('Lorem', '#', 'Lorem Ipsum dkfjdsjfkdljfkdjflkdsjflkdsjflkdsjfkj')];

  ngOnInit() {

  }

}
