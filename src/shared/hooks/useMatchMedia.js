'use client';
import { useLayoutEffect, useState } from 'react';

const UseMatchMedia = () => {
    const screens = ['isMobile', 'isTablet', 'isDesktop'];
    const queries = [
        '(max-width: 768px)',
        '(min-width: 769px) and (max-width: 1210px)',
        '(min-width: 1211px)',
    ];

    const match = window.matchMedia ?? [];
    const mediaQueriesList = queries.map(match);

    const matches = () => mediaQueriesList.map((mql) => mql.matches);
    const [values, setValues] = useState(matches);

    useLayoutEffect(() => {
        const handler = () => setValues(matches);
        mediaQueriesList.forEach((mql) =>
            mql.addEventListener('change', handler)
        );
        return () =>
            mediaQueriesList.forEach((mql) =>
                mql.removeEventListener('change', handler)
            );
    });

    return screens.reduce(
        (acc, screen, index) => ({
            ...acc,
            [screen]: values[index],
        }),
        {}
    );
};

export default UseMatchMedia;
