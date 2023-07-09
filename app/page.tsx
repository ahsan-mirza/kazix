'use client'
import { isMobile } from "react-device-detect";
import { Main } from "@/components/Main";
import { HydrationProvider, useHydrated } from "react-hydration-provider";

function HydrationFixComponent() {
  const hydrated = useHydrated();
  return hydrated ? <Main/> : null;
}

export default function Home() {
  return (
    <HydrationProvider>
      <main>
        <HydrationFixComponent />
      </main>
    </HydrationProvider>
  );
}
