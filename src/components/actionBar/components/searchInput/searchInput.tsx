'use client';

import classes from './searchInput.module.scss';
import TextField from '@/components/common/textField/textField';
import { useState } from 'react';
import Image from 'next/image';
import searchIcon from '@/assets/icons/search.svg';
import useUiActions from '@/store/uiActions';

export const SearchInput = () => {
    const [searchRequest, setSearchRequest] = useState('');
    const { setBlured } = useUiActions();

    return (
        <div className={classes.searchInput} onClick={() => setBlured(true)}>
            <TextField
                placeholder="Поиск..."
                value={searchRequest}
                name="search"
                onChange={setSearchRequest}
            />
            <div className={classes.searchInput__icon}>
                <Image width={30} src={searchIcon} alt="searchIcon" />
            </div>
        </div>
    );
};
