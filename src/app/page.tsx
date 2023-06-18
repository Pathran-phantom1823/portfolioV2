import Image from 'next/image'
import Layout from './layout'
import Banner from '@/components/Banner'
import './styles.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Layout>
        <header  className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img px-16 md:px-0">
          <div className='overlay w-[100%] flex flex-row min-h-screen justify-center items-center'>
            <Banner />
          </div>
        </header>
        <div className="max-w-lg m-auto">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
            magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
            sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
            nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
            odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
            laoreet sem, semper molestie libero.
          </p>
          <p className="mb-4">
            Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
            fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
            non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
            Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
            varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
            semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
            ipsum, id consequat nulla nunc in ligula.
          </p>
          <p className="mb-12">
            Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
            dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
            dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
            fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
            fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
            vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
            neque.
          </p>
        </div>
        <section
          className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img"
        >
          <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
            Parralax inline
          </div>
        </section>
        <div className="max-w-lg m-auto">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
            magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
            sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
            nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
            odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
            laoreet sem, semper molestie libero.
          </p>
          <p className="mb-4">
            Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
            fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
            non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
            Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
            varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
            semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
            ipsum, id consequat nulla nunc in ligula.
          </p>
          <p className="mb-4">
            Nulla pharetra lacinia nisi, vitae mollis tellus euismod id. Mauris porta
            dignissim hendrerit. Cras id velit varius, fermentum lectus vitae, ultricies
            dolor. In bibendum rhoncus purus vel rutrum. Nam vulputate imperdiet
            fringilla. Donec blandit libero massa. Suspendisse dictum diam mauris, vitae
            fermentum dolor tincidunt in. Pellentesque sollicitudin venenatis dolor,
            vitae scelerisque elit ultrices eu. Donec eget sodales risus, quis dignissim
            neque.
          </p>
        </div>
      </Layout>
    </main>
  )
}
