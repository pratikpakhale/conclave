import { sponsorCard } from "@/types/Sponsorship";
import React from "react";

export default function Cards(card: sponsorCard) {
  return (
    <div className="rounded-16px flex flex-col p-24px cursor-pointer hover:[background:linear-gradient(45deg,white,white)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.300/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.300/.48))_border-box] border-transparent animate-border border-[2px] bg-white aspect-square group relative items-center">
      <div className="text-24px font-medium mb-16px">{card?.title}</div>
      <div className="font-light px-28px text-16px">{card?.content}</div>
    </div>
  );
}
