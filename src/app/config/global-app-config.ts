interface GlobalAppConfig {
  baseApiUrl: string;
}

const globalAppConfig: GlobalAppConfig = {
  baseApiUrl: process.env.BASE_API_URL ?? "http://localhost:3800",
};

export default globalAppConfig;
