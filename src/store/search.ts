import { create } from 'zustand';

const useSearch = create(() => ({
    searchRequest: '',

    // setBlured: (value: boolean) => set({ isBlured: value }),
}));

export default useSearch;
