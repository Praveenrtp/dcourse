import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { studioTheme } from '../ui-components'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import '../styles/globals.css'
import '@fontsource/inter'
import awsconfig from '../aws-exports'
import { Amplify } from 'aws-amplify'

Amplify.configure(awsconfig);
export default function App({ Component, pageProps }: AppProps) {
  return <AmplifyProvider theme={ studioTheme } >
    <Component {...pageProps} />
  </AmplifyProvider>

}
