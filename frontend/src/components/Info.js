import React from 'react'

export default function Info() {
  return (
    <section className="p-10">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold my-6">¡También te puede interesar!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tarjeta 1 */}
          <a href="https://licenciadigital.conaset.cl/" target="_blank" className="block rounded-lg overflow-hidden">
            <img src="https://www.conductoresolivares.cl/wp-content/uploads/2023/05/licenciadigital.jpg" alt="Licencia Digital" className="w-full" />
          </a>
          {/* Tarjeta 2 */}
          <a href="https://www.conaset.cl/esmoto/" target="_blank" className="block rounded-lg overflow-hidden">
            <img src="https://www.conductoresolivares.cl/wp-content/uploads/2023/05/esmoto-03.jpg" alt="Esmoto" className="w-full" />
          </a>
          {/* Tarjeta 3 */}
          <a href="https://www.conaset.cl/wp-content/uploads/2021/05/Estrategia-Nacional-de-Seguridad-de-Tr%C3%A1nsito_2021-2030.pdf" target="_blank" className="block rounded-lg overflow-hidden">
            <img src="https://www.conductoresolivares.cl/wp-content/uploads/2023/05/estrategianacional-1.png" alt="Estrategia Nacional de Seguridad de Tránsito" className="w-full" />
          </a>
          {/* Tarjeta 4 */}
          <a href="https://www.conaset.cl/revisa-tu-silla/" target="_blank" className="block rounded-lg overflow-hidden">
            <img src="https://www.conductoresolivares.cl/wp-content/uploads/2020/08/sw-edco-acceso-i.png" alt="Revisa tu Silla" className="w-full" />
          </a>
          {/* Tarjeta 5 */}
          <a href="https://www.conaset.cl/preguntas-frecuentes-para-postulantes-extranjeros-a-la-licencia-de-conductor-chilena/" target="_blank" className="block rounded-lg overflow-hidden">
            <img src="https://www.conductoresolivares.cl/wp-content/uploads/2020/08/sw-edco-acceso-j.png" alt="Preguntas Frecuentes para Postulantes Extranjeros" className="w-full" />
          </a>
          {/* Tarjeta 6 */}
          <a href="https://www.conaset.cl/convivencia-de-modos/" target="_blank" className="block rounded-lg overflow-hidden">
            <img src="https://www.conductoresolivares.cl/wp-content/uploads/2020/08/sw-edco-acceso-k.png" alt="Convivencia de Modos" className="w-full" />
          </a>
          {/* Tarjeta 7 */}
          <a href="https://www.conaset.cl/sistemas-retencion-infantil/" target="_blank" className="block rounded-lg overflow-hidden">
            <img src="https://www.conductoresolivares.cl/wp-content/uploads/2020/08/sw-edco-acceso-l.png" alt="Sistemas de Retención Infantil" className="w-full" />
          </a>
          {/* Tarjeta 8 */}
          <a href="https://www.conaset.cl/un-18-seguro/" target="_blank" className="block rounded-lg overflow-hidden">
            <img src="https://www.conductoresolivares.cl/wp-content/uploads/2020/08/sw-edco-acceso-m.png" alt="Un 18 Seguro" className="w-full" />
          </a>
          {/* Tarjeta 9 */}
          <a href="https://www.conaset.cl/encuesta-sobre-deficiencias-viales-y-situaciones-de-riesgo-para-motociclistas/" target="_blank" className="block rounded-lg overflow-hidden">
            <img src="https://www.conductoresolivares.cl/wp-content/uploads/2020/08/sw-edco-acceso-n.png" alt="Encuesta sobre Deficiencias Viales" className="w-full" />
          </a>
        </div>
      </div>
    </section>
  )
}
