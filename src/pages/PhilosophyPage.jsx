import MainLayout from "../pages/MainLayout";
import PageHeader from "../sections/PageHeader";

export default function PhilosophyPage() {
  return (
     <MainLayout>
       {/* Hero Section */}
        <PageHeader
          title="Philosophy"
          bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
          breadcrumb={[{ name: "Home", path: "/" }, { name: "Philosophy" }]}
        />
        </MainLayout>
  )
}
