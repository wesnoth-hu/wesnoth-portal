import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
//import Register from './register'


export default function App({statical,logo}) {
  return (
      <>
      <Head>
        <title>Magyar Wesnoth Közösségi Portál</title>
        <meta name="description" content="Magyar Wesnoth Közösségi Portál" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
            <div className={styles.logo}>
              <Image
                src={logo}
                alt="Logo"
                width={415}
                height={189}
                priority
              />
            </div>

            <div className={styles.list}>
              <ul>
                <li>
                  <a
                    href="https://discord.gg/a9YHdtq"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={statical[0]["url"]}
                      alt='Discord Logo'
                      width={17}
                      height={17}
                      priority
                    />
                   Csatlakozz Discordon
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/MagyarWesnothKozosseg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={statical[1]["url"]}
                      alt='Facebook Logo'
                      width={17}
                      height={17}
                      priority
                    />
                   Csatlakozz Facebookon
                  </a>
                </li>
                <li>
                  <a
                    href="https://wesnoth.itch.io/battle-for-wesnoth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={statical[2]["url"]}
                      alt='Itch.io Logo'
                      width={17}
                      height={17}
                      priority
                    />
                   Itch.io Letöltés
                  </a>
                </li>
                <li>
                  <a
                    href="https://store.steampowered.com/app/599390/Battle_for_Wesnoth/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={statical[3]["url"]}
                      alt='Steam Logo'
                      width={17}
                      height={17}
                      priority
                    />
                   Steam Letöltés
                  </a>
                </li>
              </ul>
            </div>
        </main>
        {/* <Register /> */}
      </>
  )
}



export async function getStaticProps() {
  {/*statikus ikonok */}
  const req = await fetch('https://x23r8kwf.apicdn.sanity.io/v2021-10-21/data/query/development?query=*%5B_type%20%3D%3D%20%22statical%22%20%26%26%20upload.%5B%22_type%22%5D%20%3D%3D%20%22image%22%5D%20%7C%20order(caption%20asc)%7B%22url%22%20%3A%20upload.asset-%3Eurl%7D');
  let res = await req.json();
  let statical = res.result;

  {/*logo-hu */}
  const req1 = await fetch('https://x23r8kwf.apicdn.sanity.io/v2021-10-21/data/query/development?query=*%5B_type%20%3D%3D%20%22logo%22%20%26%26%20caption%20%3D%3D%20%22logo-hu%22%5D%7B%22url%22%3Aupload.asset-%3Eurl%7D');
  let res1 = await req1.json();
  let logo = res1.result[0]["url"];

  // console.log(statical);
  // console.log(logo);
 
  return {
    props: {
      statical,
      logo,
    }
  }
}
