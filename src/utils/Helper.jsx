import { useMediaQuery } from "react-responsive";

export const useBreakpoints = () => {
  const lg = useMediaQuery({ query: "(max-width: 1200px)" });
  const md = useMediaQuery({ query: "(max-width: 900px)" });
  const sm = useMediaQuery({ query: "(max-width: 600px)" });
  const xs = useMediaQuery({ query: "(max-width: 480px)" });

  return { lg, md, sm, xs };
};

export const ApiBaseUrl = "/gamana";
export const phoneNumber = "+91 98490 78450";
export const email = "gamanatheway@gmail.com";
export const Info = `
  GAMANA (meaning “The Way”) is a voluntary, non-profit organization rooted in the Amaravati region of Andhra Pradesh, India. Founded in 2007, GAMANA is dedicated to promoting child rights, gender equality and community empowerment through participatory, rights-based approaches. We believe that sustainable social change begins with informed and empowered communities; especially children and adolescents who are encouraged to voice their rights and shape their futures.
`;
export const FooterLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "About", href: "/about" },
      { label: "Vision&Mission", href: "/vision&mission" },
      { label: "Target Area",  href: "/target-area" },
      { label: "Governance", href: "/governance" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Child Protection and Child Marriage Prevention", href: "/programs&activity" },
      { label: "Education and Learning Continuity", href: "/programs&activity" },
      { label: "Adolescent Empowerment and Life Skills", href: "/programs&activity" },
      { label: "Menstrual Health and Hygiene (MHH) Education", href: "/programs&activity" },
    
    ],
  },
 
]
export const stats = [
  { number: "2,428+", label: "Individuals Reached" },
  { number: "1,446", label: "Empowered Adolescents" },
  { number: "37", label: "Child Marriages Prevented" },
  { number: "162", label: "Out-of-School Children Mainstreamed" },
  { number: "832", label: "Girls Educated on Menstrual Health" },
  { number: "270", label: "ASHA & Anganwadi Workers Trained" },
];

export const Causes = [
    {
      title: "Vision",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      description:
        "GAMANA envisions communities where girls stay in school, marriages are based on choice and maturity and children grow up in safe and nurturing environments that encourage learning, participation and leadership.",
    },
    {
      title: "Mission",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
      description:
        "To empower marginalized children, adolescents and women through education, health and community-based protection systems. GAMANA works to transform social norms that sustain child marriage and gender inequality.",
    },
    {
      title: "Overall Objectives",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      description:
        "Prevent early and forced child marriages through awareness, surveillance and community engagement, Empower adolescent girls and boys with life skills, education and leadership training to exercise their rights and make informed choices.",
    },
    {
      title: "Target Area",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
      description:
        "GAMANA’s programs are implemented across 24 villages in the Thullur, Mangalagiri and Tadepalli Mandals of Guntur District, Andhra Pradesh, India. These villages form part of the Amaravati Capital Region, an area undergoing rapid socio-economic transformation. ",
    },
  ];




