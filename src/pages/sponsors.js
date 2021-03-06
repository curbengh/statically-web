import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function SponsorsPages() {
  return (
    <Layout>
      <SEO
        title="Sponsors"
        keywords={[`statically`]}
      />

      <div className="max-w-2xl mx-auto px-4 md:px-0">

        <section className="mt-20 mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl max-w-xl mx-auto mt-5 mb-5">
              Sponsors
            </h2>
            <p className="text-lg mx-auto">
              lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content.
            </p>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default SponsorsPages;