import React, { useState, useEffect } from 'react';

//全局变量：随机颜色数组
const colorList = [
  'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray'
];

const ARTBAN: React.FC = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [buttonColor, setButtonColor] = useState('black');

  //用于每隔 2 秒随机改变按钮颜色
  useEffect(() => {
    const colorChangeInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * colorList.length);
      setButtonColor(colorList[randomIndex]);
    }, 2000);

    return () => {
      clearInterval(colorChangeInterval);
    };
  }, []);

  const handleButtonClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="p-4">
      <button
        className={`px-4 py-2 rounded text-white font-bold`}
        style={{ backgroundColor: buttonColor }}
        onClick={handleButtonClick}
      >
        {isTextVisible ? '隐藏文字' : '显示文字'}
      </button>
      {isTextVisible && (
        <p className="mt-4 text-orange-700 text-4xl font-black text-center"style={{ fontFamily: 'SimHei' }}>
          数值与膨胀<br/> 
          主推与路边<br/>
          版本的起始<br/>
          卡池的终末<br/>
          数值的洗牌<br/>
          尖锐的声音<br/>
        </p>
      )}
    </div>
  );
};

export default ARTBAN;