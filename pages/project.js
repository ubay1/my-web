import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DataProject = ({data}) => {
  // console.log(data.length)
  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {
              data.map((item, index) => {
                return(
                  <div key={`index ke-${index}`} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
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
                                  className="roboto_mono text-sm no-underline hover:underline text-black"
                                >
                                  {item.judul}
                                </div>
                            </h1>
                        </div>

                    </div>
                  </div>
                )
              })
            } 
            <Link href="/">
              <p className="mt-8 my-1 px-1 russo_one cursor-pointer">back</p>
            </Link>
            </div>
          </div>
  )
}

export default function Project() {
  const [data, setdata] = React.useState([
    {
      gambar: '/proyek/myweb.png', 
      judul: 'web portfolio', 
      tech: ['nextjs'] },
    {
      gambar: '/proyek/lokkali_web.png', 
      judul: 'lokkali', 
      tech: ['laravel', 'vuejs'] },
    {
      gambar: '/proyek/isengiseng.png', 
      judul: 'catatan/blog iseng-iseng', 
      tech: ['nuxtjs'] },
    {
      gambar: '/proyek/lelango.png', 
      judul: 'lelango', 
      tech: ['laravel','nuxtjs'] },
    {
      gambar: '/proyek/mws_web.png', 
      judul: 'mobile web specialist', 
      tech: ['javascript'] },
    {
      gambar: '/proyek/pakmontir.png', 
      judul: 'pak montir', 
      tech: ['laravel','nuxtjs'] }
  ])
  
  
    return (
      <div>
        <Head>
          <title>Project</title>
          <link rel="icon" href="/fav.png" />
        </Head>

        <h1 className="russo_one no-underline text-center text-2xl mt-4">My Project</h1>
        <DataProject data={data}/>
      </div>
    )
  }