import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MediaQuery from "react-responsive";

import Sidebar from "./En/Sidebar";

import PageNotFoundEn from "./En/PageNotFound";
import NavbarEn from "./En/Navbar";
import HomeEn from "./En/Home";
import AboutEn from "./En/About";
import ContactEn from "./En/Contact";
import ProjectsEn from "./En/Projects";

import PageNotFoundJp from "./Jp/PageNotFound";
import NavbarJp from "./Jp/Navbar";
import HomeJp from "./Jp/Home";
import AboutJp from "./Jp/About";
import ContactJp from "./Jp/Contact";
import ProjectsJp from "./Jp/Projects";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: "en",
      projects: [
        {
          id: 0,
          image: "/image/getflair.png",
          title: "Falir",
          description: `Flair eliminates manual and repetitive work for multifamily marketers and managers to increase occupancy, headache-free`,
          descriptionJP: `Flair は、集合住宅のマーケティング担当者やマネージャーの手作業や繰り返しの作業を排除し、頭を悩ませることなく占有率を高めます。`,
          link: "https://www.getflair.io",
        },
        {
          id: 1,
          image: "/image/cropperfinance.png",
          title: "Cropper Fiance",
          description:
            "Decentralized Ecosystem that Empowers Projects & Maximizes Yield to move Defi forward on Solana. Swap, Yield Farming, Staking, IDO Launchpad & more.",
          descriptionJP: `Defi を Solana で前進させるためにプロジェクトを強化し、収益を最大化する分散型エコシステム。 スワップ、イールドファーミング、ステーキング、IDO Launchpadなど。`,
          link: "https://cropper.finance",
        },
        {
          id: 2,
          image: "/image/perfectyourtrading.png",
          title: "Trading Platform",
          description:
            "Perfect Your Trading is an educational platform built to make you an excellent trader in the shortest possible time.",
          descriptionJP: `Perfect Your Trading は、短期間で優れたトレーダーになるように構築された教育プラットフォームです。`,
          link: "https://perfectyourtrading.com",
        },
        {
          id: 3,
          image: "/image/shmacked.png",
          title: "Shmacked",
          description:
            "Fast Delivery. Shmacked offers unmatched convenience by delivering everything from snacks, drinks, nicotine, and alcohol in less than 15 minutes!",
          descriptionJP: `迅速な配達。 Shmacked は、スナック、飲み物、ニコチン、アルコールに至るまであらゆるものを 15 分以内に配達することで、比類のない利便性を提供します。`,
          link: "https://shmacked.com",
        },
      ],
    };
    this.handleLanguageSwitch = this.handleLanguageSwitch.bind(this);
  }

  handleLanguageSwitch(lang) {
    this.setState({ lang: lang });
  }
  render() {
    const { lang, projects } = this.state;

    let project;
    if (lang === "en") {
      project = <ProjectsEn projects={projects} />;
    } else {
      project = <ProjectsJp projects={projects} />;
    }

    return (
      <div className="app">
        <div className="flex-grid">
          <MediaQuery minDeviceWidth={350}>
            <Sidebar onLanguageClicked={this.handleLanguageSwitch} />
          </MediaQuery>

          <div className="main-content">
            {lang === "en" ? <NavbarEn /> : <NavbarJp />}

            <Switch>
              <Route
                exact
                path="/react-portfolio"
                component={lang === "en" ? HomeEn : HomeJp}
              />
              <Route
                path="/react-portfolio/contact"
                component={lang === "en" ? ContactEn : ContactJp}
              />
              <Route
                path="/react-portfolio/about"
                component={lang === "en" ? AboutEn : AboutJp}
              />
              <Route path="/react-portfolio/projects" render={() => project} />

              {/* use button / iframe */}
              <Route
                path="/github"
                component={({ history }) => {
                  history.replace("/react-portfolio");
                  window.location.href =
                    "https://www.github.com/mastercodercat";
                  return null;
                }}
              />
              <Route
                path="/linkedin"
                component={({ history }) => {
                  history.replace("/react-portfolio");
                  window.location.href =
                    "https://www.linkedin.com/in/ericsuzuki0214/";
                  return null;
                }}
              />
              <Route
                component={lang === "en" ? PageNotFoundEn : PageNotFoundJp}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
