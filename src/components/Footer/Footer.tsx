import { dataFooter } from "./Footer.data";
import Link from "next/link";

export function Footer() {
  return (
    <div className="px-4 py-8 bg-black/90 md:py40 md:px-36">
      <div className="grid gap-8 grid-cols-2 md:grid-cols-[1fr,1fr,1fr,_40px] text-white">
        {dataFooter.map(({ id, links }) => (
          <div key={id}>
            {links.map(({ id, name, link }) => (
              <Link key={id} href={link} className="block mb-5">
                {name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
