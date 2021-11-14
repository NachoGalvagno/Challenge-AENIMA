import Head from 'next/head'
import BannerDesktop from '../components/Banner/BannerDesktop'
import CartaBlogDesktop from '../components/CartaBlog/CartaBlogDesktop'
import HeaderDesktop from '../components/Header/HeaderDesktop'
import TendenciasDesktop from '../components/Tendencias/TendenciasDesktop'

export default function Home() {
  return (
      <>
        <Head>
          <title>AENIMA APP</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container-desktop">
          <HeaderDesktop/>
          <BannerDesktop/>
          <TendenciasDesktop/>
          <CartaBlogDesktop/>
        </div>
      </>
  )
}
