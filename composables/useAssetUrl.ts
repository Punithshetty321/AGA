import { useRuntimeConfig } from 'nuxt/app'

export function useAssetUrl() {
  const config = useRuntimeConfig()
  
  return (path: string) => {
    if (path.startsWith('http') || path.startsWith('//')) {
      return path
    }
    return `${config.app.baseURL}assets/${path}`
  }
}