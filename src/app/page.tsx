"use client";
import { AppContainer } from "@/components/AppContainer";
import { ImageEdit } from "@/components/ImageEdit";
import { InfoBar } from "@/components/InfoBar";
import { MainContent } from "@/components/MainContent";
import { SidePanel } from "@/components/SidePanel";
import { Sidebar } from "@/components/Sidebar";
import { device } from "@/constants/constants";
import { useState } from "react";

export default function Home() {
  const [buttonActive, setButtonActive] = useState(0);
  function handleBtActive(value: number) {
    setButtonActive(value);
  }
  return (
    <AppContainer>
      <>
        <Sidebar
          changeSelectedValue={handleBtActive}
          selectValue={buttonActive}
        />
        <SidePanel title="Images" activeValue={buttonActive} />

        <MainContent>
          <InfoBar />
          <ImageEdit />
        </MainContent>
      </>
    </AppContainer>
  );
}
