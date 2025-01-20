import classes from './socials.module.scss';
import Image from 'next/image';
import tel from '@/assets/icons/tel.svg';
import telegram from '@/assets/icons/telegram.svg';
import whatsapp from '@/assets/icons/whatsapp.svg';
import Link from 'next/link';

export const Socials = () => {
    return (
        <div className={classes.socials}>
            <Link href="">
                <Image width={30} src={tel} alt={'tel'} />
            </Link>
            <Link href="">
                <Image width={30} src={telegram} alt={'telegram'} />
            </Link>
            <Link href="">
                <Image width={30} src={whatsapp} alt={'whatsapp'} />
            </Link>
        </div>
    );
};
