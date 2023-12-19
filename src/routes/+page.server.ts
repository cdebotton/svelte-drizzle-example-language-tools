import { db, objects } from "$lib/server/db";

export async function load() {
  return {
    objects: await db.select({ id: objects.id, name: objects.name }).from(objects).limit(25),
  };
}