import React from "react";
import MainLayout from "./MainLayout";
import PageHeader from "../sections/PageHeader";
import { Image } from "@heroui/react";
export default function Donate() {
  return (
    <MainLayout>
      <PageHeader
        title="Donate Now"
        bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200"
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Donate" }]}
      />
      <div
        className="md:w-3/4 mx-auto m-5  shadow-lg rounded-lg"
        style={{
          backgroundImage: `url("/donate.svg")`,
        }}
      >
        {/* <div className="p-5">
          <h2 className="text-2xl font-bold mb-6 text-forest">
            Support Our Cause
          </h2>
          <p className="mb-4 text-gray-700">
            Your generous donation helps us continue our mission and make a
            positive impact in the community. Every contribution, big or small,
            makes a difference.
          </p>
        </div> */}

        <div className="grid md:grid-cols-2 gap-8 p-5">
          {/* Left Column - Bank Details */}
          <div className="justify-center p-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Donation</h2>
            <p className="text-gray-600 mb-8">
              You can make quick donations to those in need
            </p>
            <div className="space-y-6">
              <div>
                <span className="text-gray-700 font-medium">
                  Name of the Bank:{" "}
                </span>
                <span className="text-green-700 font-bold">Federal Bank</span>
              </div>

              <div>
                <span className="text-gray-700 font-medium">
                  Name of Account:{" "}
                </span>
                <span className="text-green-700 font-bold">GAMANA</span>
              </div>

              <div>
                <span className="text-gray-700 font-medium">
                  Account Number:{" "}
                </span>
                <span className="text-green-700 font-bold">
                  SB. A/c No. 22780100001537
                </span>
              </div>

              <div>
                <span className="text-gray-700 font-medium">IFSC Code: </span>
                <span className="text-green-700 font-bold">FDRL0002278</span>
              </div>
            </div>
          </div>

          {/* Right Column - QR Code */}
          <div className="flex items-center justify-center">
            {/* <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Scan & Pay
            </h3> */}
            <div className="text-4xl mb-2 flex justify-center">
              <Image src="/scanner.jpg" alt="qr code" height={400} />
            </div>
          </div>
        </div>     </div>
    </MainLayout>
  );
}
