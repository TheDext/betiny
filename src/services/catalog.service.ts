import httpService from '@/services/http.service';

export const catalogService = {
    get: async () => {
        try {
            const { data } = await httpService.get('/api/catalog');
            return data;
        } catch (e) {
            console.log('error', e);
        }
    },
};
