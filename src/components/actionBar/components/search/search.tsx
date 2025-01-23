//@ts-nocheck
'use client';

import { SearchInput } from '@/components/actionBar/components/searchInput';
import { SearchResult } from '@/components/actionBar/components/searchResult';
import classes from './search.module.scss';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import useUiActions from '@/store/uiActions';

export const Search = () => {
    const { setBlured } = useUiActions();
    const ref = useRef();
    useClickAway(ref, () => setBlured(false));

    return (
        <div ref={ref} className={classes.search}>
            <SearchInput />
            <SearchResult />
        </div>
    );
};
