import { db } from "@/lib/db";

export const revalidate = 0;

export default async function Keahlian() {
  const [skills]: any = await db.query('SELECT * FROM keahlian');

  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Keahlian</h1>
      <div className="w-16 h-1 bg-blue-600 mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((item: any) => (
          <div key={item.id} className="flex items-center p-5 bg-white shadow-sm rounded-xl border border-gray-100">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-4"></div>
            <span className="text-lg font-bold text-gray-700">{item.skill_nama}</span>
          </div>
        ))}
      </div>
    </div>
  );
}