// 文件路径: src/store/useGlobalStore.ts
import { create } from 'zustand'

interface GlobalState {
  name: string
  age: number
  isOn: boolean
  updateUserInfo: (name: string, age: number) => void
  toggleSwitch: () => void
}

export const useGlobalStore = create<GlobalState>((set) => ({
  // 用户信息状态
  name: '未知',
  age: 0,

  // 开关状态
  isOn: false,

  // 更新用户信息的方法
  updateUserInfo: (name, age) =>
    set(() => ({
      name,
      age
    })),

  // 切换开关状态的方法
  toggleSwitch: () =>
    set((state) => ({
      isOn: !state.isOn
    }))
}))