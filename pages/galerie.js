import Layout from "../components/Layout";
import Image from 'next/image'
import Head from "../components/Head";
import axios from "axios";



export default function Galerie({data}){
    console.log(data)
    
    
    const myLoader = ({ src, width, quality }) => {
      return `${src}?w=${width}&q=${quality || 75}`
    }
   
    

        return(
          <>
          <Head/>
            <Layout page='Galerie'>
              {/* <div>{JSON.stringify(data)}</div> */}
            <br /><br />
            <ul className="grid grid-cols-4 gap-4">
            {data.map(photo =>(
            <li key ={photo.id} className='relative hover:shadow-md p-8
                border border-blue-300 rounded-3xl md:w-auto flex-1 mx-5 cursor-pointer'> 
              <div>
                  <Image src={photo.img[0].formats.medium.url} alt={photo.name}
                    loader={myLoader}
                    width={700}
                    height={700}
                    className="hover:scale-125 transition duration-700 ease-in-out rounded-3xl"/>
              </div>
              <p>{photo.name}</p>
              <br />
            </li>
            ))}
            </ul>
              
                <div>   
                    <br /><br />
                    <div className='form-check'>
                        <ul className='h-56 grid grid-cols-6 gap-4 content-center liste'>
                             <li>
                             <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Mariage" id="Mariage"/>
                             <label className="form-check-label inline-block text-gray-800" htmlFor="Mariage">
                             Mariage
                             </label>
                             </li>
                             <li>
                             <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-500 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Grossesse" id="Grossesse checked"/>
                             <label className="form-check-label inline-block text-gray-800" htmlFor="Grossesse">
                             </label>
                             Grossesse
                             </li>
                             <li>
                             <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-400 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Baptême" id="Baptême checked"/>
                             <label className="form-check-label inline-block text-gray-800" htmlFor="Baptême">
                             Baptême
                             </label>
                             </li>
                             <li>
                             <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-300 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Couple" id="Couple checked"/>
                             <label className="form-check-label inline-block text-gray-800" htmlFor="Couple">
                             Couple
                             </label>
                             </li>
                             <li>
                             <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-200 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" value="Famille" id="Famille checked"/>
                             <label className="form-check-label inline-block text-gray-800" htmlFor="Famille">
                             Famille
                             </label>
                             </li>  
                             <li>
                             <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-100 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="Bébé" id="Bébé checked"/>
                             <label className="form-check-label inline-blok text-gray-800" htmlFor="Bébé">
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
    


    

    export const getStaticProps = async(context) =>{
      const url = "https://bdd-charlescantin.herokuapp.com"
      const {data} = await axios.get(`${url}/photos`);
      const photos = data.data
    
      return{
        props:{data}
      }
    }