# dataverse

Web platform helpers for simplifying and automating dataset publishing via
[Dataverse](https://dataverse.org/) APIs.

Use in any platform supporting standard
[Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), but with
special support for [Deno](https://deno.land).

Warning: This project is neither official nor complete, see
[https://github.com/IQSS/dataverse-client-javascript] for that.

## Configuration

For Deno, environment variables are recommended for configuring.

```js
import { base, key, root } from "dataverse/deno/env.js";
console.log({ base, root });
```

Example `.env` file for linux/bash

```bash
export dataverse_base="https://test.dataverse.no"
export dataverse_root="polarfront"
export dataverse_token=""
```

Deno

```js
```

## Create dataset

### Create payload

Prior to creating a dataset, existing metadata must be translated into
Dataverse's internal object format (the payload).

You may build from the `basicDatasetTemplate` and obtain payload via
`payloadFromBasicDataset`:

```js
import {
  basicDatasetTemplate,
  payloadFromBasicDataset,
} from "dataverse/dataset/create.js";

const basic = basicDatasetTemplate();
const payload = payloadFromBasicDataset(basic);
console.log(payload);
// {
//   datasetVersion: {
//     metadataBlocks: { citation: { fields: [Array], displayName: "Citation Metadata" } }
//   }
// }
```

### Create dataset

Simply call `create` that will return a regular fetch response object:

```js
const { base, root, key } = {
  "base": "https://test.dataverse.no",
  key: "…",
  root: "path",
};
const basic = { title: "Title1" };
const payload = payloadFromBasicDataset(basicDatasetTemplate(basic));
const response = await create({ payload, base, root, key });
console.log(await response.text());
//{"status":"OK","data":{"id":156919,"persistentId":"doi:10.21337/RQVGWV"}}
```

// export const payloadFromBasicDataset = (basic: BasicDatasetInformation) => {

Note: the example code requires setting up a working import map for your
project.

## Browser

## Deno

````
```
```
````
