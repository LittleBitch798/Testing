import { create } from 'zustand';

type Store = {
    count: number;
    message: string[];
    isDuck: boolean;
    // 新增用户偏好设置
    preferences: {
        theme: 'light' | 'dark';
        notifications: boolean;
    };
    //wz
    binaryMode: boolean;
    isTextBold: boolean;
    toggleBinaryMode: () => void;
    toggleTextBold: () => void;
    // count 操作方法
    increment: () => void;
    reduce: () => void;

    // message 操作方法
    addTodo: (todo: string) => void;

    // isDuck 操作方法
    toggleDuck: () => void;

    toggleTheme: () => void;

    // preferences 操作方法
    toggleNotifications: () => void;
};

export const useStore = create<Store>((set) => ({
    count: 0,
    message: [],
    isDuck: true,
    preferences: {
        theme: 'light',
        notifications: true,
    },
    binaryMode: false,
    isTextBold: false,
    toggleBinaryMode: () => set((state) => ({ binaryMode:!state.binaryMode })),
    toggleTextBold: () => set((state) => ({ isTextBold:!state.isTextBold })),
    
    increment: () => set((state) => ({ count: state.count + 1 })),
    reduce: () => set((state) => ({ count: state.count - 1 })),

    // 消息更新
    addTodo: (todo: string) => set((state) => ({ message: [...state.message, todo] })),

    // 主题切换
    toggleDuck: () => set((state) => ({ isDuck:!state.isDuck })),

    toggleTheme: () => set((state) => ({
        preferences: {
            ...state.preferences,
            theme: state.preferences.theme === 'light'? 'dark' : 'light',
        },
    })),

    toggleNotifications: () => set((state) => ({
        preferences: {
            ...state.preferences,
            notifications:!state.preferences.notifications,
        },
    })),
}));    