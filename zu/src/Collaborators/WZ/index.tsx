import { useEffect } from'react';
import { useStore } from '../../zuStand/index';

const WZ: React.FC = () => {
    const { toggleBinaryMode, toggleTextBold } = useStore();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'z') {
                toggleBinaryMode();
            }
            if (e.key === 'w') {
                toggleTextBold();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleBinaryMode, toggleTextBold]);

    return null;
};

export default WZ;    