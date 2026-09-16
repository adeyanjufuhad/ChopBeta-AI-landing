# Appwrite Setup Guide for Chop Beta AI

Follow these simple steps to configure your Appwrite project for the waitlist in less than 3 minutes.

---

## 1. Create or Open Your Appwrite Project

1. Log into your [Appwrite Cloud](https://cloud.appwrite.io/) account (or your self-hosted Appwrite instance).
2. Create a new project named **Chop Beta AI** (or select an existing project).
3. Copy your **Project ID** from the Project Settings.

---

## 2. Create the Database

1. In your Appwrite Console, click on **Databases** in the left sidebar.
2. Click **Create Database**.
3. Name: `ChopBetaDB` (or any name you prefer).
4. Note your **Database ID** (you can use custom ID like `chopbeta_main` or auto-generated ID).

---

## 3. Create the Waitlist Collection

1. Inside your new Database, click **Create Collection**.
2. Collection Name: `waitlist`.
3. Note your **Collection ID** (e.g. `waitlist`).

---

## 4. Add Attributes to the Collection

In the `waitlist` Collection, go to the **Attributes** tab and add the following 3 attributes:

| Attribute Key | Type | Size | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `firstName` | **String** | 100 | **Yes** | User's first name |
| `email` | **Email** (or String) | 255 | **Yes** | User's email address |
| `userType` | **String** | 20 | **No** (Default: `general`) | `student` or `general` |

> [!TIP]
> Appwrite automatically creates `$id` (unique document ID) and `$createdAt` (timestamp) for each document, so you do not need to create ID or timestamp attributes manually.

---

## 5. (Optional but Recommended) Add a Unique Index for Emails

1. In your `waitlist` Collection, go to the **Indexes** tab.
2. Click **Create Index**.
3. Index Key: `unique_email`
4. Type: **Unique**
5. Attributes: Select `email` (ASC)
6. Click **Create**.

*This guarantees at the database level that no email can ever be duplicated.*

---

## 6. Create an API Key for Server-Side Access

1. In the Appwrite Console, go to **Overview** -> **API Keys** (or **Settings** -> **View API Keys**).
2. Click **Create API Key**.
3. Name: `NextJS Server Waitlist Key`
4. Expiration: Never (or your preferred duration).
5. Scopes required:
   - ✅ **Databases**: Check `documents.read` and `documents.write`
6. Click **Create** and copy your **Secret API Key**.

---

## 7. Add Environment Variables to Chop Beta AI

In your local project, open `.env.local` (or create it) and fill in your values:

```bash
# Appwrite Configuration
APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=your_project_id_here
APPWRITE_API_KEY=your_api_key_here
APPWRITE_DATABASE_ID=your_database_id_here
APPWRITE_COLLECTION_ID=your_collection_id_here
```

Restart your dev server:
```bash
npm run dev
```

That's it! Any submissions on the landing page waitlist form will now instantly flow into your Appwrite Database!
