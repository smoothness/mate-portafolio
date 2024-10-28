/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

function Calculo2() {
  return (
    <>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 1B</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Determine, a partir del gráfico dado, los siguientes límites</summary>
          <div className="flex justify-between">
            <div>
              <ol className="list-[lower-alpha] list-inside">
                <li className="mb-8 flex items-center">
                  <img src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to-\infty}\int(x)" title="\displaystyle\lim_{x\to-\infty}\int(x)" alt="Porfafolio de Cálculo"  />&nbsp;=&nbsp;
                  <span className="bg-green-600/20 p-2">2</span>
                </li>
                <li className="mb-8 flex items-center">
                  <img src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to-2}\int(x)" title="\displaystyle\lim_{x\to-2}\int(x)" alt="Porfafolio de Cálculo"  />&nbsp;=&nbsp;
                  <span className="bg-green-600/20 p-2 h-10 flex items-center">
                    <img src="https://latex.codecogs.com/png.image?\dpi{110}-\infty" alt="Porfafolio de Cálculo"  />
                  </span>
                </li>
                <li className="mb-8 flex items-center">
                  <img src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to-1}\int(x)" title="\displaystyle\lim_{x\to-1}\int(x)" alt="Porfafolio de Cálculo"  />&nbsp;=&nbsp;
                  <span className="bg-green-600/20 p-2">1</span>
                </li>
                <li className="mb-8 flex items-center">
                  <img src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to&space;0}\int(x)" title="\displaystyle\lim_{x\to 0}\int(x)" alt="Porfafolio de Cálculo"  />&nbsp;=&nbsp;
                  <span className="bg-green-600/20 p-2 h-10 flex items-center">
                    <img src="https://latex.codecogs.com/png.image?\dpi{110}+\infty" alt="Porfafolio de Cálculo"  />
                  </span>
                </li>
                <li className="mb-8 flex items-center">
                  <img src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to&space;1}\int(x)" title="\displaystyle\lim_{x\to 1}\int(x)" alt="Porfafolio de Cálculo"  />&nbsp;=&nbsp;
                  <span className="bg-green-600/20 p-2 h-10 flex items-center">
                    <img src="https://latex.codecogs.com/png.image?\dpi{110}\varnothing" alt="Porfafolio de Cálculo"  />
                  </span>
                </li>
                <li className="mb-8 flex items-center">
                <img src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to+\infty}\int(x)" title="\displaystyle\lim_{x\to-\infty}\int(x)" alt="Porfafolio de Cálculo"  />&nbsp;=&nbsp;
                <span className="bg-green-600/20 p-2">2</span>
                </li>
              </ol>
            </div>
            <figure>
              <Image
                src="/calculo-1-b.png"
                alt="Gráfico ejercicio 1"
                width={400}
                height={792}
                priority
              />
              <figcaption className="text-center">Gráfico ejercicio 1</figcaption>
            </figure>
          </div>
        </details>
      </div>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 2B - A</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Simplifique la expresión y calcule su límite</summary>
          <div>
            <img className="inline-block mb-6" src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to&space;1} \frac{p^{3}&plus;p^{2}-2}{2-\sqrt{p&plus;3}}" title="\displaystyle\lim_{x\to 1}\int(x)\frac{p^{3}+p^{2}-2}{2-\sqrt{p+3}}" alt="Porfafolio de Cálculo"  />
            <ol className="pl-6">
              <li className="list-decimal mb-10">
                <span>Evaluar</span>
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}\frac{p^{3}&plus;p^{2}-2}{2-\sqrt{p&plus;3}}=\frac{1&plus;1-2}{2-2}=\frac{0}{0}" title="\frac{p^{3}+p^{2}-2}{2-\sqrt{p+3}}=\frac{1+1-2}{2-2}=\frac{0}{0}" alt="Porfafolio de Cálculo"  />
              </li>
              <li className="list-decimal mb-10">
                <span>Encontrar factor indeterminante</span>
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}x-1=0\Rightarrow&space;x=1&space;" title="x-1=0\Rightarrow x=1" alt="Porfafolio de Cálculo"  />
              </li>
              <li className="list-decimal mb-10">
                <span>Desarrollar</span>
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}\lim_{x\to&space;1} \frac{p^{3}&plus;p^{2}-2}{2-\sqrt{p&plus;3}}" title="\displaystyle\lim_{x\to 1}\int(x)\frac{p^{3}+p^{2}-2}{2-\sqrt{p+3}}" alt="Porfafolio de Cálculo"  />
                <img className="mt-6" src="https://latex.codecogs.com/png.image?\dpi{110}\lim_{x\to 1}\frac{p^{3}&plus;p^{2}-2}{2-\sqrt{p&plus;3}}.\frac{2&plus;\sqrt{p&plus;3}}{2&plus;\sqrt{p&plus;3}}" title="\frac{p^{3}+p^{2}-2}{2-\sqrt{p+3}}.\frac{2+\sqrt{p+3}}{2+\sqrt{p+3}}" alt="Porfafolio de Cálculo"  />
                <img className="mt-6" src="https://latex.codecogs.com/png.image?\dpi{110}\lim_{x\to 1}\frac{(p^{3}&plus;p^{2}-2).(2&plus;\sqrt{p&plus;3})}{(2-\sqrt{p&plus;3}).(2&plus;\sqrt{p&plus;3})}" title="\frac{(p^{3}+p^{2}-2).(2+\sqrt{p+3})}{(2-\sqrt{p+3}).(2+\sqrt{p+3})}" alt="Porfafolio de Cálculo"  />
                <img className="mt-6" src="https://latex.codecogs.com/png.image?\dpi{110}\lim_{x\to 1}\frac{(p^{3}&plus;p^{2}-2).(2&plus;\sqrt{p&plus;3})}{2^2-(\sqrt{p&plus;3})^2}" title="\frac{(p^{3}+p^{2}-2).(2+\sqrt{p+3})}{2^2-(\sqrt{p+3})^2}" alt="Porfafolio de Cálculo"  />
                <img className="mt-6" src="https://latex.codecogs.com/png.image?\dpi{110}\lim_{x\to 1}\frac{(p^{3}&plus;p^{2}-2).(2&plus;\sqrt{p&plus;3})}{4-p&plus;3}" title="\frac{(p^{3}+p^{2}-2).(2+\sqrt{p+3})}{4-p+3}" alt="Porfafolio de Cálculo"  />
                <img className="mt-6" src="https://latex.codecogs.com/png.image?\dpi{110}\lim_{x\to 1}\frac{(p^{3}&plus;p^{2}-2).(2&plus;\sqrt{p&plus;3})}{4-p&plus;3}" title="\frac{(p^{3}+p^{2}-2).(2+\sqrt{p+3})}{4-p+3}" alt="Porfafolio de Cálculo"  />
                <img className="mt-6" src="https://latex.codecogs.com/png.image?\dpi{110}\lim_{x\to 1}\frac{(p^{3}&plus;p^{2}-2).(2&plus;\sqrt{p&plus;3})}{7-p}" title="\frac{(p^{3}+p^{2}-2).(2+\sqrt{p+3})}{7-p}" alt="Porfafolio de Cálculo"  />
              </li>
              <li className="list-decimal mb-10">
                <span>Re-evaluar</span>
                <img className="mt-6" src="https://latex.codecogs.com/png.image?\dpi{110}\frac{(1^{3}&plus;1^{2}-2).(2&plus;\sqrt{1&plus;3})}{7-1}" title="\frac{(1^{3}+1^{2}-2).(2+\sqrt{1+3})}{7-1}" alt="Porfafolio de Cálculo"  />
                <img className="mt-6" src="https://latex.codecogs.com/png.image?\dpi{110}\frac{(1&plus;1-2).(2&plus;\sqrt{4})}{6}" title="\frac{(1+1-2).(2+\sqrt{4})}{6}" alt="Porfafolio de Cálculo"  />
                <img className="mt-6" src="https://latex.codecogs.com/png.image?\dpi{110}\frac{0.(2&plus;2)}{6}" title="\frac{0.(2+2)}{6}" alt="Porfafolio de Cálculo"  />
                <div className="flex items-end bg-green-600/20 p-6 pr-5 mt-6 w-fit">
                  <img className="block"  src="https://latex.codecogs.com/png.image?\dpi{110}\frac{0}{6}" title="\frac{0}{6}" alt="Porfafolio de Cálculo"  />
                  <sub className="block">{`//`}</sub>
                </div>
              </li>
            </ol>
          </div>
        </details>
      </div>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 2B - B</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Simplifique la expresión y calcule su límite</summary>
          <div>
            <img className="inline-block mb-6" src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{w\to-1}\frac{w&plus;1}{3x-\sqrt{6w^{2}&plus;3}}" title="\displaystyle\lim_{w\to-1}\frac{w+1}{3x-\sqrt{6w^{2}+3}}" alt="Porfafolio de Cálculo" />
            <ol className="pl-6">
              <li className="list-decimal mb-10">
                <span>Evaluar</span>
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}\frac{-1&plus;1}{3.-1-\sqrt{6.-1^{2}&plus;3}}=\frac{0}{-3-(\sqrt{-6^{2}&plus;3})}=\frac{0}{-3-(-36&plus;3)}=\frac{0}{-3-(-33)}=\frac{0}{-3&plus;30}=\frac{0}{27}=0" title="\frac{-1+1}{3.-1-\sqrt{6.-1^{2}+3}}=\frac{0}{-3-(\sqrt{-6^{2}+3})}=\frac{0}{-3-(-36+3)}=\frac{0}{-3-(-33)}=\frac{0}{-3+30}=\frac{0}{27}=0" alt="Porfafolio de Cálculo" />
              </li>
            </ol>
            <div className="flex items-end bg-green-600/20 p-3 mt-6 w-fit">
              <p>No existe el límite</p>
              <sub className="block">{`//`}</sub>
            </div>
          </div>
        </details>
      </div>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 2B - C</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Simplifique la expresión y calcule su límite</summary>
          <div>
            <img className="inline-block mb-6" src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{b\to&space;1}\frac{\left|b\right|-1}{b&plus;1}" title="\displaystyle\lim_{b\to 1}\frac{\left|b\right|-1}{b+1}" alt="Porfafolio de Cálculo" />
            <ol className="pl-6">
              <li className="list-decimal mb-10">
                <span>Evaluar</span>
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}\frac{\left|1\right|-1}{1&plus;1}=\frac{1-1}{1&plus;1}=\frac{0}{2}=0" title="\frac{\left|1\right|-1}{1+1}=\frac{1-1}{1+1}=\frac{0}{2}=0" alt="Porfafolio de Cálculo" />
              </li>
            </ol>
            <div className="flex items-end bg-green-600/20 p-3 mt-6 w-fit">
              <p>No existe el límite</p>
              <sub className="block">{`//`}</sub>
            </div>
          </div>
        </details>
      </div>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 2B - D</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Simplifique la expresión y calcule su límite</summary>
          <div>
            <img className="inline-block mb-6" src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{t\to&space;0}\frac{2t-1-1}{t^{2}-t^{4}}" title="\displaystyle\lim_{t\to 0}\frac{\left|b\right|-1}{b+1}" alt="Porfafolio de Cálculo" />
            <ol className="pl-6">
              <li className="list-decimal mb-10">
                <span>Evaluar</span>
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}\frac{0.t-1}{1^{2}-1^{4}}=\frac{0-1}{1-1}=\frac{-1}{0}" title="\frac{0.t-1}{1^{2}-1^{4}}=\frac{0-1}{1-1}=\frac{-1}{0}" alt="Porfafolio de Cálculo" />
              </li>
              <li className="list-decimal mb-8">
                <span>Buscar factor indeterminante</span>
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}2t-1=0\Rightarrow&space;2t=1\Rightarrow&space;t=\frac{1}{2}" title="2t-1=0\Rightarrow 2t=1\Rightarrow t=\frac{1}{2}" alt="Porfafolio de Cálculo" />
              </li>
              <li className="list-decimal mb-10">
                <span>Desarrollo</span>
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{t\to&space;0^{+}}\frac{2t-1}{t^{2}-t{4}}" title="\displaystyle\lim_{t\to 0^{+}}\frac{2t-1}{t^{2}-t{4}}" alt="Porfafolio de Cálculo" />
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{t\to&space;0^{-}}\frac{2t-1}{t^{2}-t{4}}\Rightarrow&space;x>0\Rightarrow&space;0^{&plus;}\Rightarrow\frac{-1}{0^{&plus;}}\Rightarrow-\infty&space;" title="\displaystyle\lim_{t\to 0^{-}}\frac{2t-1}{t^{2}-t{4}}\Rightarrow x>0\Rightarrow 0^{+}\Rightarrow\frac{-1}{0^{+}}\Rightarrow-\infty" alt="Porfafolio de Cálculo" />
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{t\to&space;0^{-}}\frac{2t-1}{t^{2}-t{4}}\Rightarrow&space;x<0\Rightarrow&space;0^{-}\Rightarrow\frac{-1}{0^{-}}\Rightarrow&plus;\infty&space;" title="\displaystyle\lim_{t\to 0^{-}}\frac{2t-1}{t^{2}-t{4}}\Rightarrow x<0\Rightarrow 0^{-}\Rightarrow\frac{-1}{0^{-}}\Rightarrow+\infty" alt="Porfafolio de Cálculo" />
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}-\infty\not\equiv&plus;\infty&space;" title="-\infty\not\equiv+\infty" alt="Porfafolio de Cálculo" />
              </li>
            </ol>
            <div className="flex items-end bg-green-600/20 p-3 mt-6 w-fit">
              <p>No existe el límite</p>
              <sub className="block">{`//`}</sub>
            </div>
          </div>
        </details>
      </div>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 2B - E</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Simplifique la expresión y calcule su límite</summary>
          <div>
            <img className="inline-block mb-6" src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to&plus;\infty}\frac{5x-1}{x^{2}-x^{4}}" title="\displaystyle\lim_{x\to+\infty}\frac{5x-1}{x^{2}-x^{4}}" alt="Porfafolio de Cálculo" />
            <ol className="pl-6">
              <li className="list-decimal mb-10">
                <span>Evaluar</span>
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}\frac{&plus;\infty-1}{&plus;\infty-&plus;\infty}\Rightarrow\frac{&plus;\infty}{&plus;\infty-\infty}\Rightarrow\frac{&plus;\infty}{0}" title="\frac{+\infty-1}{+\infty-+\infty}\Rightarrow\frac{+\infty}{+\infty-\infty}\Rightarrow\frac{+\infty}{0}" alt="Porfafolio de Cálculo" />
              </li>
            </ol>
            <div className="flex items-end bg-green-600/20 p-3 mt-6 w-fit">
              <p>No existe el límite</p>
              <sub className="block">{`//`}</sub>
            </div>
          </div>
        </details>
      </div>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 2B - F</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Simplifique la expresión y calcule su límite</summary>
          <div>
            <img className="inline-block mb-6" src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to-\infty}\frac{2x^{5}&plus;3x^{7}}{x^{2}-x^{7}}" title="\displaystyle\lim_{x\to-\infty}\frac{2x^{5}+3x^{7}}{x^{2}-x^{7}}" alt="Porfafolio de Cálculo" />
            <ol className="pl-6">
              <li className="list-decimal mb-10">
                <span>Evaluar</span>
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}\frac{2.-\infty^{5}&plus;3.-\infty^{7}}{(-\infty^{2})-(-\infty^{7})}\Rightarrow\frac{(-\infty)&plus;(-\infty)}{(&plus;\infty)-(-\infty)}\Rightarrow\frac{-\infty}{&plus;\infty}\Rightarrow-\infty" title="\frac{2.-\infty^{5}+3.-\infty^{7}}{(-\infty^{2})-(-\infty^{7})}\Rightarrow\frac{(-\infty)+(-\infty)}{(+\infty)-(-\infty)}\Rightarrow\frac{-\infty}{+\infty}\Rightarrow-\infty" alt="Porfafolio de Cálculo" />
              </li>
            </ol>
            <div className="flex items-end bg-green-600/20 p-3 mt-6 w-fit">
              <p>No existe el límite</p>
              <sub className="block">{`//`}</sub>
            </div>
          </div>
        </details>
      </div>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 2B - G</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Simplifique la expresión y calcule su límite</summary>
          <div>
            <img className="inline-block mb-6" src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to&plus;\infty}\sqrt{9x^{2}&plus;1}-3x" title="\displaystyle\lim_{x\to+\infty}\sqrt{9x^{2}+1}-3x" alt="Porfafolio de Cálculo" />
            <ol className="pl-6">
              <li className="list-decimal mb-10">
                <span>Evaluar</span>
                <img className="mt-4" src="https://latex.codecogs.com/png.image?\dpi{110}\sqrt{9.&plus;\infty^{2}&plus;1}-3.&plus;\infty\Rightarrow\sqrt{&plus;\infty}-(&plus;\infty)\Rightarrow&plus;\infty-(&plus;\infty)\Rightarrow&plus;\infty-\infty=0=\frac{0}{1}" title="\sqrt{9.+\infty^{2}+1}-3.+\infty\Rightarrow\sqrt{+\infty}-(+\infty)\Rightarrow+\infty-(+\infty)\Rightarrow+\infty-\infty=0=\frac{0}{1}" alt="Porfafolio de Cálculo" />
              </li>
            </ol>
            <div className="flex items-end bg-green-600/20 p-3 mt-6 w-fit">
              <p>No existe el límite</p>
              <sub className="block">{`//`}</sub>
            </div>
          </div>
        </details>
      </div>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 2B - H</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Simplifique la expresión y calcule su límite</summary>
          <div>
            <img className="inline-block mb-6" src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to-4^{-}}(\frac{1}{7})^{\frac{5}{4&plus;x}}" title="\displaystyle\lim_{x\to-4^{-}}(\frac{1}{7})^{\frac{5}{4+x}}" alt="Porfafolio de Cálculo" />
            <ol className="pl-6">
              <li className="list-decimal mb-10">
                <span>Evaluar</span>
                <img src="https://latex.codecogs.com/png.image?\dpi{110}(\frac{1}{7})^{\frac{5}{4&plus;-4}}\Rightarrow\frac{1}{7}^{\frac{5}{0}}\Rightarrow NaN&space;\Rightarrow\varnothing" title="(\frac{1}{7})^{\frac{5}{4+-4}}\Rightarrow\frac{1}{7}^{\frac{5}{0}}=\Rightarrow NaN\Rightarrow\varnothing" alt="Porfafolio de Cálculo" />
              </li>
            </ol>
            <div className="flex items-end bg-green-600/20 p-3 mt-6 w-fit">
              <p>No existe el límite</p>
              <sub className="block">{`//`}</sub>
            </div>
          </div>
        </details>
      </div>
    </>
  )
}

export default Calculo2