import { create } from 'zustand';
import UiStore from '@/store/uiActions.types';

const useUiActions = create<UiStore>((set) => ({
    isOpenCatalog: false,
    isBlured: false,
    setOpenCatalog: (value: boolean) =>
        set({
            isOpenCatalog: value,
            isBlured: value,
        }),
    setBlured: (value: boolean) => set({ isBlured: value }),
}));

export default useUiActions;
