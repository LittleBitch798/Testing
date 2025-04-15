import CardForm from './cardForm';
import { useStore } from '../../zuStand/index';

const WxhTXT = () => {
    const { preferences: { theme } } = useStore();

    return (
        <div className={`flex flex-col justify-center items-center border-2 p-4 rounded-lg max-w-md mx-auto ${
            theme === 'dark'
                ? 'border-purple-300 bg-purple-500 text-yellow-200'
                : 'border-teal-500 bg-teal-100 text-teal-700'}`}>
            <CardForm />
        </div>
    );
};
export default WxhTXT;    