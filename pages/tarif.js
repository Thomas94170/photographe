import Layout from "../components/Layout";

export default function Tarif(){

    return(
        <Layout page='Tarif'>
            <div className='tarif'>
            <h1 className="text-3xl">Mes Tarifs et Prestations</h1>
            <br />
            <div>
                <h2 className="text-lg">« Juste moi »</h2>
                <p className="text-2xl underline decoration-pink-500 hover:decoration-pink-900">130 € </p>
                <p>Séance pour une personne, en extérieur ou en studio</p>
            </div>
            <br />
            <div>
                <h2 className="text-lg">« Pour deux »</h2>
                <p className="text-2xl underline decoration-pink-500 hover:decoration-pink-900">195 € </p>
                <p>Pour deux personnes, en extérieur ou en studio</p>
            </div>
            <br />
            <div>
                <h2 className="text-lg">« Famille »</h2>
                <p className="text-2xl underline decoration-pink-500 hover:decoration-pink-900">220 € </p>
                <p>Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
                    30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)
                    </p>
            </div>
            <br />
            <div>
                <h2 className="text-lg">« Il était une fois »</h2>
                <p className="text-2xl underline decoration-pink-500 hover:decoration-pink-900">160 € </p>
                <p>Photo de grossesse (À votre domicile, en extérieur ou en studio)</p>
            </div>
            <br />
            <div>
                <h2 className="text-lg">« Mon bébé »</h2>
                <p className="text-2xl underline decoration-pink-500 hover:decoration-pink-900">100 € </p>
                <p>Photo d’enfant jusqu’à 3 ans (photo à domicile)</p>
            </div>
            <br />
            <div>
                <h2 className="text-lg">« J’immortalise l’événement »</h2>
                <p className="text-2xl underline decoration-pink-500 hover:decoration-pink-900">Sur Devis</p>
                <p>Prestation de mariage ou baptême sur devis</p>
            </div>
            </div>
            

        </Layout>
    )
}