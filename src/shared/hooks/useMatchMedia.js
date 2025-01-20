'use client';

import { useLayoutEffect, useState } from 'react';

const UseMatchMedia = () => {
    const screens = ['isMobile', 'isTablet', 'isDesktop'];
    const queries = [
        '(max-width: 768px)',
        '(min-width: 769px) and (max-width: 1210px)',
        '(min-width: 1211px)',
    ];

    // const [mediaQueriesList, setMediaQueriesList] = useState([]);
    const [values, setValues] = useState({});

    useLayoutEffect(() => {
        if (typeof window !== 'undefined') {
            const list = queries.map((query) => window.matchMedia(query));
            // setMediaQueriesList(list);
            const initialMatches = list.map((mql) => mql.matches);
            setValues(
                screens.reduce(
                    (acc, screen, index) => ({
                        ...acc,
                        [screen]: initialMatches[index],
                    }),
                    {}
                )
            );

            const handler = () => {
                const newMatches = list.map((mql) => mql.matches);
                setValues(
                    screens.reduce(
                        (acc, screen, index) => ({
                            ...acc,
                            [screen]: newMatches[index],
                        }),
                        {}
                    )
                );
            };

            list.forEach((mql) => mql.addEventListener('change', handler));

            return () =>
                list.forEach((mql) =>
                    mql.removeEventListener('change', handler)
                );
        }
    }, []);

    return values;
};

export default UseMatchMedia;
