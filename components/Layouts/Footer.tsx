import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-customLaFab dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent">
      <div className="container py-10 lg:py-20">
        <div className="flex flex-wrap justify-between">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/4">
            <Link href="/">
              <img
                src="/assets/images/logo-lafab.png"
                alt="LaFab"
                className="h-12"
              />
            </Link>
          </div>

          <div className="mb-6 w-full lg:mb-0 lg:w-1/4">
            <h3 className="mb-4 text-lg font-bold text-white">
              Contactez-nous
            </h3>
            <p className="text-white">
              164 Brighton Ave,
              <br />
              Allston, Maine, U.S. - 02134
            </p>
            <p className="mt-4 text-white">
              <a
                href="tel:+(617) 254-2333"
                className="transition hover:text-primary"
              >
                +(617) 254-2333
              </a>
            </p>
            <p className="mt-2 text-white">
              <a
                href="mailto:contact@lafab.com"
                className="transition hover:text-primary"
              >
                contact@lafab.com
              </a>
            </p>
          </div>

          <div className="w-full lg:w-1/4">
            <h3 className="mb-4 text-lg font-bold text-white">Liens rapides</h3>
            <ul>
              <li>
                <Link href="/">
                  <div className="block py-2 text-white transition hover:text-primary">
                    Accueil
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/reservation">
                  <div className="block py-2 text-white transition hover:text-primary">
                    Réservez la salle
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <div className="block py-2 text-white transition hover:text-primary">
                    Contact
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-5 text-center text-white">
          <p>&copy; {new Date().getFullYear()} LaFab. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
