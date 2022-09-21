export const base = Deno.env.get("dataverse_base");
export const key = Deno.env.get("dataverse_key");
export const root = Deno.env.get("dataverse_root") ?? "root";
export const checkenv = () => {
  if (!base || !key) {
    throw "Please set env variables dataverse_base and dataverse_token";
  }
};
