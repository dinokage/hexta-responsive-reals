export const getProjectImageUrl = (filename: string) => {
  const baseUrl = "https://s3.rdpdatacenter.in/api/v1/buckets/hexta-dev/objects/download";
  const prefix = `projects/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseUrl}?preview=true&prefix=${encodedPrefix}`;
};

export const getTeamImageUrl = (filename: string) => {
  const baseUrl = "https://s3.rdpdatacenter.in/api/v1/buckets/hexta-dev/objects/download";
  const prefix = `team/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseUrl}?preview=true&prefix=${encodedPrefix}`;
};

export const getClientImageUrl = (filename: string) => {
  const baseUrl = "https://s3.rdpdatacenter.in/api/v1/buckets/hexta-dev/objects/download";
  const prefix = `clients/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseUrl}?preview=true&prefix=${encodedPrefix}`;
};
export const getServiceImageUrl = (filename: string) => {
  const baseUrl = "https://s3.rdpdatacenter.in/api/v1/buckets/hexta-dev/objects/download";
  const prefix = `services/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseUrl}?preview=true&prefix=${encodedPrefix}`;
};
export const getCareerImageUrl = (filename: string) => {
  const baseUrl = "https://s3.rdpdatacenter.in/api/v1/buckets/hexta-dev/objects/download";
  const prefix = `career/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseUrl}?preview=true&prefix=${encodedPrefix}`;
};

