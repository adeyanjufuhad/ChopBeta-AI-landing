import { Client, Databases, ID, Query } from "node-appwrite";

export interface AppwriteConfig {
  endpoint: string;
  projectId: string;
  apiKey: string;
  databaseId: string;
  collectionId: string;
  isConfigured: boolean;
}

export function getAppwriteConfig(): AppwriteConfig {
  const endpoint = process.env.APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1";
  const projectId = process.env.APPWRITE_PROJECT_ID?.trim() || "";
  const apiKey = process.env.APPWRITE_API_KEY?.trim() || "";
  const databaseId = process.env.APPWRITE_DATABASE_ID?.trim() || "";
  const collectionId = process.env.APPWRITE_COLLECTION_ID?.trim() || "";

  const isConfigured = Boolean(projectId && apiKey && databaseId && collectionId);

  return {
    endpoint,
    projectId,
    apiKey,
    databaseId,
    collectionId,
    isConfigured,
  };
}

export function createAdminClient() {
  const config = getAppwriteConfig();

  if (!config.isConfigured) {
    throw new Error(
      "Appwrite is not fully configured. Please set APPWRITE_PROJECT_ID, APPWRITE_API_KEY, APPWRITE_DATABASE_ID, and APPWRITE_COLLECTION_ID in .env.local"
    );
  }

  const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setKey(config.apiKey);

  return {
    client,
    databases: new Databases(client),
    databaseId: config.databaseId,
    collectionId: config.collectionId,
  };
}

export { ID, Query };
