import { db } from "@/lib/db";

export const revalidate = 0;

export default async function Pendidikan() {
  const [pendidikan]: any = await db.query('SELECT * FROM pendidikan');

  return (
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Pendidikan</h1>
      <div className="w-16 h-1 bg-blue-600 mb-10"></div>

      <div className="grid gap-8">
        {pendidikan.map((item: any) => (
          <div key={item.id} className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold text-gray-900">{item.institusi}</h2>
            <p className="text-blue-600 font-semibold text-lg mt-1">{item.gelar}</p>
            <p className="text-gray-500 font-mono text-sm mt-2">{item.tahun}</p>
          </div>
        ))}
      </div>
    </div>
  );
}