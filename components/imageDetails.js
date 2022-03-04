import Image from "next/image";
    import Link from "next/link";
    export default function Gallery({ categories, photo }) {
      return (
        <div>
          <Link as={`/preview/${id}`} href="/preview/[id]">
            <a>
              <Image width={250} height={200} src={data.attributes.img.data[0].attributes.formats.thumbnail.url} />
              <div className="photoid"> {title}</div>
            </a>
          </Link>
        </div>
      );
    }