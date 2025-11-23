import { db } from "@/lib/db";
import Link from "next/link";

export const revalidate = 0; 

export default async function Home() {
  // Query SQL Manual
  const [rows]: any = await db.query('SELECT * FROM biodata LIMIT 1');
  const data = rows[0];

  return (
    <div className="max-w-2xl">
      <h1 className="text-6xl font-black text-black mb-4 tracking-tight">Hello</h1>
      <h2 className="text-xl font-medium text-gray-500 mb-8">
        Berikut adalah profil singkat saya
      </h2>

      <p className="text-gray-600 leading-relaxed text-lg text-justify">
        {data?.deskripsi || "Deskripsi loading..."}
      </p>
    </div>
  );
}