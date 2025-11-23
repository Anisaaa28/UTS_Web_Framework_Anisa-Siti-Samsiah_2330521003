import { db } from "@/lib/db";

export const revalidate = 0;

export default async function Pengalaman() {
  const [pengalaman]: any = await db.query('SELECT * FROM pengalaman ORDER BY id DESC');

  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Pengalaman Kerja</h1>
      <div className="w-16 h-1 bg-blue-600 mb-10"></div>

      <div className="border-l-2 border-gray-200 ml-3 space-y-10">
        {pengalaman.map((item: any) => (
          <div key={item.id} className="relative pl-8">
            <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
            
            <h3 className="text-2xl font-bold text-gray-900">{item.posisi}</h3>
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-2 text-sm uppercase">
              <span>{item.perusahaan}</span>
              <span className="text-gray-300">|</span>
              <span>{item.durasi}</span>
            </div>
            <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
              {item.deskripsi}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}