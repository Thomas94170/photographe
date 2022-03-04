import { useRouter } from "next/router";
    import Image from "next/image";
    import Link from "next/link";
    export default function photo({ img, description, name }) {
      const router = useRouter();
      if (!router.isFallback && !photo) {
        return <ErrorPage statusCode={404} />;
      }
      return (
        <div>
          <div className="Imagecontainer">
            <Link className="homeButton" href="/">
              <a className="homeButton">
                <button className="button"> Home </button>
              </a>
            </Link>
          </div>
          <div className="Imagecontainer">
            {router.isFallback ? (
              <div>Loading…</div>
            ) : (
              <>
                <Image width={960} priority height={540} src={photo} />
              </>
            )}
          </div>
          <div className="Imagecontainer">Name : {name}</div>
          <div className="Imagecontainer">Description {description}</div>
          <div className="Imagecontainer">
            <Link className="homeButton" href="/">
              <a className="homeButton">
                <button className="button"> Back </button>
              </a>
            </Link>
          </div>
        </div>
      );
    }
    export async function getStaticProps({ params }) {
      const photoid = params.id;
      const results = await fetch(`http://localhost:1337/photos?id=${photoid}`);
      const previews = await results.json();
      const img = await previews[0].img.formats.small.url;
      const name = await previews[0].name;
      const description = await previews[0].description;
      
      return {
        props: { img, name, description },
      };
    }
    export async function getStaticPaths() {
      const results = await fetch("http://localhost:1337/photos?populate=*");
      const previews = await results.json();
      return {
        paths:
          previews?.map((pic) => ({
            params: { id: pic.id.toString() },
          })) || [],
        fallback: true,
      };
    }