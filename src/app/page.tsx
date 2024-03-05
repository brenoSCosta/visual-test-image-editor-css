"use client";
import { AppContainer } from "@/components/AppContainer";
import { MainContent } from "@/components/MainContent";
import { SidePanel } from "@/components/SidePanel";
import { Sidebar } from "@/components/Sidebar";
import styled from "styled-components";

export default function Home() {
  return (
    <AppContainer>
      <>
        <Sidebar></Sidebar>
        <SidePanel title="Images" />
        <MainContent></MainContent>
      </>
    </AppContainer>
  );
}
