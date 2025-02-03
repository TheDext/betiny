import httpService from '@/services/http.service';

export const catalogService = {
    get: async () => {
        const { data } = await httpService.get('/api/catalog');
        return data;
    },
};
