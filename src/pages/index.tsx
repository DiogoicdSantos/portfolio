import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { CiMedal } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import pfp from "../../public/pfp.jpg";

const Main = styled.main`
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
`;

const NavBar = styled.nav`
  padding-top: 10px;
  padding-bottom: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Resume = styled.a`
  padding: 15px;
  background-color: #525252;
  font-size: large;
  border-radius: 7px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const SayHello = styled.a`
  padding: 15px;
  color: white;
  font-size: large;
  border-radius: 7px;
  background-color: #525252;
  font-weight: bold;
  width: fit-content;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  h2 {
    font-size: 3rem;
    color: #525252;
  }
  p {
    max-width: 75ch;
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavBarButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const MyIcons = styled.div`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  font-size: 3vh;
  gap: 15px;
  * {
    cursor: pointer;
  }
`;

const AboutMe = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const AboutMeTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutMeBox = styled.div`
  gap: 1.5rem;
  padding: 1em;
  border: 1px solid #e6e6e6;
  border-radius: 5%;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
`;

const AboutMeInfo = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  .grid-col-span-3 {
    grid-column: span 3;
    max-width: 75ch;
  }
`;

const CustomCiMedal = styled(CiMedal)`
  height: 3em;
  width: 3em;
`;

const CustomGrLanguage = styled(GrLanguage)`
  height: 3em;
  width: 3em;
`;

const ToolsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    max-width: 75ch;
  }
`;

const PFP = styled(Image)`
  height: 400px;
  width: auto;
  border-radius: 5%;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <section>
          <NavBar>
            <h1>Diogo</h1>
            <NavBarButtons>
              <Resume href="https://www.linkedin.com/in/diogo-santos-02336b177/">
                Resume
              </Resume>
            </NavBarButtons>
          </NavBar>
          <Info>
            <InfoText>
              <h2>Diogo Santos </h2>
              <h3>Software Developer.</h3>
              <p>
                Developer for over 2 years, been working with fun things like
                chat bots, augmented reality and Reactjs.
              </p>
              <SayHello>Say Hello</SayHello>
            </InfoText>
            <PFP alt="pfp" src={pfp}></PFP>
          </Info>
        </section>
        <section>
          <AboutMeTitles>
            <h3>About me</h3>
            <h2>Introduction</h2>
          </AboutMeTitles>
          <AboutMe>
            <div>
              <PFP alt="pfp" src={pfp}></PFP>
            </div>
            <AboutMeInfo>
              <AboutMeBox>
                <CustomCiMedal />
                <div>Experience</div>
                <div>2.5 years</div>
              </AboutMeBox>
              <AboutMeBox>
                <CustomGrLanguage />
                <div>English</div>
                <div>10/10</div>
              </AboutMeBox>
              <AboutMeBox>
                <CustomGrLanguage />
                <div>Portuguese</div>
                <div>10/10</div>
              </AboutMeBox>
              <p className="grid-col-span-3">
                Since the beginning of my carrer as a developer, I've worked
                remotely for companies, collaborating with great people to
                create solutions for businesses and consumers.
              </p>
              <Resume href="https://www.linkedin.com/in/diogo-santos-02336b177/">
                Download CV
              </Resume>
            </AboutMeInfo>
          </AboutMe>

          <MyIcons>
            <AiFillLinkedin href="https://www.linkedin.com/in/diogo-santos-02336b177/" />
            <AiFillGithub href="https://github.com/DiogoicdSantos" />
          </MyIcons>
          <ToolsDiv>
            <h3>Great Software</h3>
            <h3>Tools I've used</h3>
            <p>Reactjs</p>
            <p>Nodejs</p>
            <p>Unity</p>
            <p>Chat bots</p>
          </ToolsDiv>
        </section>
      </Main>
    </>
  );
}
