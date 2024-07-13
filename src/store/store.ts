import { create } from 'zustand'

type counterStore = {
    link:  string;
}

export const useCounterStore = create<counterStore>(() => ({
    link: 'ru'
}))