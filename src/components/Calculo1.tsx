function Calculo1() {
  return (
    <>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 1A</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Límites - Cuadrático 1</summary>
          <div className="mb-8">
            <img src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to-1}\frac{\mathrm{4-\sqrt{15-x}}}{\mathrm{x^2}}" title="\displaystyle\lim_{x\to-1}\frac{\mathrm{4-\sqrt{15-x}}}{\mathrm{x^2}}" /> 
          </div>
          <p className="text-sm mb-4 text-green-600">1. Evaluar</p>
          <div className="mb-8">
            <img src="https://latex.codecogs.com/png.image?\dpi{110}\frac{\mathrm{4-\sqrt{15&plus;1}}}{\mathrm{-1^2}}=\frac{\mathrm{4-\sqrt{16}}}{\mathrm{1}}=\frac{4-4}{1}=\frac{0}{1}=0" title="\frac{\mathrm{4-\sqrt{15+1}}}{\mathrm{-1^2}}=\frac{\mathrm{4-\sqrt{16}}}{\mathrm{1}}=\frac{4-4}{1}=\frac{0}{1}=0" />
          </div>
          <p className="">R. 0</p>
        </details>
      </div>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 2A</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Límites - Cuadrático 2</summary>
          <div className="mb-8">
            <img src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{x\to3}\frac{\mathrm{3x-x^2}}{\mathrm{1&plus;\sqrt{1&plus;x}}" title="\displaystyle\lim_{x\to3}\frac{\mathrm{3x-x^2}}{\mathrm{1+\sqrt{1+x}}" />
          </div>
          <p className="text-sm mb-4 text-green-600">1. Evaluar</p>
          <div className="mb-8">
            <img src="https://latex.codecogs.com/png.image?\dpi{110}\frac{9-9}{1&plus;\sqrt{4}}=\frac{0}{3}" title="\frac{9-9}{1+\sqrt{4}}=\frac{0}{3}" />
          </div>
          <p className="">R. 0</p>
        </details>
      </div>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 3A</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Límites - Cuadrático 3</summary>
          <div className="mb-8">
            <img src="https://latex.codecogs.com/png.image?\dpi{110}\displaystyle\lim_{t\to\frac{5}{2}}\frac{4-\sqrt{2t&plus;11}}{2t-5}" title="\displaystyle\lim_{t\to\frac{5}{2}}\frac{4-\sqrt{2t+11}}{2t-5}" />
          </div>
          <p className="text-sm mb-4 text-green-600">1. Evaluar</p>
          <div className="mb-8">
            <img src="https://latex.codecogs.com/png.image?\dpi{110}\frac{4-\sqrt{2\frac{5}{2}}&plus;11}{2\frac{5}{2}-5}=\frac{4-\sqrt{5&plus;11}}{5-5}=\frac{4-\sqrt{16}}{0}=\frac{4-4}{0}=\frac{0}{0}" title="\frac{4-\sqrt{2\frac{5}{2}}+11}{2\frac{5}{2}-5}=\frac{4-\sqrt{5+11}}{5-5}=\frac{4-\sqrt{16}}{0}=\frac{4-4}{0}=\frac{0}{0}" />
          </div>
          <p className="text-sm mb-4 text-green-600">2. Hallar valor indeterminante</p>
          <div className="mb-2">
            <img src="https://latex.codecogs.com/png.image?\dpi{110}t\to\frac{5}{2}\Rightarrow&space;2t=5\Rightarrow&space;2t-5=0&space;" title="t\to\frac{5}{2}\Rightarrow 2t=5\Rightarrow 2t-5=0 " />
          </div>
          <p className="text-sm text-blue-800 mb-2">Valor indeterminante = </p>
          <div className="mb-8">
            <img src="https://latex.codecogs.com/png.image?\dpi{110}2t-5" title="2t-5" />
          </div>
          <p className="text-sm mb-4 text-green-600">3. Desarrollo (Factorizo, racionalizo, valor absoluto o trigonometría)</p>
          <div className="flex mb-6">
            <img src="https://latex.codecogs.com/svg.image?\displaystyle\displaystyle\lim_{t\to\frac{5}{2}}\frac{(4-\sqrt{st&plus;11})}{2t-5}*\frac{(4&plus;\sqrt{2t&plus;11})}{(4&plus;\sqrt{2t&plus;11})}" title="\displaystyle\displaystyle\lim_{t\to\frac{5}{2}}\frac{(4-\sqrt{st+11})}{2t-5}*\frac{(4+\sqrt{2t+11})}{(4+\sqrt{2t+11})}" />
          </div>
          <div className="flex mb-6">
            <img src="https://latex.codecogs.com/svg.image?\displaystyle\lim_{t\to\frac{5}{2}}\frac{4^2-(\sqrt{2t_11})^2}{(2t-5)(4&plus;\sqrt{2t&plus;11})}" title="\displaystyle\lim_{t\to\frac{5}{2}}\frac{4^2-(\sqrt{2t_11})^2}{(2t-5)(4+\sqrt{2t+11})}" />
          </div>
          <div className="flex mb-6">
            <img src="https://latex.codecogs.com/svg.image?\displaystyle\lim_{t\to\frac{5}{2}}\frac{16-(2t&plus;11)}{(2t-5)(4&plus;\sqrt{2t+11}))}" title="\displaystyle\lim_{t\to\frac{5}{2}}\frac{16-(2t+11)}{(2t-5)(4+\sqrt{2t+11}))}" />
          </div>
          <div className="flex mb-6">
            <img src="https://latex.codecogs.com/svg.image?\displaystyle\lim_{t\to\frac{5}{2}}\frac{16-2t-11)}{(2t-5)(4&plus;\sqrt{2t+11}))}" title="\displaystyle\lim_{t\to\frac{5}{2}}\frac{16-2t-11)}{(2t-5)(4+\sqrt{2t+11}))}" />
          </div>
          <div className="flex mb-6">
            <img src="https://latex.codecogs.com/svg.image?\displaystyle\lim_{t\to\frac{5}{2}}\frac{5-2t}{(2t-5)(4&plus;\sqrt{2t+11}))}" title="\displaystyle\lim_{t\to\frac{5}{2}}\frac{5-2t}{(2t-5)(4+\sqrt{2t+11}))}" />
          </div>
          <div className="flex mb-6">
            <img src="https://latex.codecogs.com/svg.image?\displaystyle\lim_{t\to\frac{5}{2}}\frac{-1}{(4&plus;\sqrt{2t&plus;11}))}" title="\displaystyle\lim_{t\to\frac{5}{2}}\frac{-1}{4+\sqrt{2t+11})}" />
          </div>
          <p className="text-sm mb-4 text-green-600">Volver a evaluar</p>
          <div className="flex mb-6">
            <img src="https://latex.codecogs.com/svg.image?\frac{-1}{4&plus;\sqrt{2\frac{5}{2}&plus;11}}" title="\frac{-1}{4+\sqrt{2\frac{5}{2}+11}}" />
          </div>
          <div className="flex mb-6">
            <img src="https://latex.codecogs.com/svg.image?\frac{-1}{4&plus;\sqrt{16}}" title="\frac{-1}{4+\sqrt{16}}" />
          </div>
          <div className="flex mb-6">
            <img src="https://latex.codecogs.com/svg.image?\frac{-1}{8}" title="\frac{-1}{8}" />
          </div>
          <p className="">R.
          <img src="https://latex.codecogs.com/svg.image?\frac{-1}{8}" title="\frac{-1}{8}" />
          </p>
        </details>
      </div>
      <div className="shadow-md p-10 mb-16">
        <h1 className="text-2xl font-bold text-slate-500 uppercase mb-4">Ejercicio 4A</h1>
        <details>
          <summary className="text-xl font-bold text-slate-700 mb-8">Límites - Valor Absoluto</summary>
          <div className="mb-8">
            <img src="https://latex.codecogs.com/svg.image?\displaystyle\lim_{x\to-1}\frac{\left|x&plus;1\right|}{2x^3&plus;3x&plus;1}" title="\displaystyle\lim_{x\to-1}\frac{\left|x+1\right|}{2x^3+3x+1}" />
          </div>
          <p className="text-sm mb-4 text-green-600">1. Evaluar</p>
          <div className="mb-8">
            <img src="https://latex.codecogs.com/svg.image?\frac{\left|-1&plus;1\right|}{2*-1^3&plus;3*-1&plus;1}" title="\frac{\left|-1+1\right|}{2*-1^3+3*-1+1}" />
          </div>
          <div className="mb-8">
            <img src="https://latex.codecogs.com/svg.image?\frac{\left|0\right|}{2*-1^3&plus;3*-1&plus;1}=\frac{\left|0\right|}{0}" title="\frac{\left|0\right|}{2*-1^3+3*-1+1}=\frac{\left|0\right|}{0}" />
          </div>    
          <p className="">R. 0</p>
        </details>
      </div>
    </>
  )
}

export default Calculo1