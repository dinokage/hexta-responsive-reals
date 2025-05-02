export const getTeamImageUrl = (filename: string) => {
    const baseUrl = "https://s3.rdpdatacenter.in/api/v1/buckets/hexta-dev/objects/download";
    const prefix = `team/${filename}`;
    const encodedPrefix = encodeURIComponent(prefix);
    return `${baseUrl}?preview=true&prefix=${encodedPrefix}`;
  };