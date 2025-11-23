import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // <--- INI WAJIB ADA!
import Link from "next/link";
import { db } from "@/lib/db";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV Anisa",
  description: "CV Web UTS",
};

async function getBiodata() {
  try {
    const query = 'SELECT * FROM biodata LIMIT 1';
    const [rows]: any = await db.query(query);
    return rows[0];
  } catch (error) {
    return null;
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getBiodata();

  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row min-h-screen text-slate-800 font-sans">
          
          {/* SIDEBAR KIRI (Background Krem) */}
          <div className="w-full md:w-[35%] bg-[#EAE6D8] flex flex-col items-center justify-center p-8 text-center relative">
            <div className="bg-[#F4F0E6] shadow-xl p-8 rounded-sm max-w-xs w-full z-10">
              
              {/* FOTO PROFIL */}
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-md bg-gray-200">
                <img 
                  src="/foto.jpg" 
                  alt="Foto Profil" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* NAMA */}
              <h1 className="text-2xl font-extrabold text-gray-800 uppercase tracking-wide mb-3">
                {user?.nama || "Anisa Siti Samsiah"}
              </h1>
              <div className="w-12 h-1 bg-blue-600 mx-auto mb-6"></div>
              
              {/* KONTAK */}
              <div className="text-sm text-gray-600 space-y-2 font-medium">
                <p>{user?.email}</p>
                <p>{user?.no_hp}</p>
              </div>
            </div>
          </div>

          {/* KONTEN KANAN (Background Putih) */}
          <div className="w-full md:w-[65%] bg-white flex flex-col">
            <header className="py-8 px-12 flex justify-end">
              <nav className="flex space-x-8 text-xs font-bold text-gray-500 tracking-widest">
                <Link href="/" className="hover:text-black uppercase transition">Biodata</Link>
                <Link href="/pendidikan" className="hover:text-black uppercase transition">Pendidikan</Link>
                <Link href="/keahlian" className="hover:text-black uppercase transition">Keahlian</Link>
                <Link href="/pengalaman" className="hover:text-black uppercase transition">Pengalaman</Link>
              </nav>
            </header>

            <main className="flex-1 px-12 py-6 flex flex-col justify-center animate-pulse-once">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}