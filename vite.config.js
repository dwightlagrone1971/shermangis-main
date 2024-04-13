import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
    if (command === 'serve') {
        return {
            plugins: [vue()]
        }
    } else {
        return {
            plugins: [vue()],
            build: {
                target: ['chrome60', 'firefox60', 'safari11', 'edge18'],
            }
        }
    }
})