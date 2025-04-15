import ARTBAN from './ARTBAN';
import { useStore } from '../../zuStand/index';

const LJJPUZZ = () => {
    const { preferences: { theme } } = useStore();

    return (
        <div className={`flex flex-col justify-center items-center border-2 p-4 rounded-lg max-w-md mx-auto ${
            theme === 'dark'
                ? 'border-pink-300 bg-rose-200 text-green-200'
                : 'border-indigo-500 bg-indigo-100 text-indigo-700'}`}>
            <ARTBAN />
        </div>
    );
};
export default LJJPUZZ;    