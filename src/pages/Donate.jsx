import React from "react";
import MainLayout from "./MainLayout";
import PageHeader from "../sections/PageHeader";

export default function Donate() {
  return (
    <MainLayout>
      <PageHeader
        title="Donate Now"
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Donate" }]}
      />
      <section className="my-auto">
        <div className="md:w-3/4 mx-auto bg-no-repeat bg-cover" style={{
             backgroundImage: `url("/gamana/donate.svg")`,
        }}>
         <div className="mx-12">
            <h2 className="text-2xl font-bold mb-6 text-forest">
              Support Our Cause
            </h2>
            <p className="mb-4 text-gray-700">
              Your generous donation helps us continue our mission and make a
              positive impact in the community. Every contribution, big or
              small, makes a difference.
            </p>
         </div>
        </div>
      </section>
    </MainLayout>
  );
}
