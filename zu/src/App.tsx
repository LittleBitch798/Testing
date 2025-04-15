import { useStore } from './zuStand';
import HLS from './Collaborators/HLS/index';
import WXH from './Collaborators/WXH/index';
import WZ from './Collaborators/WZ';
import React, { useEffect } from'react';

function App() {
    const { preferences: { theme }, binaryMode, isTextBold } = useStore();
    useEffect(() => {
      //wz
        document.body.style.fontFamily = binaryMode? 'monospace' : '';
        document.body.style.fontWeight = isTextBold? 'bold' : 'normal';
    }, [binaryMode, isTextBold]);

    return (
        <>
            <div className={`fixed top-0 left-0 w-screen h-screen ${theme === 'dark'? 'bg-gray-800' : 'bg-gray-50'}`}>
                <HLS />
                <WXH />
                <WZ />
            </div>
        </>
    );
}

export default App;    