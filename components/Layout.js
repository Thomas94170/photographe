import Head from "next/head"
import Image from "next/image"
import Link from "next/link"


export default function Layout({children, page}){
    return(

    <div className='bg-blue-50 text-center min-h-screen font-sans'>
        <Head>
            <title>{page}</title>
        </Head>
        <header className='container-lg'>
            {/* <h1 className='text-5xl mb-2'>CRYPTO À SUIVRE</h1> */}
            <div className='flex justify-evenly'>
               <Link href='/'>
                <button className='bg-sky-800 p-3 m-2 rounded-full hover:shadow-md border-2 border-grey-300'>
                    Accueil
                </button>
               </Link> 
               <Link href='/galerie'>
                <button className='bg-sky-800 p-3 m-2 rounded-full hover:shadow-md border-2 border-grey-300'>
                    Galerie
                </button>
               </Link> 
               <Link href='/tarif'>
                <button className='bg-sky-800 p-3 m-2 rounded-full hover:shadow-md border-2 border-grey-300'>
                    Tarifs-Prestations
                </button>
               </Link> 
               <Link href='/contact'>
                <button className='bg-sky-800 p-3 m-2 rounded-full hover:shadow-md border-2 border-grey-300'>
                    Contact
                </button>
               </Link> 
            </div>
            <div>
                <Image src='/app-photo.jpg' alt='app-photo' 
                width='1000' height= '30' 
                className='rounded-3xl object-cover' quality={100}/>
            </div>
        </header>
        <main className='pt-4 mx-20'>{children}</main>

        <footer className='p-10'>
            <Image src='/app-photo.jpg' alt='app-photo' 
                width='1000' height= '30' 
                className='rounded-3xl object-cover' quality={100}/>
                <ul className='pt-10 pb-4 flex justify-around'>
                <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer ' className='hover'>
                <li>
                    <i className='fab fa-facebook-f'><img src="https://img.icons8.com/color/48/000000/facebook.png"/></i>
                </li>
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer ' className='hover'>
                <li>
                    <i className='fab fa-instagram'><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/></i>
                </li>
            </a>
                    <li>ThomasDevWeb94</li>
                </ul>
                <p>Je ne me limite pas. La photographie est un Art, et l’Art n’a pas de limites. Je photographie ce qui m’anime, 
                    ce qui m’inspire, ce que je ressens. Tout est dans le cœur et dans l’âme.
                    Amicalement Charles Cantin
                </p>
        </footer>
        {/*comment modifier uniquement par exemple le p de cette page */}

        <style jsx>{`
            p{
                color:grey;
            }
        `}
        </style>

    </div>

    );
}