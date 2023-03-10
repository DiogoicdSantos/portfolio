import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillRobot } from "react-icons/ai";
import { CiMedal } from "react-icons/ci";
import { DiVisualstudio } from "react-icons/di";
import { FaJava, FaReact, FaUnity } from "react-icons/fa";
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
  padding-left: 5%;
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
  padding-bottom: 10rem;
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
  display: flex;
  flex-direction: column;
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

const ContentBox = styled.div`
  gap: 1.5rem;
  padding: 1em;
  border: 1px solid #e6e6e6;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const CustomFaUnity = styled(FaUnity)`
  height: 3em;
  width: 3em;
`;

const CustomFaReact = styled(FaReact)`
  height: 3em;
  width: 3em;
`;

const CustomFaJava = styled(FaJava)`
  height: 3em;
  width: 3em;
`;

const CustomDiVisualstudio = styled(DiVisualstudio)`
  height: 3em;
  width: 3em;
`;

const CustomAiFillRobot = styled(AiFillRobot)`
  height: 3em;
  width: 3em;
`;

const ToolsTitles = styled.div`
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const ToolsDiv = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

const PFP = styled(Image)`
  height: 25rem;
  width: auto;
  border-radius: 5%;
`;

const BodySection = styled.section`
  margin-left: 10%;
  margin-right: 10%;
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
        <NavBar>
          <h1>Diogo</h1>
        </NavBar>
        <BodySection>
          <Info>
            <MyIcons>
              <a href="https://www.linkedin.com/in/diogo-santos-02336b177/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/DiogoicdSantos">
                <AiFillGithub />
              </a>
            </MyIcons>
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
          <AboutMeTitles>
            <h3>About me</h3>
            <h2>Introduction</h2>
          </AboutMeTitles>
          <AboutMe>
            <div>
              <PFP alt="pfp" src={pfp}></PFP>
            </div>
            <AboutMeInfo>
              <ContentBox>
                <CustomCiMedal />
                <div>Experience</div>
                <div>2.5 years</div>
              </ContentBox>
              <ContentBox>
                <CustomGrLanguage />
                <div>English</div>
                <div>10/10</div>
              </ContentBox>
              <ContentBox>
                <CustomGrLanguage />
                <div>Portuguese</div>
                <div>10/10</div>
              </ContentBox>
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
          <ToolsTitles>
            <h3>Great Software</h3>
            <h3>Tools I've used</h3>
          </ToolsTitles>
          <ToolsDiv>
            <ContentBox>
              <CustomFaReact />
              <div>Reactjs</div>
              <div>6/10</div>
            </ContentBox>
            <ContentBox>
              <CustomFaJava />
              <div>JavaScript</div>
              <div>6/10</div>
            </ContentBox>
            <ContentBox>
              <CustomDiVisualstudio />
              <div>C#</div>
              <div>4/10</div>
            </ContentBox>
            <ContentBox>
              <CustomFaUnity />
              <div>Unity</div>
              <div>4/10</div>
            </ContentBox>
            <ContentBox>
              <CustomAiFillRobot />
              <div>Chat bots</div>
              <div>10/10</div>
            </ContentBox>
          </ToolsDiv>
        </BodySection>
      </Main>
    </>
  );
}
