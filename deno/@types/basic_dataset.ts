// Code from [IQSS/dataverse-client-javascript](https://github.com/IQSS/dataverse-client-javascript)
// under [MIT license](https://github.com/IQSS/dataverse-client-javascript/blob/5d7f81ea10058fda51a0bfd9ea23bb9733b981c5/README.md)

import { DatasetSubjects } from "./dataset_subjects.ts";

export interface BasicDatasetAuthor {
  fullname: string;
  affiliation?: string;
}

export interface BasicDatasetDescription {
  text: string;
  date?: string;
}

export interface BasicDatasetContact {
  email: string;
  fullname?: string;
}

export interface BasicDatasetInformation {
  title: string;
  subtitle?: string;
  descriptions: BasicDatasetDescription[];
  authors: BasicDatasetAuthor[];
  contact: BasicDatasetContact[];
  subject: DatasetSubjects[];
}
