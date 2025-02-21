//@ts-nocheck
'use client';
import classes from './modal.module.scss';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { useRouter } from 'next/navigation';
export default function Modal({ children }) {
    const router = useRouter();
    const ref = useRef();

    useClickAway(ref, () => {
        router.back();
    });

    return (
        <div className={classes.modal}>
            <div ref={ref} className={classes.modal__body}>
                {children}
            </div>
        </div>
    );
}
