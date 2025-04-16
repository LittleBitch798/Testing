
import React, { useState } from 'react'
import { useGlobalStore } from './index'
const ToggleButton = () => {
    const { isOn, toggleSwitch } = useGlobalStore()
  
    return (
      <div style={{ marginBottom: '20px' }}>
        <h2>切换开关</h2>
        <button
          onClick={toggleSwitch}
          style={{
            padding: '10px 20px',
            backgroundColor: isOn ? '#4caf50' : '#f44336',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          当前状态：{isOn ? '开启' : '关闭'}
        </button>
      </div>
    )
  }
  
  export default ToggleButton