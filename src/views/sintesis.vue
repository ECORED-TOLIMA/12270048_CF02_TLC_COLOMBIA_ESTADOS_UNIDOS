<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda la implementación de estrategias comerciales y logísticas en los procesos de exportación e importación en el marco del Acuerdo de Promoción Comercial entre Colombia y los Estados Unidos, vigente desde 2012. Se estudian las variables que regulan el comercio bilateral, como los mecanismos de defensa comercial, los compromisos laborales, sanitarios y ambientales del acuerdo, la clasificación arancelaria, el régimen de zonas francas, el manejo de divisas y los medios de pago internacionales. Asimismo, se examinan los elementos operativos del comercio exterior, entre ellos el embalaje y empaque para el mercado estadounidense, los documentos soporte de las operaciones, el régimen sancionatorio aduanero y los derechos de propiedad intelectual. A continuación, el mapa conceptual presenta, de manera visual, la organización de los contenidos y la relación entre sus tres ejes temáticos.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual titulado Variables comerciales, logísticas y operativas del comercio exterior organiza el tema central en tres ejes temáticos: las variables del comportamiento comercial y logístico, la implementación de procesos de importación y exportación, y la simulación integral de exportación bajo el TLC. Cada eje desarrolla sus aspectos clave, desde los mecanismos de defensa comercial y los compromisos normativos del acuerdo, hasta los procedimientos operativos y documentales del comercio exterior, articulados en una simulación práctica que integra todos los saberes del componente formativo.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
