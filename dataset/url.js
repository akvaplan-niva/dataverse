export const datasetURL = ({ base, root = "root" } = {}) =>
  new URL(`/api/v1/dataverses/${root}/datasets`, base);
