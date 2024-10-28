import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Calculo1 from "@/components/Calculo1"
import Calculo2 from "@/components/Calculo2"

function Calculo() {
  return (
    <section id="calculo">
      <div>
        <Tabs defaultValue="parte1">
          <TabsList className="mb-10">
            <TabsTrigger value="parte1">Portafolio Parte #1</TabsTrigger>
            <TabsTrigger value="parte2">Portafolio Parte #2</TabsTrigger>
          </TabsList>
          <TabsContent value="parte1">
            <Calculo1 />
          </TabsContent>
          <TabsContent value="parte2">
            <Calculo2 />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Calculo