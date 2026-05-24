import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_SERVER_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use(
    (config) => {
        // Al estar definido en vite.config.ts, Vite lo reemplaza directamente y no necesitamos checkeos
        const apiKey = import.meta.env.VITE_PORTFOLIO_API_KEY;

        if (apiKey) {
            config.headers["x-api-key"] = apiKey;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const message =
            error.response?.data?.message ||
            error.message ||
            "Error desconocido";
        const code = error.response?.data?.code || "UNKNOWN_ERROR";

        console.error(`[API Error] ${code}: ${message}`);

        return Promise.reject(error);
    },
);

export default apiClient;
