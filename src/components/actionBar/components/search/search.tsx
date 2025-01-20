'use client';

import classes from './search.module.scss';
import TextField from '@/components/common/textField/textField';
import { useState } from 'react';
import Image from 'next/image';
import searchIcon from '@/assets/icons/search.svg';

export const Search = () => {
    const [searchRequest, setSearchRequest] = useState('');

    return (
        <div className={classes.search}>
            <TextField
                placeholder="Поиск..."
                value={searchRequest}
                name="search"
                onChange={setSearchRequest}
            />
            <div className={classes.search__icon}>
                <Image width={30} src={searchIcon} alt="searchIcon" />
            </div>
        </div>
    );
};
