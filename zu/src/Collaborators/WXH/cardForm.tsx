import { useState } from "react";

//图片数组
const imagePaths = [
    "https://q7.itc.cn/images01/20240412/aa904661ca3f402ba5751ff0b521ec4b.jpeg",
    "https://gips1.baidu.com/it/u=3390480374,362429507&fm=3003&app=3003&f=JPEG?w=4621&h=2804",
    "https://pic.rmb.bdstatic.com/bjh/down/69c1ab8cc2f06684775242e6deff0843.jpeg"  
];

const CardForm = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    };

    return (
        <div
            className={`
                 rounded-lg p-6 transition-all duration-300 relative
                ${isHovered ? 'translate-y-[-5px] shadow-lg' : 'shadow-sm'}
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 显示图片 */}
            <img
                src={imagePaths[currentImageIndex]}
                alt="示例图片"
                className="w-full h-auto mb-4 rounded-md"
            />

            {/* 切换图片按钮 */}
            {isHovered && (
                <button
                    className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 
                    bg-gray-800 text-white px-3 py-1 rounded text-sm"
                    onClick={handleNextImage}
                >
                    下一张图片
                </button>
            )}
        </div>
    );
};

export default CardForm;