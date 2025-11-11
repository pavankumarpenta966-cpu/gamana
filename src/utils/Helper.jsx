import { useMediaQuery } from "react-responsive";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import { TbBulbFilled,TbChecklist } from "react-icons/tb";
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
  GAMANA is a voluntary, non-profit organization rooted in the Amaravati region of Andhra Pradesh, India. Founded in 2007, GAMANA is dedicated to promoting child rights, gender equality and community empowerment through participatory, rights-based approaches. We believe that sustainable social change begins with informed and empowered communities; especially children and adolescents who are encouraged to voice their rights and shape their futures.
`;
export const FooterLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "About", href: "/about" },
      { label: "Vision&Mission", href: "/vision&mission" },
      { label: "Target Area", href: "/target-area" },
      { label: "Governance", href: "/governance" },
    ],
  },
  {
    title: "Programs",
    links: [
      {
        label: "Child Protection and Child Marriage Prevention",
        href: "/programs&activity",
      },
      {
        label: "Education and Learning Continuity",
        href: "/programs&activity",
      },
      {
        label: "Adolescent Empowerment and Life Skills",
        href: "/programs&activity",
      },
      {
        label: "Menstrual Health and Hygiene (MHH) Education",
        href: "/programs&activity",
      },
      {
        label: "Community Mobilisation and Governance",
        href: "/programs&activity",
      },
      {
        label: "Monitoring, Evaluation & Data Systems",
        href: "/programs&activity",
      },
    ],
  },
];
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
    icon: <TbBulbFilled className="text-4xl" />,
  },
  {
    title: "Mission",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    description:
      "To empower marginalized children, adolescents and women through education, health and community-based protection systems. GAMANA works to transform social norms that sustain child marriage and gender inequality.",
    icon: <GiBullseye className="text-4xl" />,
  },
  {
    title: "Overall Objectives",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
    description:
      "Prevent early and forced child marriages through awareness, surveillance and community engagement, Empower adolescent girls and boys with life skills, education and leadership training to exercise their rights and make informed choices.",
    icon: <TbChecklist className="text-4xl" />,
  },
  {
    title: "Target Area",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop",
    description:
      "GAMANA’s programs are implemented across 24 villages in the Thullur, Mangalagiri and Tadepalli Mandals of Guntur District, Andhra Pradesh, India. These villages form part of the Amaravati Capital Region, an area undergoing rapid socio-economic transformation. ",
    icon: <FaMapLocationDot className="text-4xl" />,
  },
];

export const programs = [
  {
    title: "Child Protection and Child Marriage Prevention",
    description: [
      "At the core of GAMANA’s mission is the prevention of early and forced child marriages. We address this through community vigilance, awareness and systems strengthening.",
      "By establishing Village Child Protection Committees (VCPCs) and Bala Panchayats, we empower both adults and children to identify, prevent and report child rights violations.",
    ],
    components: [
      "Formation and training of Bala Panchayats in 24 villages to enable children’s participation in governance.",
      "Capacity building of VCPCs, teachers and Anganwadi workers on child rights and legal frameworks (PCMA, POCSO, JJ Act).",
      "Awareness campaigns and family counselling to delay marriage and promote education.",
      "Continuous community watch during high-risk periods (summer months, festival seasons).",
      "Collaboration with police, child welfare committees (CWC) and Mandal-level officials to prevent and report child marriages.",
    ],
    impact: [
      "37+ child marriages prevented (2023–2025).",
      "Active child protection committees in all 24 villages.",
      "Increased community reporting of child protection issues.",
    ],
    url: "/gamana/i4.jpg",
  },
  {
    title: "Education and Learning Continuity",
    description: [
      "Education lies at the foundation of GAMANA’s work. Through its Study Centres, the organization ensures that children, especially girls have access to quality learning and remain in school.",
    ],
    components: [
      "24 Study Centres offering after-school support in Telugu, English and Mathematics.",
      "Focused efforts to mainstream out-of-school children into formal education.",
      "Regular parent-teacher interactions to improve attendance and learning outcomes.",
      "Teacher training programs on child psychology, gender-sensitive teaching and inclusive methods.",
      "Digital literacy sessions and exposure activities for older adolescents.",
    ],
    impact: [
      "1,446 children reached (2024–25 cycle).",
      "162 out-of-school children mainstreamed.",
      "Improved retention and academic performance among adolescent girls.",
    ],
    url: "/gamana/vision.jpg",
  },
  {
    title: "Adolescent Empowerment and Life Skills",
    description: [
      "GAMANA nurtures the voice, confidence and leadership of adolescents, particularly girls to make informed choices about their lives.",
    ],
    components: [
      "Regular life-skills education sessions on self-awareness, decision-making, communication and problem-solving.",
      "Adolescent leadership training through Bala Panchayat conventions and child-led advocacy forums.",
      "Peer mentoring networks to support continued schooling and personal growth.",
      "Exposure visits and youth dialogues on career pathways, gender equality and rights.",
    ],
    impact: [
      "Enhanced participation of adolescent girls in village decision-making processes.",
      "Development of child leaders who influence community attitudes toward child marriage.",
      "Sustained behavioural change among boys on gender equality and respect for women.",
    ],
    url: "/gamana/i3.jpg",
  },
  {
    title: "Menstrual Health and Hygiene (MHH) Education",
    description: [
      "To ensure that menstruation does not become a barrier to education, GAMANA integrates menstrual health and hygiene (MHH) awareness across all its programs.",
    ],
    components: [
      "Training for adolescent girls on menstrual hygiene, body literacy and reproductive health.",
      "Orientation sessions for mothers, teachers and community health workers to address myths and taboos.",
      "Distribution of menstrual hygiene kits and promotion of eco-friendly alternatives.",
      "Strengthening adolescent-friendly health services (AFHS) at local PHCs and Anganwadi Centres.",
    ],
    impact: [
      "Over 900 adolescent girls reached through MHH sessions.",
      "Improved school attendance during menstruation.",
      "Strengthened community dialogue on women’s health and dignity.",
    ],
    url: "/gamana/i1.jpg",
  },
  {
    title: "Community Mobilisation and Governance",
    description: [
      "Sustainable change requires collective ownership. GAMANA builds local capacity through awareness, leadership and convergence with government systems.",
    ],
    components: [
      "Orientation and support to village and ward secretariat staff, volunteers and frontline functionaries on their roles in protecting children and preventing child marriages.",
      "Regular community meetings, village-level campaigns and child rights days.",
      "Collaboration with district authorities, education and health departments and police for coordinated interventions.",
      "Encouragement of women’s self-help groups and youth clubs to engage in advocacy.",
    ],
    impact: [
      "Improved inter-departmental coordination for child protection.",
      "Greater community vigilance and accountability in reporting early marriages.",
      "Institutionalization of child rights as part of village development plans.",
    ],
    url: "/gamana/i5.jpg",
  },
  {
    title: "Monitoring, Evaluation & Data Systems",
    description: [
      "GAMANA believes in evidence-based action. The organization maintains robust Monitoring & Evaluation (M&E) systems to track progress, assess outcomes and inform policy advocacy.",
    ],
    components: [
      "Monthly reporting from study centres and Bala Panchayats.",
      "Baseline, midline and endline evaluations for all major projects.",
      "Use of data dashboards and MIS tools for real-time tracking.",
      "Documentation of case studies, success stories and best practices.",
    ],
    impact: [
      "Data-driven advocacy for stronger child protection mechanisms.",
      "Transparency and accountability in all program operations.",
    ],
    url: "/gamana/i6.jpg",
  },
];
