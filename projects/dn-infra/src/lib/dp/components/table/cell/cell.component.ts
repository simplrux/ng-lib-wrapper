import { Component, OnInit, Input } from '@angular/core';
import { GridColumn, GridColumnType } from '../objects/grid-definitions';
import { CheckboxDefinitions } from '../../checkbox/objects/checkbox-definitions';
import { InputNumberProperties } from '../../inputnumber/objects/inputnumber-definitions';

// import { Country } from '../../../events/models/customer';
/*import { CustomerService } from '../../../events/services/customerservice';*/

// import { CountryService } from '../../../events/services/countryservice';



@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {
  @Input()
  row: any;

  @Input()
  column: GridColumn;

  gridColumnTypeEnum = GridColumnType;
  inputNumberProperties = InputNumberProperties;

  // countries: string[] = ['argentina', 'brazil', 'bulgaria', 'canada', 'cuba', 'finland', 'germany', 'hungary',
  //   'india', 'ireland', 'israel', 'russia', 'usa'];


  countries: any[] = [{ "name": "Afghanistan", "code": "AF" }, { "name": "brazil", "code": "BR" }];
  // countries : Country[];
  // constructor() { }

  createCheckboxDefinition(column: GridColumn) {
    const checkboxDefinition = new CheckboxDefinitions({ binary: true });
    return checkboxDefinition;
  }

  ngOnInit(): void { }

  clickEvent(val) {
    alert(val);
  }
}



// this.countryService.getCountries().then(countries => {
//   this.countries = countries;
// });
