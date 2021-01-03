const api = require("cosmicjs")();
const bucket = api.bucket({
  slug: "b3d45410-c8a4-11ea-bd32-a14dde4f44f3",
  read_key: process.env.BUCKET_READ_KEY 
});

export default bucket;