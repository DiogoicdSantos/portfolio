import { ProjectsInformation, ProjectsInformationsType } from "@/shared/consts";
import styled from "@emotion/styled";
import Head from "next/head";
import { useCallback, useState } from "react";

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

const BodySection = styled.section`
  margin-left: 10%;
  margin-right: 10%;
`;

const ProjectTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 10%;
  margin-right: 10%;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10%;
  margin-right: 10%;
`;

const ProjectsMain = styled.div`
  padding-top: 10rem;
  display: flex;
  justify-content: space-between;
`;

const ProjectsTitleButton = styled.a`
  font-size: large;
  font-weight: bold;
  width: fit-content;
  cursor: pointer;
`;

export default function Projects() {
  const [currentInfo, setCurrentInfo] = useState<ProjectsInformationsType>(
    ProjectsInformation[0]
  );

  const changeInfo = useCallback(
    (title: string) => () => {
      const toAdd = ProjectsInformation.find(
        (project) => project?.title === title
      );
      if (toAdd) {
        setCurrentInfo(toAdd);
      }
    },
    []
  );

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
          <h1>
            <a href="/">Diogo</a>
          </h1>
          <h1>Projects</h1>
        </NavBar>
        <BodySection>
          <ProjectsMain>
            <ProjectInfo>
              <h1>{currentInfo.title}</h1>
              <h2>{currentInfo.subtitle}</h2>
              <p>{currentInfo.text}</p>
            </ProjectInfo>
            <ProjectTitles>
              <ProjectsTitleButton onClick={changeInfo("Farfetch")}>
                <h1>Farfetch</h1>
              </ProjectsTitleButton>
              <ProjectsTitleButton onClick={changeInfo("JIBO")}>
                <h1>JIBO</h1>
              </ProjectsTitleButton>
              <ProjectsTitleButton onClick={changeInfo("TOMI")}>
                <h1>TOMI</h1>
              </ProjectsTitleButton>
            </ProjectTitles>
          </ProjectsMain>
        </BodySection>
      </Main>
    </>
  );
}
