<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Incubación
    
    .row.justify-content-center.my-3
      .titulo-sexto.color-acento-contenido.mb-3.order-lg-1.order-md-2(data-aos="fade-left")
        h5 figura 2.
        span <em>Inoculación del hongo en el sustrato</em>
      .col-lg-5.order-lg-3.order-md-1
        p.my-3 La incubación es el período necesario para que el hongo invada completamente el substrato en las condiciones adecuadas. La duración puede variar entre 20 y 35 días aproximadamente. Durante este periodo de tiempo el micelio del hongo se crece invadiendo gradualmente el sustrato, cambiando éste de color blanquecino, hasta quedar completamente blanco. En este momento termina la etapa de incubación.
      .col-lg-7.col-md-8.align-content-center.order-lg-3.order-md-3
        img.my-3(src='@/assets/curso/temas/tema2/img1.png', alt='Muestra la inoculación del hongo en el sustrato. También, el sustrato inoculado con la semilla de hongo se deposita en bolsas plásticas, permitiendo drenaje y gases. La incubación dura 20-35 días hasta que el micelio invada completamente.')
        p.text-center.mt-0 Nota. Hongos comestibles y medicinales (2013).
    
    .row.justify-content-center.my-3
      .col-lg-10.col-md-10
        .row.mt-3.mb-4.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Factores condicionantes
        p.my-3 Para el desarrollo de la etapa de incubación se deben tener en cuenta los siguientes factores condicionantes del proceso:

        .row.justify-content-center.mb-3.mt-4.fnd
          .tarjeta.tarjeta--blanca.p-4
            .row.justify-content-center.px-3
              .col-xl-2.col-lg-6.col-md-6.mb-4.mb-md-0.align-content-top(style="justify-items: center")
                p.text-center.p-3.text-light.mb-0.fondo-titulo-2 <b>CONDICIONES AMBIENTALES</b>
                .borde-tarjeta
                  p.text-center Temperatura: 22-26 °C
                  p.text-center Humedad relativa: 90-95 %
                  p.text-center Poca ventilación, suficiente oxígeno, no correintes de aire
                  p.text-center Ausencia de luz
              .col-xl-2.col-lg-6.col-md-6.mb-4.mb-md-0.align-content-top(style="justify-items: center")
                p.text-center.p-3.text-light.mb-0.fondo-titulo-2 <b>CONDICIONES AMBIENTALES</b>
                .borde-tarjeta
                  p.text-center Temperatura: 22-26 °C
                  p.text-center Humedad relativa: 80-90 %
                  p.text-center Sin corrientes de aire
                  p.text-center Iluminación: baja
              .col-xl-2.col-lg-6.col-md-4.mb-4.mb-md-0.align-content-top(style="justify-items: center")
                p.text-center.p-3.text-light.mb-0.fondo-titulo-2 <b>MEDIDAS DE<br>PROTECCIÓN PERSONAL</b>
                .borde-tarjeta
                  p.text-center Gorro
                  p.text-center Tapabocas
                  p.text-center Manos desinfectadas
                  p.text-center Guantes de latex o nitrillo
                  p.text-center Bata limpia antifluidos
                  p.text-center Calzado desinfectado
              .col-xl-5.col-lg-6.col-md-8.mb-4.mb-md-0.align-content-center
                h4.ps-3 Descripción del proceso
                p.ps-3 El proceso se lleva a cabo en un cuarto limpio y previamente desinfestado. En las paredes, los pisos y los estantes del cuarto deben espolvorearse carbonato de calcio para reducir los riesgos de contaminación por hongos e insectos.
                p.ps-3 Después de la inoculación, las bolsas se colocan en el área de incubación que debe ser un lugar oscuro o poco iluminado y con las condiciones ambientales requeridas, por lo que es necesario monitorear dichos factores haciendo uso del termómetro e higrómetro.

        p.my-3 Normalmente se colocan dos o tres estanterías dentro del área con 4 o 5 niveles. La mejor disposición de las bolsas es hacer estantería con dos bolsas paralelas, por una longitud que dependerá de la cantidad de bolsas. La distancia entre estanterías debe ser entre 80 y 100 cm, con el fin de poder realizar fácilmente las labores de cultivo.
    
    .row.justify-content-center
      .col-lg-8
        .row.justify-content-center.my-3
          .col-lg-5.col-md-8
            .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
              h5 figura 3.
              span <em>Bolsas en estantería en la etapa de inoculación</em>
            img.my-3(src='@/assets/curso/temas/tema2/img2.svg', alt='Muestra las bolsas en estantería en la etapa de inoculación. Es fundamental revisar las bolsas en estantería tras la siembra, evitando contaminación, hasta que el micelio colonice completamente.')
            p Fuente: SENA – Equipo de Adecuación Didáctica y Gráfica de Recursos Educativos Risaralda (2017).
          .col-lg-7.align-content-center
            p.my-3 Se recomienda revisar diariamente las bolsas después de la siembra, haciendo uso de los respectivos elementos de protección personal, con el fin de comprobar el desarrollo del micelio libre de focos de contaminación por mohos o bacterias.
            p Pasadas algunas semanas, el micelio habrá colonizado completamente la bolsa, tornándose de color blanco algodonosa, por lo cual se debe modificar las condiciones ambientales para estimular al micelio a formar cuerpos fructíferos, dando origen a la siguiente etapa de fructificación o producción.



</template>

<script>
export default {
  name: 'Tema2',
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
