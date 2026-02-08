import Hero from "@/components/Hero";
import React from "react";

import { members } from "./members";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Hero pageTitle="Members" sub="of HCF" />

      <section className="flex justify-center items-center sm:py-14 py-6 px-3 sm:px-6 lg:px-10 bg-[#E8EBF2] text-secondaryBg">
        <div className="w-full max-w-7xl rounded-2xl border border-[#B8C1D6] bg-[#F4F7FD] shadow-[0_8px_30px_rgba(44,69,108,0.08)] overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#E6ECF8]">
                <TableRow className="border-b border-[#B8C1D6] hover:bg-transparent">
                  <TableHead className="py-4 text-xl md:text-2xl text-[#45648E] font-semibold tracking-tight">
                    Voting Members
                  </TableHead>
                  <TableHead className="py-4 text-xl md:text-2xl text-[#45648E] font-semibold tracking-tight">
                    Cattery
                  </TableHead>
                  <TableHead className="py-4 text-xl md:text-2xl text-[#45648E] font-semibold tracking-tight">
                    Breeds
                  </TableHead>
                  <TableHead className="py-4 text-xl md:text-2xl text-[#45648E] font-semibold tracking-tight">
                    Email
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow
                    key={member.name}
                    className="text-base md:text-[1.1rem] leading-relaxed border-b border-[#CED7E8] odd:bg-transparent even:bg-[#EEF3FB] hover:bg-[#E4ECF8]"
                  >
                    <TableCell className="py-4 md:py-5 align-middle">{member.name}</TableCell>
                    <TableCell className="py-4 md:py-5 align-middle">
                      {member.link ? (
                        <Link
                          className="text-[#2A4E7A] decoration-[#2A4E7A]/50 underline-offset-2 hover:underline"
                          href={member.link}
                        >
                          {member.cattery}
                        </Link>
                      ) : (
                        member.cattery
                      )}
                    </TableCell>
                    <TableCell className="py-4 md:py-5 align-middle">{member.breed}</TableCell>
                    <TableCell className="py-4 md:py-5 align-middle whitespace-nowrap">{member.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
