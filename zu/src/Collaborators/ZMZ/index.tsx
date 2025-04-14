import { InputComponent } from "./InputComponent";  // 导入InputComponent组件
import { CounterComponent } from "./CounterComponent";  // 导入CounterStore组件
import{DisplayComponent} from "./DisplayComponent";  // 导入DisplayComponet组件

export const ZMZ=()=>{  // 定义并导出一个名为ZMZApp的函数组件
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center' }}>全局状态管理演示</h2>
          <InputComponent />
          <CounterComponent />
          <DisplayComponent />
        </div>
      );
    };