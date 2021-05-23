import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [dataTechnology, setdataTechnology] = React.useState([
    {'id': 1, 'name': '/tech/laravel.webp', 'text': 'laravel', 'key': 'laravel'},
    {'id': 2, 'name': '/tech/vuejs.webp', 'text': 'vueJS', 'key': 'vueJS'},
    {'id': 3, 'name': '/tech/nuxt.webp', 'text': 'nuxtJS', 'key': 'nuxtJS'},
    {'id': 4, 'name': '/tech/reactjs.webp', 'text': 'reactJS', 'key': 'reactJS'},
    {'id': 5, 'name': '/tech/reactnative.webp', 'text': 'react native', 'key':  'reactnative'},
    {'id': 6, 'name': '/tech/node.webp', 'text': 'nodeJS', 'key': 'nodeJS'},
  ])

  return (
    <div>
      <Head>
        <title>Ubay Dillah</title>
        <link rel='manifest' href='/manifest.json' />
        <link rel="icon" href="/fav.png" />
      </Head>

      {/* email me */}
      <div className="menu absolute top-6 left-2 z-10 flex flex-row justify-start items-center ">
          <div className="mr-2">
            <Link  href="/project" > 
              <a className="russo_one underline text-base">Project</a> 
            </Link>
          </div>

          <div className="mr-2">
            <a 
              target="_blank" 
              className="russo_one underline text-base" 
              href="mailto:ubay00804@gmail.com?subject=hire me"
            >kontak</a>
          </div>
      </div>
      
      <div className="grid-container">
        {/* foto */}
        <div
          className="bg-img-profile "
        >
          <div className="img-relative">
            <Image
              className="img-profile"
              alt="my photo"
              src="/me/me.png"
              layout="fill"
              objectFit="cover"
              quality={20}
            />
          </div>
        </div>

        {/* data */}
        <div
          className="mt-4 m-3 flex flex-col"
        >
          <div 
            className="russo_one text-center"
            style={{
              fontSize: 40
            }}
          >
            Hi saya Ubay Dillah
          </div>

          <div 
            className="p-4 border-blue-300 border-solid border-2 mt-4 "
            style={{
              backgroundColor: '#e4f0fa',
              boxShadow: '-8px 8px 1px #93c5fd',
            }}
          >
            <div 
              className="russo_one text-center"
              style={{
                fontSize: 28,
              }}
            >
              Apa yang saya kerjakan ?
            </div>
            <p
              className="roboto_mono text-justify"
            >
              Saya seorang Software Engineering dari < a href = "https://goiot.id"
              className = "text-blue-500" > Goiot.id </a>.Goiot adalah platform cloud untuk solusi internet of things yang memungkinkan pengguna untuk dengan mudah terhubung, menyimpan, membuat visual, dan mengelola data IoT langsung sesuai kebutuhan.Di Goiot, saya bertugas mengembangkan situs web, termasuk membuat widget untuk kebutuhan pengguna.
            </p>
          </div>

          <div 
            className="p-4 border-blue-300 border-solid border-2 "
            style={{
              backgroundColor: '#e4f0fa',
              boxShadow: '8px 8px 1px #93c5fd',
            }}
          >
            <div 
              className="russo_one text-left"
            >
              <div 
                className="mb-4"
              >
                <p
                  style={{
                    fontSize: 28,
                  }}
                >
                  Lebih banyak tentang saya
                </p>
                <p
                  className="roboto_mono text-justify"
                >
                  Saya bekerja keras untuk mempelajari teknologi baru
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontSize: 28,
                  }}
                >
                  Teknologi yang digunakan
                </p>

                <div className="grid-technology">
                  {
                    dataTechnology.map((item, index) => {
                      return(
                        <>
                        <div className="flex justify-center items-center flex-col">
                          <img
                            key={`index name-${item.key}`}
                            className="img-tech"
                            alt="my photo"
                            src={item.name}
                            style={{
                              width: '100%',height: '100%', objectFit: 'cover'
                            }}
                          />
                          <div> 
                            {item.text}
                          </div>
                        </div>
                        </>
                      )
                    })
                  }


                  {/* <img
                    alt="my photo"
                    src="/laravel.jpg"
                    style={{
                      width: 100, height: 50
                    }}
                  /> */}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
