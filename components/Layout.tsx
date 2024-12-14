import React from 'react'
import { JetBrains_Mono } from "next/font/google"

const Jet = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-Jet',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

import Nav from './Nav'
import Header from './Header'
import TopLeftImg from './TopLeftImg'

type ParamsProps = {
	children? : any
}

const Layout = ({children} : ParamsProps) => {
  return (
	  <div className={`page bg-site text-white bg-cover bg-no-repeat ${Jet.variable} font-JetBrains_Mono relative`}>
		  <TopLeftImg />
		  <Nav />
		  <Header />
		  {children}
	</div>
  )
}

export default Layout