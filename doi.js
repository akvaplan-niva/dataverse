export const extractDOI = (s) => {
  if (!/10\./.test(s)) {
    return "";
  }
  const [, doi] = s.match(/(10\..+)/);
  return doi.toUpperCase(); // Dataverse URLs need uppercase DOIs
};
