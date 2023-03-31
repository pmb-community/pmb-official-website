import cn from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

import { useMediaQuery } from "@/hooks";

import logoHmif from "../../../public/logo-hmif.png";
import logoInquares from "../../../public/logo-inquares.png";
import logoItk from "../../../public/logo-itk.png";
import logoKm from "../../../public/logo-km.png";
import logoPmb from "../../../public/logo-pmb.png";
import { AccordionNavLink } from "./accordion-nav-link";
import { DropdownNavLink } from "./dropdown-nav-link";
import { NavLink } from "./nav-link";

const programKerjaList = [
  {
    label: "Mapping Kompetensi dan Minat",
    href: "/mapping-kompetensi-dan-minat",
  },
  {
    label: "Database Capaian Mahasiswa",
    href: "/database-capaian-mahasiswa",
  },
  {
    label: "Video Learning Center",
    href: "/video-learning-center",
  },
  {
    label: "Program Peningkatan Kompetensi dan Keterampilan",
    href: "/program-peningkatan-kompetensi-dan-keterampilan",
  },
  {
    label: "Peningkatan Kompetensi dan Wawasan: Acara Kuliah Tamu HMIF",
    href: "/kuliah-tamu-hmif",
  },
  {
    label: "Ngobrol Santai",
    href: "/ngobrol-santai",
  },
  {
    label: "Hackathon HMIF",
    href: "/hackathon-hmif",
  },
];

const lainnyaItems = [
  {
    label: "Informasi",
    href: "/informasi",
  },
  {
    label: "Acara dan kagiatan",
    href: "/acara-dan-kagiatan",
  },
  {
    label: "Sumber Belajar",
    href: "/sumber-belajar",
  },
];

export const Header = () => {
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const [selectedAccordionItem, setSelectedAccordionItem] = useState("");
  const isUnderLG = useMediaQuery("(max-width: 1024px)");

  const handleAccordionChange = (value) => {
    setSelectedAccordionItem(value);
  };

  const handleToggleNavbar = () => {
    if (isUnderLG) {
      document.body.style.overflow = navbarIsOpen ? "auto" : "hidden";
      setNavbarIsOpen((currentState) => !currentState);
    } else {
      setNavbarIsOpen(true);
    }
  };

  useEffect(() => {
    setSelectedAccordionItem("");
    if (!isUnderLG) {
      setNavbarIsOpen(false);
      document.body.style.overflow = "auto";
    }
  }, [isUnderLG]);

  return (
    <header className="sticky top-0 z-10 m-auto w-full bg-inquares-loafer-500 bg-inquares-loafer-500/80 py-3 px-6 shadow-sm backdrop-blur-[6px] md:px-8 lg:px-12 lg:py-4">
      <div className="m-auto flex w-full items-center justify-between lg:container">
        <div className="flex items-center gap-2 md:gap-4">
          <Image
            src={logoItk}
            alt="Logo ITK"
            className="h-8 w-full object-contain object-center sm:h-10 md:h-12"
          />
          <Image
            src={logoKm}
            alt="Logo KM ITK"
            className="h-8 w-full object-contain object-center sm:h-10 md:h-12"
          />
          <Image
            src={logoHmif}
            alt="Logo HMIF"
            className="h-8 w-full object-contain object-center sm:h-10 md:h-12"
          />
          <Image
            src={logoInquares}
            alt="Logo INQUARES"
            className="h-8 w-full object-contain object-center sm:h-10 md:h-12"
          />
          <Image
            src={logoPmb}
            alt="Logo PMB"
            className="h-8 w-full object-contain object-center sm:h-10 md:h-12"
          />
        </div>
        <nav className="flex h-max items-center gap-4 px-2">
          <button
            type="button"
            className="rounded-md bg-inquares-hippie-green-300/60 p-1 outline-none ring-inquares-hippie-green-400/80 backdrop-blur-xl transition-all duration-200 hover:bg-inquares-hippie-green-300/80 focus:ring-2 active:bg-inquares-hippie-green-300 active:ring-[3px] lg:hidden"
            onClick={handleToggleNavbar}
          >
            <MdMenu className="h-6 w-6 text-inquares-hippie-green-800/60 hover:text-inquares-hippie-green-800/80 active:text-inquares-hippie-green-800" />
          </button>

          <ul
            className={cn(
              "absolute left-0 top-full h-screen w-full flex-col gap-3 overflow-auto bg-inquares-loafer-500 p-8 pb-20 lg:static lg:flex lg:h-auto lg:flex-row lg:gap-8 lg:overflow-visible lg:bg-transparent lg:p-0",
              {
                hidden: !navbarIsOpen,
                flex: navbarIsOpen,
              },
            )}
          >
            <li className="flex items-center">
              <NavLink href="/" onClick={handleToggleNavbar}>
                Beranda
              </NavLink>
            </li>

            <li className="flex items-center">
              <NavLink href="/" onClick={handleToggleNavbar}>
                Tentang
              </NavLink>
            </li>

            <li>
              {!isUnderLG ? (
                <DropdownNavLink
                  triggerTextValue="Program Kerja"
                  dropdownItems={programKerjaList}
                />
              ) : (
                <AccordionNavLink
                  isOpen={selectedAccordionItem === "program-kerja"}
                  onValueChange={handleAccordionChange}
                  triggerTextValue="Program Kerja"
                  value={selectedAccordionItem}
                  accordionItemValue="program-kerja"
                  accordionItems={programKerjaList}
                />
              )}
            </li>

            <li>
              {!isUnderLG ? (
                <DropdownNavLink
                  triggerTextValue="Lainnya"
                  dropdownItems={lainnyaItems}
                />
              ) : (
                <AccordionNavLink
                  value={selectedAccordionItem}
                  isOpen={selectedAccordionItem === "lainnya"}
                  onValueChange={handleAccordionChange}
                  triggerTextValue="Lainnya"
                  accordionItemValue="lainnya"
                  accordionItems={lainnyaItems}
                />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
