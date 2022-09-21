import { headersFactory, requestFactory } from "../request.js";
import { datasetURL } from "./url.js";
import { DatasetUtil } from "dataverse/dataset/util.js";

export const method = "post";

export const create = async ({ payload, base, root, key }) => {
  const body = JSON.stringify(payload);
  const url = datasetURL({ base, root });
  const headers = headersFactory({ key, "content-type": "application/json" });
  const request = requestFactory({ url, headers, method, body });
  return await fetch(request);
};

export const basicDatasetTemplate = ({ ...override } = {}) => ({
  title: `Dataverse dataset created ${new Date().toJSON()}`,
  descriptions: [{
    text: "Abstract",
    date: new Date().toJSON().split("T")[0],
  }],
  authors: [{
    fullname: "Author Name",
    affiliation: "",
  }],
  contact: [{
    fullname: "Contact Name",
    affiliation: "",
  }],
  ...override,
});

export const payloadFromBasicDataset = (basic) =>
  structuredClone(
    DatasetUtil.mapBasicDatasetInformation(basic),
  );
