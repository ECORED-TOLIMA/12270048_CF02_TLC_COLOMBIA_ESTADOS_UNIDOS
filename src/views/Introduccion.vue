<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/intro/1.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p En un entorno globalizado, el aprovechamiento de los acuerdos comerciales se convierte en un factor clave para la competitividad empresarial. El Tratado de Libre Comercio entre Colombia y Estados Unidos ofrece oportunidades significativas para el crecimiento de las organizaciones, siempre que estas implementen de manera eficiente estrategias comerciales y logísticas alineadas con sus disposiciones. Aprovechar estas ventajas requiere un conocimiento profundo no solo del marco arancelario, sino del conjunto de variables que regulan el comportamiento del comercio en la práctica cotidiana.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-2
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-base.p-3.bg-r8(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/intro/2.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p Este componente formativo orienta el desarrollo de competencias para planificar, ejecutar y evaluar los procesos de exportación e importación, integrando aspectos normativos, operativos y estratégicos. A través de este enfoque, se promueve la toma de decisiones informadas que contribuyan al posicionamiento de las empresas en mercados internacionales. La articulación entre la norma, la logística y la estrategia comercial constituye el hilo conductor que atraviesa cada una de las unidades temáticas propuestas.

        p.mt-2 Asimismo, se abordan de manera general las variables del comportamiento comercial y logístico en el marco del TLC, así como los elementos que intervienen en los procesos de importación y exportación. Este enfoque permite comprender su aplicación en contextos reales, incluyendo el desarrollo de actividades asociadas al comercio exterior y su articulación en una visión integral de operación. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:


    .row.justify-content-center.align-items-center.mt-4           
      .col-lg-12
        figure(data-aos="fade-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



</template>

<script>
export default {
  name: 'Introduccion',
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
