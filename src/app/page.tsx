"use client";
import { AppContainer } from "@/components/AppContainer";
import { MainContent } from "@/components/MainContent";
import { SidePanel } from "@/components/SidePanel";
import { Sidebar } from "@/components/Sidebar";
import styled from "styled-components";
const ButtonT = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  gap: 1rem;
  flex-wrap: wrap;
`;
export default function Home() {
  return (
    <AppContainer>
      <>
        <Sidebar></Sidebar>
        <SidePanel></SidePanel>
        <MainContent></MainContent>
      </>
    </AppContainer>
  );
}
