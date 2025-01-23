import Header from '@/components/header/header';
import ActionsBar from '@/components/actionBar/actionsBar';
import Blur from '@/components/common/blur/blur';

export default function RootPage() {
    return (
        <main>
            <div className="_container">
                <Header />
                <ActionsBar />

                <Blur />
            </div>
        </main>
    );
}
