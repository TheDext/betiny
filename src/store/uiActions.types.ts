interface UiStore {
    isOpenCatalog: boolean;
    isBlured: boolean;
    setOpenCatalog: (value: boolean) => void;
    setBlured: (value: boolean) => void;
}
export default UiStore;
