declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_CONNECTION_URL: string
    MODE: "development" | "production"
    PORT: number
    TOKEN_SECRET: string
    TOKEN_AUTHORIZATION: string
  }
}
