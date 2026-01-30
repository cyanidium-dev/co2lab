type NavSubmenuItem = {
    title: string;
    slug: string;
};

type NavMenuItem = {
    title: string;
    slug?: string;
    submenu?: NavSubmenuItem[];
};

const navMenuList: NavMenuItem[] = [
    { title: "Home", slug: "/" },
    { title: "Supply", slug: "/supply" },
    {
        title: "Solutions",
        submenu: [
            {
                title: "Engineering Solutions",
                slug: "/solutions/engineering-solutions",
            },
            {
                title: "Equipment and systems",
                slug: "/solutions/equipment-and-systems",
            },
            {
                title: "Industries we serve",
                slug: "/solutions/industries-we-serve",
            },
        ],
    },
    { title: "About", slug: "/about" },
    { title: "Contacts", slug: "/contacts" },
];

export default function NavMenu() {
  return (
    <nav
      className="p-2 rounded-full bg-[linear-gradient(90.95deg,rgba(231,231,231,0.8)_52.25%,rgba(255,255,255,0.8)_99.18%)]
    shadow-[inset_0px_4px_12.6px_0px_rgba(255,255,255,0.25)] backdrop-blur-[10px]"
    >
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient270.67deg, #F2F2F2 -9.58%, #C7C7C7 103.45%)",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </nav>
  );
}
