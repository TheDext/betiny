interface UiStore {
    isOpenCatalog: boolean;
    isSearchActive: boolean;
    isBlured: boolean;
    setSearchActive: (value: boolean) => void;
    setOpenCatalog: (value: boolean) => void;
    setBlured: (value: boolean) => void;
}
export default UiStore;
