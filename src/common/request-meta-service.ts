import { AxiosRequestConfig } from 'axios';
import { Meta } from './types';

class RequestMetaService {
    private map = new Map<AxiosRequestConfig, Meta>();

    add(config: AxiosRequestConfig, meta: Meta) {
        this.map.set(config, meta);
    }

    delete(config: AxiosRequestConfig) {
        const meta = this.map.get(config);
        this.map.delete(config);

        return meta;
    }
}

export const requestMetaService = new RequestMetaService();
