//@ts-nocheck
'use client';

import { SearchInput } from '@/components/actionBar/components/searchInput';
import { SearchResult } from '@/components/actionBar/components/searchResult';
import classes from './search.module.scss';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import useUiActions from '@/store/uiActions';
import classNames from '@/shared/lib/classNames';

export const Search = () => {
    const { isSearchActive, setSearchActive } = useUiActions();
    const ref = useRef();

    useClickAway(ref, () => setSearchActive(false));

    return (
        <div
            ref={ref}
            className={classNames(
                classes.search,
                { [classes._active]: isSearchActive },
                []
            )}
        >
            <SearchInput />
            {isSearchActive && <SearchResult />}
        </div>
    );
};
