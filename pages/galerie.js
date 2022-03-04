import Layout from "../components/Layout";
import Image from 'next/image'
import Head from "../components/Head";



export default function Galerie({res}){
    console.log(res)
    
    
    const myLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`
    }
   
    

        return(
          <>
          <Head/>
            <Layout page='Galerie'>

                
                <div>
                    <h1></h1>
                    <br /><br />


                    <ul className="grid grid-cols-4 gap-4">
         {res.map((photos,id) =>(
           <li key={id} className='relative hover:shadow-md p-8
           border border-blue-300 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5 cursor-pointer'>

             <div >
             <a className='rounded-md'>
               <div className="text-center">
                 <Image src={`http://localhost:1337`+photos.img[0].formats.large.url} alt={photos.name}
                 loader={myLoader}
                 width={700}
                 height={700}
                 className="hover:scale-125 transition duration-700 ease-in-out rounded-3xl"/>
               </div>
               <p className='text-sm mb-6 uppercase tracking-wider'>
                 {photos.name}
               </p>
               
              </a>
             </div>
           </li>
         ))}
       </ul>

                    <div className='form-check'>
                        <ul className='h-56 grid grid-cols-6 gap-4 content-center liste'>
                             <li>
                             <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Mariage" id="Mariage"/>
                             <label class="form-check-label inline-block text-gray-800" for="Mariage">
                             Mariage
                             </label>
                             </li>
                             <li>
                             <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Grossesse" id="Grossesse checked"/>
                             <label class="form-check-label inline-block text-gray-800" for="Grossesse">
                             </label>
                             Grossesse
                             </li>
                             <li>
                             <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-400 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Baptême" id="Baptême checked"/>
                             <label class="form-check-label inline-block text-gray-800" for="Baptême">
                             Baptême
                             </label>
                             </li>
                             <li>
                             <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-300 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Couple" id="Couple checked"/>
                             <label class="form-check-label inline-block text-gray-800" for="Couple">
                             Couple
                             </label>
                             </li>
                             <li>
                             <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-200 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Famille" id="Famille checked"/>
                             <label class="form-check-label inline-block text-gray-800" for="Famille">
                             Famille
                             </label>
                             </li>  
                             <li>
                             <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-100 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="Bébé" id="Bébé checked"/>
                             <label class="form-check-label inline-blok text-gray-800" for="Bébé">
                             Bébé
                             </label>
                             </li>            
                        </ul>            
                    </div>
                </div>
              
            </Layout>
            </>
        )
    }
    


    

export async function getStaticProps(res){
    try{
      const res = await fetch(
       "http://localhost:1337/photos"
      ).then((res) => res.json());
      console.log("le serveur a retourné les donnees")
      
      
        
  
      return{
        props: {res}
      };
      
    }catch (err){
      console.error(err);
      
    }
      
}