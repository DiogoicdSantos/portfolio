import styled from "@emotion/styled";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect } from "react";

import { Experience, Socials, ToolsUsed } from "@/shared/consts";
import { useCustomIcons } from "@/shared/customIcons";
import pfp1 from "../../public/pfp1.jpeg";
import pfp2 from "../../public/pfp2.jpeg";

import { tawkToLoadScripts } from "../components/ChatBot/tawkto";

const Main = styled.main`
  padding-left: 20px;
  padding-right: 20px;
`;

const NavBar = styled.nav`
  padding-top: 10px;
  padding-bottom: 5%;
  padding-left: 5%;
  padding-right: 5%;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
`;

const CustomButton = styled.a`
  padding: 15px;
  font-size: large;
  border-radius: 7px;
  border: 1px solid #00535c;
  font-weight: bold;
  width: fit-content;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 10rem;
  gap: 5rem;
  h2 {
    font-size: 3rem;
  }
  p {
    max-width: 75ch;
  }
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1rem;
    a {
      align-self: center;
    }
  }
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
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
  @media (max-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
`;

const AboutMe = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5rem;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    a {
      grid-column: span 3;
      justify-self: center;
    }
  }
`;

const AboutMeTitles = styled.div`
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

const ToolsTitles = styled.div`
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 1rem;
`;

const ToolsDiv = styled.div`
  padding-bottom: 8rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1rem;
  }
`;

const PFP = styled(Image)`
  height: 25rem;
  width: auto;
  border-radius: 50%;
  border: 2px solid #696767;
  object-fit: cover;
  @media (max-width: 800px) {
    height: 15rem;
    width: auto;
    border-radius: 50%;
    border: 2px solid #696767;
  }
`;

const BodySection = styled.section`
  margin-left: 10%;
  margin-right: 10%;
`;

const CheckOutDiv = styled.div`
  padding-bottom: 5rem;
  text-align: center;
  text-decoration: underline;
  font-size: 2rem;
  font-weight: bold;
`;

export default function Home() {
  const { IconBlock, IconSimple } = useCustomIcons();

  const sayHello = useCallback(() => {
    window.open("mailto:diogoicdsantos@gmail.com", "_blank");
  }, []);

  useEffect(() => {
    tawkToLoadScripts();
  }, []);

  return (
    <>
      <Head>
        <title>Diogo Santos</title>
        <meta name="description" content="Diogo Santos Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <NavBar>
          <h1>Diogo</h1>
          <h1>
            <a href="/projects">Projects</a>
          </h1>
        </NavBar>
        <BodySection>
          <Info>
            <MyIcons>
              {Socials.map((social) => (
                <IconSimple
                  key={social.url}
                  Icon={social.Icon}
                  url={social.url}
                />
              ))}
            </MyIcons>
            <InfoText>
              <h2>Diogo Santos </h2>
              <h3>Software Developer.</h3>
              <p>
                I'm a technology enthusiast! One of my biggest goals is to gain
                some knowledge (even if small) in a lot of different subjects,
                hopefully turning me into a very capable fullstack developer.
              </p>
              <p>
                Right now you can find me working in frontend with Reactjs, but
                I've learned a lot throughout my years of studying. That can
                include languages such as C#, JavaScript and PHP, database tools
                such as MySQL or PHPMyAdmin, some photography, and editing in
                Adobe based programs like Photoshop, Illustrator, Premiere,
                After Effects and Adobe Xd for UX/UI implementations.
              </p>
              <CustomButton onClick={sayHello}>Say Hello</CustomButton>
            </InfoText>
            <PFP alt="pfp" src={pfp1}></PFP>
          </Info>
          <AboutMeTitles>
            <h2>About me</h2>
          </AboutMeTitles>
          <AboutMe>
            <div>
              <PFP alt="pfp" src={pfp2}></PFP>
            </div>
            <AboutMeInfo>
              {Experience.map((item) => (
                <IconBlock
                  key={item.title}
                  icon={item.icon}
                  score={item.score}
                  title={item.title}
                />
              ))}
              <p className="grid-col-span-3">
                Since the beginning of my carrer as a developer, I've worked
                remotely for companies, collaborating with great people to
                create solutions for businesses and consumers.
              </p>
              <CustomButton target={"_blank"} href="CVDiogoSantosEN.pdf">
                Download CV
              </CustomButton>
            </AboutMeInfo>
          </AboutMe>
          <ToolsTitles>
            <h2>Tools I've used</h2>
          </ToolsTitles>
          <ToolsDiv>
            {ToolsUsed.map((item) => (
              <IconBlock
                key={item.title}
                icon={item.icon}
                score={item.score}
                title={item.title}
              />
            ))}
          </ToolsDiv>
          <CheckOutDiv>
            <a href="/projects">Check out some of my projects</a>
          </CheckOutDiv>
        </BodySection>
      </Main>
    </>
  );
}
