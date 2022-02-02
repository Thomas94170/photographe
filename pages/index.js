
import Layout from "../components/Layout";



export default function Home({res}) {
  console.log(res);
  return (
    <div>
      <Layout page = {'Charles Cantin - Accueil'}>
                <div>
                    <img src='main.jpg' alt='img-menu' width='100%' height='100%'/>
                    
                </div>
      </Layout>
       
    </div>
  )
}

