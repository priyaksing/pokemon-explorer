"use client";
import { useState } from "react";

export default function Pagination({
  totalPages,
  setPage,
}: {
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [activePage, setActivePage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex gap-2 xl:gap-10 justify-center">
      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => {
            setPage(page);
            setActivePage(page);
          }}
          className={`px-3 py-2 text-xl font-light hover:bg-white/50 hover:text-black rounded-full ${
            page === activePage && "bg-white/50 text-black"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
