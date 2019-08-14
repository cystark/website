import { StaticQuery, graphql } from "gatsby";
import React from "react";
import styles from "./styles.module.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Contact from "@components/Contact";
import Modal from "@components/Modal";
import NetlifyForm from "@components/NetlifyForm";
import socialLinks from "@utils/socialLinks";

import SiteData, {
  Location,
  SiteDataContextInterface,
  SiteDataContextInterfaceRaw
} from "@context/SiteData";

interface Props {
  location: Location;
}

interface PureProps {
  data: SiteDataContextInterfaceRaw;
  location: Location;
}

const generateSocialLinks = (data: SiteDataContextInterface) => {
  const { linkedin, github, email } = data;
  return socialLinks({ linkedin, github, email });
};

const generateContext = (
  data: SiteDataContextInterfaceRaw,
  location: Location
): SiteDataContextInterface => {
  const siteMetadata = data.site.siteMetadata;
  return {
    ...siteMetadata,
    socialLinks: generateSocialLinks(siteMetadata),
    location
  };
};

export const PureLayout: React.SFC<PureProps> = ({
  data,
  location,
  children
}) => {
  const siteContext = generateContext(data, location);
  return (
    <div className={styles.container}>
      <SiteData.Provider value={siteContext}>
        <Header />
        {children}
        <Contact />
        <Footer />
      </SiteData.Provider>
      <Modal>
        <NetlifyForm />
      </Modal>
    </div>
  );
};

const Layout: React.SFC<Props> = ({ location, children }) => {
  return (
    <StaticQuery
      query={SiteGraphQlData}
      render={data => (
        <PureLayout data={data} location={location}>
          {children}
        </PureLayout>
      )}
    />
  );
};

const SiteGraphQlData = graphql`
  query siteDataQuery {
    site {
      siteMetadata {
        title
        description
        email
        copyright
        github
        linkedin
        titleAlt
        shortName
        author
        siteLanguage
        logo
        siteURL
        pathPrefix
        twitter
        menuLinks {
          link
          name
        }
      }
    }
  }
`;
export default Layout;
