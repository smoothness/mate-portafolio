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
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 1</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700">Razonamiento Lógico Proposicional</summary>
          <div>
            <p className="text-lg mt-8 mb-4">Complete todos los “?” para resolver este ejercicio.</p>
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/tabla-de-verdad.png"
              alt="Next.js Logo"
              width={2700}
              height={1368}
              priority
            />
            <p className="text-lg my-4">Claves</p>
            <div className="mb4">
              <Image
                className="relative drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/claves.png"
                alt="Next.js Logo"
                width={217.5}
                height={172.5}
                priority
              />
            </div>
            <p className="text-xl my-4 underline">Solución</p>
            <p className="text-lg mt-4 mb-8 font-bold">Paso 1. Transcripción</p>
            <Table className="mb-12">
              <TableCaption>Solución ejercicio 1 - Tabla de verdad encriptada.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">p</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">q</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">r</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">¬r</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">p <strong className="text-red-600">?</strong> q</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">¬r ∧ q</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">q <strong className="text-red-600">?</strong> r</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">(p v q) ⇒ (¬r ∧ q)</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">(p v q) ⇒ (¬r ∧ q) ⇒ (q ⇔ r)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center"><strong className="text-red-600">?</strong></TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-lg mt-4 mb-8 font-bold">Paso 2. Reemplazo de variables <strong className="text-red-600">?</strong></p>
            <Table className="mb-12">
              <TableCaption>Solución ejercicio 1 - Tabla de verdad encriptada.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">p</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">q</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">r</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">¬r</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">p <strong className="text-green-600">v</strong> q</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">¬r ∧ q</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">q <strong className="text-green-600">⇔</strong> r</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">(p v q) ⇒ (¬r ∧ q)</TableHead>
                  <TableHead className="font-bold text-lg text-center border bg-sky-100">(p v q) ⇒ (¬r ∧ q) ⇒ (q ⇔ r)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center"><strong className="text-green-600">v</strong></TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>v</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>f</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600">f</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>f</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>v</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600 px-2 py-1 border border-green-600">v</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center"><strong className="text-green-600">f</strong></TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>v</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>v</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600">v</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>v</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>f</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600 px-2 py-1 border border-green-600">f</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-green-600">v</strong></TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>v</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>f</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600">f</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>f</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>f</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600 px-2 py-1 border border-green-600">v</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-green-600">f</strong></TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>v</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>f</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600">f</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>f</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>v</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600 px-2 py-1 border border-green-600">v</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center"><strong className="text-green-600">v</strong></TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>f</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>f</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600">v</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>v</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>v</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600 px-2 py-1 border border-green-600">v</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center"><strong className="text-green-600">f</strong></TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>v</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>v</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600">f</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>f</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>f</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600 px-2 py-1 border border-green-600">v</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-green-600">v</strong></TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>f</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>f</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600">v</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>v</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>f</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600 px-2 py-1 border border-green-600">f</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center"><strong className="text-green-600">f</strong></TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">f</TableCell>
                  <TableCell className="border text-center">v</TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>f</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>f</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600">v</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                  <TableCell className="border text-center">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>v</TableCell>
                          <TableCell>⇒</TableCell>
                          <TableCell>v</TableCell>
                          <TableCell> = </TableCell>
                          <TableCell><strong className="text-green-600 px-2 py-1 border border-green-600">v</strong></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-lg mt-4 mb-8 font-bold">RESPUESTA: <strong className="text-green-600">Tautología</strong></p>
          </div>
        </details>
      </div>

      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 2</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700">Conjuntos</summary>
          <div>
            <p className="text-lg mt-8">Sean los conjuntos:</p>
            <pre><code><i>{`A = {a,b,c,d,e}, B = {d,e,f}, C = {g,h,i,j}, D = {k,l,m,n} y U = {x | x es una legra del abecedario}`} </i></code></pre>
            <p className="text-lg mt-2">Con base en estos conjuntos, hallar:</p>
            <ul className="text-lg mt-2 mb-4">
              <li><pre><code><i>A ∪ B</i></code></pre></li>
              <li><pre><code><i>A ∪ C</i></code></pre></li>
              <li><pre><code><i>A ∩ B</i></code></pre></li>
              <li><pre><code><i>A ∪ U</i></code></pre></li>
              <li><pre><code><i>(A ∪ B) ∩ C</i></code></pre></li>
              <li><pre><code><i>(A ∩ C) ∪ (B ∩ C)</i></code></pre></li>
            </ul>
            <p className="text-xl my-4 underline">Soluciones</p>
            <div className="border border-slate-300 p-6 flex flex-col gap-3 mb-10 text-green-600">
              <pre><code><i>{`A ∪ B = {a,b,c,d,e,f}`}</i></code></pre>
              <pre><code><i>{`A ∪ C = {a,b,c,d,e,g,h,i,j}`}</i></code></pre>
              <pre><code><i>{`A ∩ B = {f}`}</i></code></pre>
              <pre><code><i>{`A ∪ U = {a,b,c,d,e}`}</i></code></pre>
              <pre><code><i>{`(A ∪ B) ∩ C = {a,b,c,d,e,f} ∩ C = {∅}`}</i></code></pre>
              <pre><code><i>{`(A ∩ C) ∪ (B ∩ C) = {∅} ∪ {∅} = {∅}`}</i></code></pre>
            </div>    
          </div>
        </details>
      </div>

      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 3</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700">Técnicas de Conteo</summary>
          <div>
            <p className="text-lg mt-8 font-bold">En una encuesta realizada a 145 estudiantes de una universidad para determinar las
            preferencias de lecturas, se encontró lo siguiente:</p>
            <ul className="text-lg mt-2 mb-4 list-disc list-inside">
              <li>59 leen literatura universal.</li>
              <li>83 leen ciencia ficción.</li>
              <li>21 leen ciencia ficción y novelas, pero no literatura universal.</li>
              <li>15 leen novelas y literatura universal, pero no ciencia ficción.</li>
              <li>12 leen ciencia ficción y literatura universal, pero no leen novelas.</li>
              <li>13 leen exclusivamente novelas.</li>
              <li>41 leen ciencia ficción y novelas, pero no de forma exclusiva.</li>
            </ul>
            <div className="mb4">
              <Image
                className="relative drop-shadow-[0_0_0.3rem_#ffffff70]"
                src="/venn.png"
                alt="Next.js Logo"
                width={600}
                height={0}
                priority
              />
            </div>
            <p className="text-lg mt-8 font-bold">Determine el número de personas que:</p>
            <ol className="text-lg mt-2 mb-4 list-decimal list-inside">
              <li>Leen solamente uno de los géneros.</li>
              <li>Leen los tres géneros.</li>
              <li>Leen otros géneros diferentes a los mencionados.</li>
            </ol>

            <p className="text-xl my-4 underline">Solución</p>
            <ol className="text-lg mt-2 mb-4 list-decimal list-inside text-green-600">
              <li>13</li>
              <li>🤯</li>
              <li>🤯</li>
            </ol>
          </div>
        </details>
      </div>

      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 4</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700">Factorización</summary>
          <div>
            <p className="text-lg mt-8 mb-8">Factorice al máximo las siguientes expresiones:</p>
            <pre><code><i>{`5x (3m - 2n) - y(2n - 3m)`}</i></code></pre>
            <p className="text-xl my-4 underline">Solución</p>
            <div className="border border-slate-300 p-6 flex flex-col gap-3 mb-10">
              <pre><code><i>{`15xm - 10xn - 2yn + 3ym`}</i></code></pre>
              <pre><code><i>{`15xm + 3ym - 10xn - 2yn`}</i></code></pre>
              <pre><code><i>{`(15xm + 3ym) - (10xn + 2yn)`}</i></code></pre>
              <pre><code><i className="text-green-600">{`m(15x + 3y) - n(10x + 2y)`}</i></code></pre>
            </div>

            <pre><code><i>{`25x² - 49`}</i></code></pre>
            <p className="text-xl my-4 underline">Solución</p>
            <div className="border border-slate-300 p-6 flex flex-col gap-3 mb-10">
              <pre><code><i>{`(5x)² - 7²`}</i></code></pre>
              <pre><code><i className="text-green-600">{`(5x - 7)(5x + 7)`}</i></code></pre>
            </div>

            <pre><code><i>{`-16m² + 9`}</i></code></pre>
            <p className="text-xl my-4 underline">Solución</p>
            <div className="border border-slate-300 p-6 flex flex-col gap-3 mb-10">
              <pre><code><i>{`-(16m² - 9)`}</i></code></pre>
              <pre><code><i>{`-((4m)² - 9²)`}</i></code></pre>
              <pre><code><i>{`-((4m - 3)(4m + 3))`}</i></code></pre>
              <pre><code><i className="text-green-600">{`-(4m - 3)(4m + 3)`}</i></code></pre>
            </div>

            <pre><code><i>{`8m⁴ + 27mh³`}</i></code></pre>
            <p className="text-xl my-4 underline">Solución</p>
            <div className="border border-slate-300 p-6 flex flex-col gap-3 mb-10">
              <pre><code><i>{`m(8m³ + 27h³)`}</i></code></pre>
              <pre><code><i>{`m((2m)³ + (3h)³)`}</i></code></pre>
              <pre><code><i>{`m((2m + 3h)(4m² - 6mh + 9h²))`}</i></code></pre>
              <pre><code><i className="text-green-600">{`m(2m + 3h)(4m² - 6mh + 9h²)`}</i></code></pre>
            </div>

            <pre><code><i>{`3ab - 5bx + 6ay - 10xy`}</i></code></pre>
            <p className="text-xl my-4 underline">Solución</p>
            <div className="border border-slate-300 p-6 flex flex-col gap-3 mb-10">
              <pre><code><i>{`(3ab - 5bx) + (6ay - 10xy)`}</i></code></pre>
              <pre><code><i>{`b(3a - 5x) + 2y(3a - 5x)`}</i></code></pre>
              <pre><code><i className="text-green-600">{`(3a - 5x)(b + y)`}</i></code></pre>
            </div>
          </div>
        </details>
      </div>

      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 5</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700">División de Polinomios</summary>
          <div>
            <p className="text-lg mt-8">Dividir</p>
            <pre><code><i>{`3x⁴ + 6x² + 3 / 3x² + 1`} </i></code></pre>
            <p className="text-xl my-4 underline">Solución</p>
            <div className="border border-slate-300 p-6 flex flex-col gap-3 mb-10">
              <pre><code><i>{`3x⁴ / 3x² = x²`}</i></code></pre>
              <pre><code><i>{`x² * (3x² + 1) = (3x⁴ + x²)`}</i></code></pre>
              <pre><code><i>{`(3x⁴ + 6x² + 3) - (3x⁴ + x²) = 5x² + 3`}</i></code></pre>
              <pre><code><i>{`5x² / 3x² = 5/3`}</i></code></pre>
              <pre><code><i>{`5/3 * (3x² + 1) = 5x² + 5/3`}</i></code></pre>
              <pre><code><i>{`(5x² + 3) - (5x² + 5/3) = 3 - 5/3 = 9/3 - 5/3 = 4/3`}</i></code></pre>
              <pre><code><i>{`(5x² + 3) - (5x² + 5/3) = 3 - 5/3 = 9/3 - 5/3 = 4/3`}</i></code></pre>
              <pre><code><i className="text-green-600">{`x² + 5/3 + 4/3 / 3x² + 1`}</i></code></pre>
            </div>
          </div>
        </details>
      </div>


      <p>Añada un pequeño comentario de los temas: Conjuntos y expresiones algebraicas.
      (Si les pareció llamativo, si o no y el porqué) 😄</p>
    </main>
  );
}
