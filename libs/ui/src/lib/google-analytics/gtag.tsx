import {useRouter} from 'next/router'
import Script from 'next/script'
import {useEffect} from 'react'

export const GA_ID = "UA-48328952-1";

// PVを測定する
export const pageView = (path: string) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
}

// GAイベントを発火させる
export const event = ({action, category, label, value = ''}: Event) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label ? JSON.stringify(label) : '',
    value,
  })
}

// _app.tsx で読み込む
export const usePageView = () => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (path: string) => {
      pageView(path)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
}

// _app.tsx で読み込む
export const GoogleAnalytics = () => (
  <>
    <Script defer src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive"/>
    <Script
      defer
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
      }}
      strategy="afterInteractive"
    />
  </>
)

// イベントを型で管理
type ContactEvent = {
  action: 'submit_form'
  category: 'contact'
}

type ClickEvent = {
  action: 'click'
  category: 'other'
}

export type Event = (ContactEvent | ClickEvent) & {
  label?: Record<string, string | number | boolean>
  value?: string
}
