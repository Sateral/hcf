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

      <section className="flex justify-center items-center sm:py-16 py-6 lg:px-64 px-2 bg-[#E8EBF2] text-secondaryBg">
        <Table>
          <TableHeader>
            <TableRow className="md:text-3xl text-2xl">
              <TableHead>Voting Members</TableHead>
              <TableHead>Cattery</TableHead>
              <TableHead>Breeds</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member, index) => (
              <TableRow key={member.name} className="md:text-xl text-lg">
                <TableCell>{member.name}</TableCell>
                <TableCell>
                  {member.link ? (
                    <Link className="hover:text-blue-400" href={member.link}>
                      {member.cattery}
                    </Link>
                  ) : (
                    member.cattery
                  )}
                </TableCell>
                <TableCell>{member.breed}</TableCell>
                <TableCell className="w-0">{member.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  );
};

export default page;
