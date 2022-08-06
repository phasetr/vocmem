import { useEffect } from 'react'
import { useRouter } from "next/router";
import { pageView } from './gtag'

export function usePageView() {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (path) => {
      pageView(path)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}
export default usePageView;
