import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Mate1 from "@/components/Mate1"
import Calculo from "@/components/Calculo"

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl py-20"> 
      <div className="shadow-md p-10 mb-16">
      <Tabs defaultValue="mate1">
        <TabsList className="mb-10">
          <TabsTrigger value="mate1">Matemática y Lógica Básica</TabsTrigger>
          <TabsTrigger value="calculo">Cálculo Diferencial e Integral</TabsTrigger>
        </TabsList>
        <TabsContent value="mate1">
          <Mate1 />
        </TabsContent>
        <TabsContent value="calculo">
          <Calculo />
        </TabsContent>
      </Tabs>
      </div>
    </main>
  );
}
