import { Track } from "../models/Track";
import { ApiResponse, HttpMethod } from "../types/APITypes";
import { API_URL, DEFAULT_TIMEOUT } from '@env';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

export default class ApiService {
    private onTimeoutCallback: VoidFunction = () => {};
    private apiUrl: string = "";

    constructor(onTimeout: VoidFunction = () => {}) {
        this.onTimeoutCallback = onTimeout;
        this.apiUrl = API_URL;
    }

    public async getFocusTracks(): Promise<ApiResponse<Track[]>> {
        return this.getTracks(`${this.apiUrl}/tracks/focus`);
    }

    public async getRelaxTracks(): Promise<ApiResponse<Track[]>> {
        return this.getTracks(`${this.apiUrl}/tracks/relax`);
    }

    public async getSleepTracks(): Promise<ApiResponse<Track[]>> {
        return this.getTracks(`${this.apiUrl}/tracks/sleep`);
    }

    private async getTracks(path: string): Promise<ApiResponse<Track[]>> {
        let response: ApiResponse<Track[]> = {};

        try {
            response = await this.fetchLocal(path, 'GET');
        }
        catch (err: any) {
            response = {
                message: err.message,
            };
        }

        return response;
    }

    private async fetchLocal(
        path: string,
        method: HttpMethod,
        body: string | null = null,
        headersConfig: Record<string, string> = {}
    ) {    
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...(headersConfig || {}),
        };

        const requestConfig: AxiosRequestConfig<any> = { headers, timeout: parseInt(DEFAULT_TIMEOUT, 10) };

        let response: AxiosResponse<any, any>;
        switch(method) {
            case "GET":
                response = await axios.get(path, requestConfig);
                break;
            case "PUT":
                response = await axios.put(path, body, requestConfig);
                break;
            case "POST":
                response = await axios.post(path, body, requestConfig);
                break;
            case "DELETE":
                response = await axios.delete(path, requestConfig);
                break;
        }
    
        if (!(response.status >= 200 && response.status <= 299)) {
            switch (response.status) {
                case 408:
                case 504:
                    this.onTimeoutCallback?.();
                    break;
            }
        }

        return response.data;
    };
}