import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { opexTaxonomyService } from "./services/opexTaxonomyService.js";

const app = createApp();

const start = async () => {
  await opexTaxonomyService.ensureMasterTaxonomy();
  app.listen(env.PORT, () => {
    console.log(`API listening on http://localhost:${env.PORT}${env.API_PREFIX}`);
  });
};

start().catch((error) => {
  console.error("Failed to bootstrap API server", error);
  process.exit(1);
});
