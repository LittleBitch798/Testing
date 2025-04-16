
import React, { useState } from 'react'
import { useGlobalStore } from './index'
const StatusDisplay = () => {
    const { isOn } = useGlobalStore()
  
    return (
      <div
        style={{
          padding: '20px',
          backgroundColor: isOn ? '#e8f5e9' : '#ffebee',
          borderRadius: '5px',
          border: '1px solid #ddd'
        }}
      >
        <h2>开关状态展示</h2>
        <p>当前开关状态：{isOn ? '已开启' : '已关闭'}</p>
      </div>
    )
  }
  
  export default StatusDisplay
  