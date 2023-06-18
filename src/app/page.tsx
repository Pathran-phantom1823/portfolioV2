import Image from 'next/image'
import Layout from './layout'
import Banner from '@/components/Banner'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Layout>
        <section className='bg-black min-h-screen p-24'>
          <Banner />
        </section>
      </Layout>
    </main>
  )
}
