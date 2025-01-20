import Header from '@/components/header/header';
import ActionsBar from '@/components/actionBar/actionsBar';

export default function RootPage() {
    return (
        <main>
            <div className="_container">
                <Header />
                <ActionsBar />
            </div>
        </main>
    );
}
