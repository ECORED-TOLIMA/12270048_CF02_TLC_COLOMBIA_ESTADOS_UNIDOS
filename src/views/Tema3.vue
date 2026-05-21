<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Simulación integral de una operación de exportación bajo el TLC

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/1.svg', alt='', style="width: 290px").m-auto
      .col-lg-9
        p La simulación de una operación de exportación permite integrar los conocimientos adquiridos sobre normatividad, documentación, logística, requisitos sanitarios y procedimientos aduaneros aplicados al comercio exterior. A través de este ejercicio práctico se recrean situaciones reales relacionadas con el proceso exportador, facilitando la comprensión de cada una de las etapas necesarias para el envío internacional de mercancías. Esta estrategia fortalece la capacidad de análisis, organización y toma de decisiones en escenarios comerciales internacionales.

    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-1(data-aos="fade-right")
              .col-lg.p-4
                p El desarrollo de una simulación también contribuye a reconocer la relación existente entre los diferentes actores que participan en una operación de exportación, como exportadores, agentes de aduana, transportadores, entidades financieras y autoridades de control. Cada procedimiento realizado durante la simulación debe ajustarse a los requisitos técnicos, legales y documentales exigidos para garantizar el cumplimiento de las disposiciones aplicables al comercio internacional entre Colombia y Estados Unidos.
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/2.png', alt='', class="w-100 h-100 object-fit-cover")

    p.mt-4 Además del componente normativo y documental, la simulación favorece la aplicación práctica de habilidades relacionadas con la planificación logística, el control documental, la clasificación arancelaria y la preparación de mercancías para exportación. De esta manera, el ejercicio permite comprender cómo una decisión incorrecta en cualquiera de las etapas puede generar retrasos, sanciones, sobrecostos o dificultades en el ingreso de productos al mercado internacional.

    p Entre los principales aspectos desarrollados durante la simulación se encuentran los siguientes:

    .tarjeta--container.row.mb-5.mt-4
      .col-md.tarjeta.bg-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/3.svg', alt='Texto que describa la imagen')
          
        h4.text-center Preparación documental
        p Elaboración y verificación de documentos requeridos para la operación de exportación. 
        p #[b Ejemplo:] diligenciamiento de factura comercial, lista de empaque y declaración de exportación. 

      .col-md.tarjeta.bg-7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/4.svg', alt='Texto que describa la imagen')
          
        h4.text-center Cumplimiento aduanero
        p Aplicación de requisitos normativos y controles exigidos por las autoridades competentes. 
        p #[b Ejemplo:] validación de certificados sanitarios y revisión de reglas de origen. 

      .col-md.tarjeta.bg-11.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/5.svg', alt='Texto que describa la imagen')
          
        h4.text-center Planeación logística
        p Organización del transporte, embalaje y entrega internacional de la mercancía.
        p #[b Ejemplo:] selección del medio de transporte y coordinación del embarque. 

      .col-md.tarjeta.bg-base2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema3/6.svg', alt='Texto que describa la imagen')
          
        h4.text-center Lección para otros sectores
        p Análisis de condiciones de negociación y medios de pago utilizados en la exportación. 
        p #[b Ejemplo:] aplicación de Incoterms® y selección de carta de crédito o transferencia bancaria.


    .bloque-texto-g.bg-base4.p-3.p-sm-4.p-md-5.mt-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La simulación de procesos de exportación permite integrar conocimientos técnicos, documentales y logísticos en escenarios cercanos a la realidad comercial. La correcta ejecución de cada etapa contribuye a fortalecer la capacidad de análisis, mejorar la toma de decisiones y garantizar el cumplimiento de los requisitos exigidos para las operaciones internacionales.

    p.mt-4 Además de los procedimientos operativos y documentales, una operación de exportación exitosa requiere considerar aspectos estratégicos relacionados con la negociación, la coordinación logística y el seguimiento de la mercancía durante todo el proceso comercial. Entre los aspectos complementarios más relevantes se encuentran los siguientes:



    .row.justify-content-center.mt-4
      .col-lg-10
        .row.mt-4.bg-base.p-3.bg-r8
          .col-12
            ul.lista-ul--color
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Coordinación entre actores de la operación:] articulación entre exportador, agente de aduana, transportador y comprador internacional. 
      
              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Seguimiento de la mercancía:] control del estado, ubicación y tiempos de entrega del producto exportado. 

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Verificación de costos de exportación:] revisión de gastos logísticos, aduaneros, financieros y de transporte. 

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Control de tiempos y cronogramas:] cumplimiento de fechas relacionadas con producción, despacho y entrega internacional. 

              li.d-flex.align-items-start
                span.icono-img
                p.mb-0 #[b Comunicación comercial internacional:] intercambio oportuno de información y documentos entre las partes involucradas en la operación.

    p.mt-4 La adecuada coordinación de los procesos documentales, logísticos y comerciales permite fortalecer la eficiencia de las operaciones de exportación y reducir riesgos durante el desarrollo de la negociación internacional. La integración de estos aspectos contribuye al cumplimiento de los requisitos exigidos por las autoridades y facilita una gestión organizada de las operaciones comerciales.


    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-2(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/8.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p Para desarrollar correctamente una simulación de exportación, es necesario tener en cuenta una serie de pasos que orientan la ejecución de las actividades operativas, documentales y logísticas involucradas en la operación comercial. Estas etapas permiten organizar el proceso de manera secuencial, comprender las responsabilidades de cada actor y aplicar los procedimientos requeridos en una operación internacional.


    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Pasos de la simulación

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema3/9.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p La simulación de una operación de exportación permite aplicar de manera práctica los conocimientos relacionados con normatividad aduanera, logística internacional, documentación comercial y requisitos exigidos para el ingreso de mercancías al mercado estadounidense. Este ejercicio facilita la comprensión integral de las etapas que conforman una operación de comercio exterior y fortalece la capacidad de análisis frente a situaciones reales del entorno exportador.

        p.bg-base.p-4 El desarrollo de la simulación también contribuye a identificar la relación entre los diferentes procesos que intervienen en una exportación, desde la selección del producto hasta la sustentación final de la operación. Cada actividad requiere el cumplimiento de procedimientos específicos, el uso adecuado de herramientas de consulta y la correcta elaboración de documentos soporte, elementos fundamentales para garantizar operaciones organizadas y ajustadas a la normativa vigente.

    p.mt-4 La siguiente tabla presenta los pasos que conforman la simulación integral de una operación de exportación entre Colombia y Estados Unidos, así como las actividades, herramientas y fuentes de consulta necesarias para el desarrollo de cada etapa del proceso.

    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 8. 
          span Pasos de la simulación de exportación Colombia con Estados Unidos

        .tabla-a.color-acento-contenido
          table
            caption(style="margin-top: 0px !important") Nota. Adaptado con base en el APC Colombia – EE. UU. (2012), la DIAN, la FDA y ProColombia.

            thead(style="background-color: #D3E7E9")
              tr
                th No.
                th Tarea
                th Descripción detallada
                th Herramienta / Fuente

            tbody
              tr(style="background-color: #FBF7F1")
                td.text-start 
                  b 1
                td.text-start Sección
                td.text-start Variable
                td.text-start Sección II – Productos del reino vegetal.

              tr
                td.text-start 
                  b 2
                td.text-start Capítulo
                td.text-start 2
                td.text-start Capítulo 06 – Plantas vivas y productos de floricultura.

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b 3
                td.text-start Partida
                td.text-start 4
                td.text-start 0603 – Flores y capullos cortados.

              tr
                td.text-start 
                  b 4
                td.text-start Subpartida SA
                td.text-start 6
                td.text-start 0603.11 – Rosas frescas.

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b 5
                td.text-start Subpartida DIAN
                td.text-start 10
                td.text-start 0603.11.00.00 – Subpartida arancelaria colombiana completa.


    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/10.svg', alt='', style="width: 390px").m-auto
      .col-lg-8
        p La simulación presentada integra los principales pasos técnicos, documentales y logísticos requeridos en una operación de exportación hacia el mercado estadounidense. Cada etapa permite comprender la relación existente entre la planeación comercial, el cumplimiento normativo y la correcta gestión de los documentos y procesos involucrados en el comercio exterior.

        p Con el fin de verificar el cumplimiento de los requisitos desarrollados durante la simulación, a continuación, se presenta una lista de chequeo que facilita la validación de aspectos documentales, aduaneros, logísticos y comerciales necesarios para la operación de exportación.



    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Lista de chequeo para el despacho de exportación

    p La verificación previa al despacho de exportación es una etapa fundamental dentro de las operaciones de comercio exterior, ya que permite comprobar que la mercancía, los documentos y los requisitos exigidos por las autoridades nacionales e internacionales se encuentren correctamente diligenciados y actualizados. Este proceso contribuye a reducir riesgos operativos, retrasos logísticos y sanciones derivadas de incumplimientos documentales o aduaneros.

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block.order-2
        figure
          img(src='@/assets/curso/tema3/11.png', alt='', style="width: 290px").m-auto
      .col-lg-9
        p En las exportaciones hacia Estados Unidos, el control documental y sanitario adquiere especial relevancia debido a las exigencias establecidas por entidades como la FDA, el CBP y la DIAN. Una revisión organizada antes del embarque facilita el cumplimiento de los requisitos comerciales, sanitarios y logísticos, además de fortalecer la trazabilidad y seguridad de la operación internacional.

        p Entre los principales aspectos que deben verificarse antes del despacho de exportación se encuentran los siguientes:

        ul.lista-ul--color
          li
            i.lista-ul__vineta
            p.mb-0 Validación de la subpartida arancelaria y reglas de origen aplicables. 

          li
            i.lista-ul__vineta
            p.mb-0 Revisión de la factura comercial y lista de empaque. 

          li
            i.lista-ul__vineta
            p.mb-0 Verificación de certificados sanitarios y permisos requeridos. 
          li
            i.lista-ul__vineta
            p.mb-0 Confirmación del etiquetado y marcado exterior de la mercancía. 
          li
            i.lista-ul__vineta
            p.mb-0 Control de requisitos logísticos y condiciones del transporte internacional. 
          li
            i.lista-ul__vineta
            p.mb-0 Comprobación del cumplimiento documental exigido por las autoridades aduaneras.


    p.mt-4 Con el propósito de facilitar el control y seguimiento de estos requisitos, a continuación, se presenta la siguiente tabla que reúne los principales aspectos de verificación requeridos antes del despacho de una operación de exportación hacia el mercado estadounidense.


    .row.justify-content-center.mt-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 9. 
          span Lista de chequeo de despacho de exportación Colombia – EE. UU. 

        .tabla-a.color-acento-contenido
          table
            caption(style="margin-top: 0px !important") Nota. Adaptada del Capítulo 4 del APC Colombia – EE. UU. (2012), la DIAN (2019), la FDA (2024) y ProColombia (2024). Diligencie una lista por cada despacho de exportación.

            thead(style="background-color: #D3E7E9")
              tr
                th No.
                th Tarea
                th Descripción detallada
                th Herramienta / Fuente

            tbody
              tr(style="background-color: #FBF7F1")
                td.text-start 
                  b 1
                td.text-start Sección
                td.text-start Variable
                td.text-start Sección II – Productos del reino vegetal.

              tr
                td.text-start 
                  b 2
                td.text-start Capítulo
                td.text-start 2
                td.text-start Capítulo 06 – Plantas vivas y productos de floricultura.

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b 3
                td.text-start Partida
                td.text-start 4
                td.text-start 0603 – Flores y capullos cortados.

              tr
                td.text-start 
                  b 4
                td.text-start Subpartida SA
                td.text-start 6
                td.text-start 0603.11 – Rosas frescas.

              tr(style="background-color: #FBF7F1")
                td.text-start
                  b 5
                td.text-start Subpartida DIAN
                td.text-start 10
                td.text-start 0603.11.00.00 – Subpartida arancelaria colombiana completa.



    .row.align-items-center.justify-content-center
      .col-lg-10
        .row.justify-content-center.mt-4
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-center.bg-10.p-3.bg-r8(data-aos="fade-right")
              .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema3/12.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg
                p La lista de chequeo debe diligenciarse antes del despacho de cada operación de exportación, verificando que todos los requisitos documentales, sanitarios, logísticos y aduaneros se encuentren completos y actualizados. Su correcta aplicación permite prevenir errores, facilitar el control de la operación y garantizar el cumplimiento de las exigencias establecidas para el ingreso de mercancías al mercado estadounidense.


    p.mt-4 Además del cumplimiento documental y operativo de las exportaciones, resulta fundamental fortalecer la capacidad de adaptación de las empresas frente a las exigencias técnicas, comerciales y regulatorias del mercado internacional. En este contexto, las capacidades de respuesta permiten evaluar el nivel de preparación de una organización para atender los requerimientos del comercio exterior bajo el TLC entre Colombia y Estados Unidos.



    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Capacidades de respuesta frente a las exigencias del mercado

    .row.align-items-center.mt-4.justify-content-center(data-aos="fade-down")
      .col-lg-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/13.svg', alt='', style="width: 290px").m-auto
      .col-lg-9
        p La participación en mercados internacionales exige que las empresas exportadoras desarrollen capacidades técnicas, logísticas y comerciales que les permitan responder de manera eficiente a las condiciones y exigencias del mercado estadounidense. Estas capacidades facilitan el cumplimiento de requisitos normativos, fortalecen la competitividad y contribuyen a la permanencia de los productos en el comercio internacional.

        .row.align-items-center.justify-content-center
          .col-lg-12
            .row.justify-content-center.mt-2
              .col-lg-12(data-aos="fade-down")
                .row.d-flex.align-items-center.bg-10.p-3.bg-r8(data-aos="fade-right")
                  .col-lg-auto.pe-lg-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                    figure.m-0.p-0.w-100.h-100.d-flex
                      img(src='@/assets/curso/tema3/14.svg', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                  .col-lg
                    p La capacidad de respuesta frente al mercado no depende únicamente del volumen de producción. También involucra aspectos relacionados con la adaptación a cambios regulatorios, el cumplimiento de estándares de calidad, la eficiencia logística y la capacidad de atender las necesidades de compradores y consumidores internacionales.


    p.mt-4 En el marco del TLC entre Colombia y Estados Unidos, las empresas exportadoras deben fortalecer procesos internos orientados al control documental, la trazabilidad, la innovación y la mejora continua. Estas acciones permiten reducir riesgos operativos, facilitar el acceso a mercados internacionales y mejorar el posicionamiento comercial de los productos colombianos.

    p Entre las principales capacidades que fortalecen la respuesta empresarial frente a las exigencias del mercado se encuentran las siguientes:


    .row.bg-04
      .col-12
        .p-5
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.bg-08.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/15.svg', style="width:128px ").img100.m-auto
              p.text-center
                  b Cumplimiento normativo
              p.text-center.mb-0 Actualización permanente de certificaciones, permisos y requisitos exigidos para exportar al mercado estadounidense. 

            .tarjeta.bg-08.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/16.svg', style="width:128px ").img100.m-auto
              p.text-center
                  b Trazabilidad de productos
              p.text-center.mb-0 Implementación de mecanismos para identificar el origen, procesamiento y distribución de las mercancías exportadas. 

            .tarjeta.bg-08.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/17.svg', style="width:128px ").img100.m-auto
              p.text-center
                  b Innovación en empaque y presentación
              p.text-center.mb-0 Utilización de materiales sostenibles e información comercial clara para mejorar la aceptación del producto. 
                    
            .tarjeta.bg-08.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/18.svg', style="width:128px ").img100.m-auto
              p.text-center
                  b Capacidad logística
              p.text-center.mb-0 Coordinación eficiente del transporte, almacenamiento y distribución internacional de la mercancía. 
                    
            .tarjeta.bg-08.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema3/19.svg', style="width:128px ").img100.m-auto
              p.text-center
                  b Inteligencia de mercados
              p.text-center.mb-0 Análisis de tendencias de consumo, comportamiento de compradores y oportunidades comerciales internacionales.
                    

          .row.justify-content-center.mt-4
            .col-lg-10
              p.mt-4.bg-base2.p-4.bg-r8 El fortalecimiento de estas capacidades permite mejorar la adaptación de las empresas a las dinámicas del comercio internacional y responder de manera más eficiente a los cambios regulatorios, logísticos y comerciales del mercado estadounidense.

    p.mt-4 Algunas acciones aplicadas por empresas exportadoras para fortalecer su capacidad de respuesta son las siguientes:


    .row.justify-content-center 
      .col-lg-7
        LineaTiempoD.color-primario.linea-bold
          .row(numero="1" titulo="Actualización de requisitos técnicos y sanitarios")
            .col-md-12.mb-4.mb-md-0
              p Revisión periódica de normas y exigencias del mercado de destino.

              p #[b Ejemplo:] ajuste del etiquetado nutricional para exportar alimentos procesados. 
    
          .row(numero="2" titulo="Implementación de sistemas de trazabilidad")
            .col-md-12.mb-4.mb-md-0
              p Implementación de sistemas de trazabilidad: control de información durante todas las etapas de producción y distribución.
              p #[b Ejemplo:] identificación de lotes exportados desde el origen hasta el comprador final. 

    
          .row(numero="3" titulo="Uso de empaques sostenibles")
            .col-md-12.mb-4.mb-md-0
              p Uso de empaques sostenibles: incorporación de materiales reciclables o biodegradables en la presentación del producto.
              p #[b Ejemplo:] utilización de empaques ecológicos para exportación de frutas frescas. 


          .row(numero="4" titulo="Fortalecimiento de procesos logísticos")
            .col-md-12.mb-4.mb-md-0
              p Fortalecimiento de procesos logísticos: mejora en tiempos de entrega y control de transporte internacional.
              p #[b Ejemplo:] coordinación logística para reducir retrasos en despachos internacionales. 


          .row(numero="5" titulo="Seguimiento de tendencias del mercado")
            .col-md-12.mb-4.mb-md-0
              p Seguimiento de tendencias del mercado: análisis de preferencias de consumo y comportamiento comercial.
              p #[b Ejemplo:] adaptación de productos según nuevas demandas del mercado estadounidense. 
    
      .col-lg-3.d-none.d-lg-block
        figure(data-aos="fade-up")
          img(src='@/assets/curso/tema3/20.png', alt='', style="width: 100%").m-auto

    p.mt-4 La simulación integral de una operación de exportación permite comprender la articulación de los procesos comerciales, logísticos, documentales, aduaneros y normativos involucrados en el comercio exterior bajo el TLC entre Colombia y Estados Unidos. La aplicación práctica de estos conocimientos fortalece la capacidad de análisis, planificación y toma de decisiones frente a las exigencias del mercado internacional.


















</template>

<script>
export default {
  name: 'Tema3',
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
