import { create } from 'zustand';
import UiStore from '@/store/uiActions.types';

const useUiActions = create<UiStore>((set) => ({
    isOpenCatalog: false,
    isSearchActive: false,
    isBlured: false,
    setOpenCatalog: (value: boolean) =>
        set({
            isOpenCatalog: value,
            isBlured: value,
        }),
    setSearchActive: (value: boolean) =>
        set({
            isSearchActive: value,
            isBlured: value,
        }),
    setBlured: (value: boolean) => set({ isBlured: value }),
}));

export default useUiActions;
