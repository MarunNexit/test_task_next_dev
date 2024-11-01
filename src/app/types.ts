export interface VehicleMake {
  MakeId: number;
  MakeName: string;
}

export interface VehicleModel {
  Model_ID: number;
  Model_Name: string;
  Make_ID: string;
  Make_Name: string;
}

export interface ResultPageProps {
  makeId: string;
  year: string;
}
