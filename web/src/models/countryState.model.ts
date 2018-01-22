export class CountryStateDetails {
    countryCode : string;
	
	countryname : string;
	
	 stateList : string[];
    
    constructor(
        obj: any
        ) {
      this.countryCode= obj.countryCode;
      this.countryname= obj.countryname;
      this.stateList= obj.stateList;
      }
  }
  