import { create } from 'zustand'

type Store = {
  count: number
  message: string
  isDuck: boolean
  // 新增用户偏好设置
  preferences: {
    theme: 'light' | 'dark'
    notifications: boolean
  }
  
  // count操作方法
  increment: () => void
  reduce: () => void

  // message操作方法
  setMessage: (msg: string) => void

  // isDuck操作方法
  toggleTheme: () => void

  // preferences操作方法
  toggleNotifications: () => void
}

export const useStore = create<Store>((set) => ({
  count: 0,
  message: '',
  isDuck: false,
  preferences: {
    theme: 'light',
    notifications: true
  },

  increment: () => set((state) => ({ count: state.count + 1 })),//加法器
  reduce: () => set((state) => ({ count: state.count - 1 })),//减法器

  // 消息更新
  setMessage: (msg) => set({ message: msg }),
  
  // 主题切换
  toggleTheme: () => set((state) => ({
    preferences: {
      ...state.preferences,
      theme: state.preferences.theme === 'light' ? 'dark' : 'light'
    }
  })),

  toggleNotifications: () => set((state) => ({
    preferences: {
      ...state.preferences,
      notifications: !state.preferences.notifications
    }
  }))
}))