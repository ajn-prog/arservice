export type Province = {
  id: number;
  name: string;
  area_id: number;
};

export type Regency = {
  id: number;
  name: string;
  province_id: number;
  province?: Province;
};

export type District = {
  id: number;
  name: string;
  kabupaten_id: number;
  kabupaten?: Regency;
};
