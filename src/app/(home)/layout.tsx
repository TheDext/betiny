//@ts-nocheck
import Header from '@/components/header/header';
import ActionsBar from '@/components/actionBar/actionsBar';

export default function HomeLayout({ children, modal }) {
    return (
        <div className="_container">
            <Header />
            <ActionsBar />
            <main>{children}</main>
            {modal}
        </div>
    );
}
