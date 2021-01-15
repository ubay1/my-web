import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [dataTechnology, setdataTechnology] = React.useState([
    {'id': 1, 'name': '/laravel.jpg' },
    {'id': 2, 'name': '/vuejs.png' },
    {'id': 3, 'name': '/reactjs.png' },
    {'id': 4, 'name': '/reactnative.png' },
  ])

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='manifest' href='/manifest.json' />
        <link rel="icon" href="/fav.png" />
      </Head>

      {/* email me */}
      <ul
        className="absolute top-0 z-10 left-0  mt-8 w-28"
      >
        <li className="relative mb-16 float-left transform -rotate-90">
          <a 
            target="_blank" 
            className="roboto_mono no-underline text-base" 
            href="mailto:ubay00804@gmail.com?subject=hire me"
            style={{
              backgroundImage: 'linear-gradient(transparent 0%, transparent calc(50% - 1px), rgba(220, 180, 250, 0.35) calc(50% - 1px), rgba(220, 180, 250, 0.35) 100%)'
            }}
          >Hire me
          </a>
        </li>
        <li className="relative float-left transform -rotate-90">
          <Link 
            href="/project"
          > 
            <a
              className="roboto_mono no-underline text-base"
              style={{
                backgroundImage: 'linear-gradient(transparent 0%, transparent calc(50% - 1px), rgba(220, 180, 250, 0.35) calc(50% - 1px), rgba(220, 180, 250, 0.35) 100%)'
              }}
            >Project</a> 
          </Link>
        </li>
      </ul>
      
      <div className="grid-container">
        
        {/* foto */}
        <div
          className="bg-img-profile bg-blue-200"
        >
          <div className="img-relative">
            <Image
              className="img-profile"
              alt="my photo"
              src="/my.png"
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
            Hi i'm Ubay Dillah
          </div>

          <div 
            className="p-4 border-blue-300 border-solid border-2 mt-4 "
            style={{
              backgroundColor: '#e4f0fa'
            }}
          >
            <div 
              className="russo_one text-center"
              style={{
                fontSize: 28,
              }}
            >
              What i do ?
            </div>
            <p
              className="roboto_mono text-justify"
            >
              I am a Software Engineering from <a href="https://goiot.id" className="text-blue-500">Goiot.id</a> . Goiot is a cloud platform for internet of things solutions that allows users to easily connect, store, create visuals, and manage direct IoT data as needed. At Goiot, I am tasked with developing websites, including creating widgets for user needs.
            </p>
          </div>

          <div 
            className="p-4 border-blue-300 border-solid border-2 mt-4 "
            style={{
              backgroundColor: '#e4f0fa'
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
                  More about me
                </p>
                <p
                  className="roboto_mono text-justify"
                >
                  I work hard to learn new technologies
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontSize: 28,
                  }}
                >
                  Technology used
                </p>

                <div className="grid-technology">
                  {
                    dataTechnology.map((item, index) => {
                      return(
                        // <Image
                        //   key={index}
                        //   alt="my photo"
                        //   src={item.name}
                        //   layout="intrinsic"
                        //   quality={100}
                        //   width={100}
                        //   height={100}
                        // />
                        <img
                          key={`index name-${item.name}`}
                          className="img-tech"
                          alt="my photo"
                          src={item.name}
                          style={{
                            width: '100%', height: 80
                          }}
                        />
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
