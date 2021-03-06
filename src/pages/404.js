import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="mx-20 text-center">
        <img
          src={abductionIllustration}
          className="block mx-auto mb-10 w-1/2"
          alt="Ghost getting abducted by aliens"
        />
        <h2 className="text-3xl font-bold inline-block max-w-lg">
          Looks like this page is a ghost that got abducted by aliens&hellip;
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
