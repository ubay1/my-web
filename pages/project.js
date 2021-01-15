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
                    key={`index ke-${index}`} 
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
                                <a target="_blank" href={item.link === 'local only' ? '#' : item.link}>{item.link}</a>
                              </div>
                          </h1>
                      </div>
                    <div className="flex items-center justify-between leading-none p-2 md:p-4">
                      <div className="flex items-center no-underline">
                        {
                          item.tech.map((item2, index2) => {
                            return (
                              <div
                              className="mr-2"
                              >
                                <Image
                                  key={`tech-image-${index2}`}
                                  alt="my photo"
                                  src={item2}
                                  layout="fixed"
                                  width={25}
                                  height={25}
                                  quality={20}
                                />
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

            <Link href="/">
              <div className="mt-8 px-1 lg:px-1 md:px-4 sm:px-1 russo_one cursor-pointer">back</div>
            </Link>
          </div>
  )
}

export default function Project() {
  const [data, setdata] = React.useState([
    {
      gambar: '/proyek/myweb.png', 
      judul: 'web portfolio', 
      link: 'https://my-web.ubay00804.vercel.app',
      tech: ['/proyek/nextjs.png', '/proyek/tailwind.png'] 
    },
    {
      gambar: '/proyek/lokkali_web.png', 
      judul: 'lokkali', 
      link: 'https://lokkali.co.id',
      tech: ['/proyek/laravel.png', '/proyek/vue.png'] 
    },
    {
      gambar: '/proyek/isengiseng.png', 
      judul: 'blog', 
      link: 'https://isengiseng.netlify.app',
      tech: ['/proyek/nuxtjs.png'] 
    },
    {
      gambar: '/proyek/lelango.png', 
      judul: 'lelango', 
      link: 'https://lelango.now.sh',
      tech: ['/proyek/laravel.png','/proyek/nuxtjs.png'] 
    },
    {
      gambar: '/proyek/mws_web.png', 
      judul: 'mobile web specialist', 
      link: 'https://ubay-mws.firebaseapp.com',
      tech: ['/proyek/js.png'] 
    },
    {
      gambar: '/proyek/pakmontir.png', 
      judul: 'pak montir', 
      link: 'local only',
      tech: ['/proyek/laravel.png','/proyek/nuxtjs.png'] 
    },
    {
      gambar: '/proyek/kebugaran_rohani.png',
      judul: 'kebugaran rohani', 
      link: 'https://kebugaranrohai.surge.sh',
      tech: ['/proyek/svelte.png'] 
    },
    {
      gambar: '/proyek/movie.png',
      judul: 'List Movie App', 
      link: 'local only',
      tech: ['/proyek/react.png', '/proyek/tailwind.png'] 
    },
  ])
  
  
    return (
      <div>
        <Head>
          <title>Project</title>
          <link rel='manifest' href='/manifest.json' />
          <link rel="icon" href="/fav.png" />
        </Head>

        <h1 className="russo_one no-underline text-center text-2xl mt-4">My Project</h1>
        <DataProject data={data}/>
      </div>
    )
  }