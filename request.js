export const headersFactory = ({ key, ...other }) =>
  new Headers({ "X-Dataverse-Key": key, ...other });

export const requestFactory = ({
  body,
  url,
  key,
  method = "get",
  headers = headersFactory({ key }),
} = {}) =>
  new Request(url, {
    method,
    body,
    headers,
  });
