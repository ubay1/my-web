import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DataProject = ({data}) => {
  console.log(data)
  return (
    <div className="container my-12 mx-auto px-4">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {
              data.map((item, index) => {
                return(
                  <div 
                    key={`index ke-${item.id}`} 
                    className="my-1 px-1 w-full mt-8 md:w-1/2 md:px-4 lg:my-4 lg:px-4 lg:w-1/3"
                  >
                    <div className="overflow-hidden rounded-lg shadow-lg">
                      <div
                        className="w-full"
                      >
                        <Image
                          className="object-cover"
                          alt="my photo"
                          src={item.gambar}
                          layout="responsive"
                          width={100}
                          height={50}
                          quality={20}
                        />
                      </div>

                      <div className="flex items-center justify-between leading-tight p-2 md:p-4">
                          <h1 className="text-lg">
                              <div 
                                className="russo_one text-sm no-underline text-black"
                              >
                                {item.judul}
                              </div>
                              <div 
                                className="roboto_mono text-xs no-underline hover:underline text-blue-500"
                              >
                                <a target="_blank" href={item.link === 'local only' ? '#' : item.link}>
                                  {
                                    item.link === 'local only' ? 'lokal project' : 'klik disini'
                                  }
                                </a>
                              </div>
                          </h1>
                      </div>
                    <div className="flex items-center justify-between leading-none p-2 md:p-4">
                      <div className="flex items-center no-underline">
                        {
                          item.tech.map((item2, index2) => {
                            return (
                              <div
                              className="mr-2 flex justify-center items-center flex-col"
                              >
                                <Image
                                  key={`tech-image-${index2}`}
                                  alt="my photo"
                                  src={item2.image}
                                  layout="fixed"
                                  width={30}
                                  height={30}
                                  objectFit="cover"
                                  quality={20}
                                  className="mr-1"
                                />
                                <div className="text-xs "> {item2.text} </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                    </div>
                    

                  </div>
                )
              })
            } 
            </div>
          </div>
  )
}

export default function Project() {
  const [data, setdata] = React.useState([
    {
      id: 1,
      gambar: '/proyek/myweb.webp', 
      judul: 'web portfolio', 
      link: 'https://my-web.ubay00804.vercel.app',
      tech: [
        {image: '/proyek/nextjs.webp', text: 'nextJS'}, 
        {image:'/proyek/tailwind.webp', text: 'tailwind' }
      ] 
    },
    {
      id: 2,
      gambar: '/proyek/lokkali-web.webp', 
      judul: 'lokkali', 
      link: 'https://lokkali.co.id',
      tech: [
        {image: '/proyek/laravel.webp', text: 'laravel'}, 
        {image:'/proyek/vue.webp', text: 'vueJS' }
      ] 
    },
    {
      id: 3,
      gambar: '/proyek/isengiseng.webp', 
      judul: 'blog', 
      link: 'https://isengiseng.netlify.app',
      tech: [
        {image: '/proyek/nuxtjs.webp', text: 'nuxtJS'}
      ] 
    },
    {
      id: 4,
      gambar: '/proyek/lelango.webp', 
      judul: 'lelango', 
      link: 'https://lelango.now.sh',
      tech: [
        {image: '/proyek/laravel.webp', text: 'laravel'},
        {image: '/proyek/nuxtjs.webp', text: 'nuxtJS'}
      ] 
    },
    {
      id: 5,
      gambar: '/proyek/mws_web.webp', 
      judul: 'mobile web specialist', 
      link: 'https://ubay-mws.firebaseapp.com',
      tech: [
        {image: '/proyek/js.webp', text: 'vanillaJS'}
      ] 
    },
    {
      id: 6,
      gambar: '/proyek/pakmontir.webp', 
      judul: 'pak montir', 
      link: 'local only',
      tech: [
        {image: '/proyek/laravel.webp', text: 'laravel'},
        {image: '/proyek/nuxtjs.webp', text: 'nuxtJS'}
      ] 
    },
    {
      id: 7,
      gambar: '/proyek/kebugaran_rohani.webp',
      judul: 'kebugaran rohani', 
      link: 'https://kebugaranrohani.surge.sh',
      tech: [
        {image: '/proyek/svelte.webp', text: 'svelteJS'}
      ] 
    },
    {
      id: 8,
      gambar: '/proyek/movie.webp',
      judul: 'List Movie App', 
      link: 'local only',
      tech: [
        {image: '/proyek/react.webp', text: 'reactJS'}, 
        {image:'/proyek/tailwind.webp', text: 'tailwind' }
      ] 
    },
    {
      id: 9,
      gambar: '/proyek/catatan_uangku.webp',
      judul: 'Catatan Uangku',
      link: 'https://play.google.com/store/apps/details?id=com.catatanuangku',
      tech: [{
          image: '/proyek/react.webp',
          text: 'react native'
        },
      ]
    },
    {
      id: 10,
      gambar: '/proyek/homi.webp',
      judul: 'Homi (Smart Home)',
      link: 'https://play.google.com/store/apps/details?id=com.smarthomegoiot',
      tech: [{
        image: '/proyek/react.webp',
        text: 'react native'
      }, ]
    },
  ])
  
  
    return (
      <div>
        <Head>
          < title > Ubay Dillah ~ Project </title>
          <link rel='manifest' href='/manifest.json' />
          <link rel="icon" href="/fav.webp" />
        </Head>

        < div className = "flex flex-col justify-center items-center mt-8 px-1 lg:px-1 md:px-4 sm:px-1" >
          {/* <h1 className="russo_one no-underline text-center text-2xl mt-4">My Project</h1> */}
          <Link href="/">
            <div className=" russo_one text-2xl cursor-pointer">Kembali</div>
          </Link>
        </div>
        <DataProject data={data}/>
      </div>
    )
  }