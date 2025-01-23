import classes from './searchResult.module.scss';
import useUiActions from '@/store/uiActions';

export const SearchResult = () => {
    const { isBlured } = useUiActions();
    return <div className={classes.searchResult}>Lorem</div>;
};
