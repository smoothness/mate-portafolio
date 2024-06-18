import Image from "next/image";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Home() {
  return (
      // <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    <main className="mx-auto max-w-screen-xl py-20"> 
      <div className="shadow-md p-10">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 1</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700">Tabla de verdad encriptada</summary>
          <div>
            <p className="text-lg mt-8 mb-4">Complete todos los “?” para resolver el ejercicio.</p>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/tabla-de-verdad.png"
              alt="Next.js Logo"
              width={2700}
              height={1368}
              priority
            />
            <p className="text-lg my-4">Claves</p>
            <Image
              className="relative drop-shadow-[0_0_0.3rem_#ffffff70]"
              src="/claves.png"
              alt="Next.js Logo"
              width={217.5}
              height={172.5}
              priority
            />
            <p className="text-lg my-4 underline">Solución</p>
            <Table>
              <TableCaption>Solución ejercicio 1 - Tabla de verdad encriptada.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-lg border bg-sky-100">P</TableHead>
                  <TableHead className="font-bold text-lg border bg-sky-100">Q</TableHead>
                  <TableHead className="font-bold text-lg border bg-sky-100">R</TableHead>
                  <TableHead className="font-bold text-lg border bg-sky-100">!R</TableHead>
                  <TableHead className="font-bold text-lg border bg-sky-100">P || R</TableHead>
                  <TableHead className="font-bold text-lg border bg-sky-100">!R && Q</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border">V</TableCell>
                  <TableCell className="border">V</TableCell>
                  <TableCell className="border">V</TableCell>
                  <TableCell className="border">F</TableCell>
                  <TableCell className="border">V</TableCell>
                  <TableCell className="border">F</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </details>
      </div>
    </main>
  );
}
