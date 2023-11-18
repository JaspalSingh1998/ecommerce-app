import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: 'sksivX4hXU85YQ0epKCTHVeAdwWBwyNMOgzwRtXvGMXpJwxcN8rFIR5cfyyC4VybTVkXkA6iDiZEWoKWoKGW4lvlCG9GNmx7pG7vjrLv0HhRUMdr2OuDGfxowlD5e7t6NUMjs0MwdfIjv5QHgG9pI3lu9vYAOrJyFfI4ZXf3PFUlzy0jEKoc'
})
