<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Siembra o inoculación

    p.mb-3 La siembra es una etapa muy importante en el cultivo porque en ésta se deposita y se mezclan el micelio (semilla o inóculo) con el sustrato esterilizado, para permitir su crecimiento y desarrollo.

    .row.justify-content-center.my-3
      .col-lg-10.col-md-12
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
          h5 Figura 1.
          span <em>Siembra del micelio en el sustrato</em>
        .row.justify-content-center.mb-3.mt-4.fnd
          .tarjeta.tarjeta--blanca.p-4
            .row.justify-content-center.px-3
              .col-xl-3.col-lg-6.col-md-6.align-content-center
                img.my-3(src='@/assets/curso/temas/tema1/img2.png', alt=' Muestra la siembra del micelio en el sustrato, las condiciones ambientales, las medidas de protección personal y las condiciones del lugar de trabajo.')
              .col-xl-2.col-lg-6.col-md-6.mb-4.mb-md-0.align-content-top(style="justify-items: center")
                p.text-center.p-3.text-light.mb-0.fondo-titulo <b>SUSTRATO</b>
                .borde-tarjeta-1
                  p.mt-0.text-center Esterilizado
                  p.text-center Temperatura: 25-28 °C
                  p.text-center Humedad: 70-75%
                  p.text-center ph: 5.5 - 6.5
              .col-xl-2.col-lg-6.col-md-6.mb-4.mb-md-0.align-content-top(style="justify-items: center")
                p.text-center.p-3.text-light.mb-0.fondo-titulo <b>CONDICIONES AMBIENTALES</b>
                .borde-tarjeta-2
                  p.text-center Temperatura: 22-26 °C
                  p.text-center Humedad relativa: 80-90 %
                  p.text-center Sin corrientes de aire
                  p.text-center Iluminación: baja
              .col-xl-2.col-lg-6.col-md-6.mb-4.mb-md-0.align-content-top(style="justify-items: center")
                p.text-center.p-3.text-light.mb-0.fondo-titulo <b>MEDIDAS DE PROTECCIÓN PERSONAL</b>
                .borde-tarjeta-3
                  p.text-center Gorro
                  p.text-center Tapabocas
                  p.text-center Manos desinfectadas
                  p.text-center Guantes de latex o nitrillo
                  p.text-center Bata limpia antifluidos
                  p.text-center Calzado desinfectado
              .col-xl-3.col-lg-12.col-md-6.mb-4.mb-md-0.align-content-top(style="justify-items: center")
                p.text-center.p-3.text-light.mb-0.fondo-titulo <b>CONDICIONES DEL LUGAR DE TRABAJO</b>
                .borde-tarjeta-4
                  p.mt-0.text-center Estrictas condiciones de asepsia
                  p.text-center Lugar cerrado
                  p.text-center suelo de cemento
                  p.text-center Paredes lisas de fácil limpieza y desinfección
        p.text-center Nota. Cultivo de veselins en el sótano (2017).
      
        .row.mt-5.mb-4.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Descripción del proceso
        
        p.my-3 Luego de la pasteurización del sustrato, se prosigue a inocular éste con la semilla certificada (inóculo), adquirida previamente:
        
    .row.justify-content-center.mb-3.mt-4.fnd
      .tarjeta.tarjeta--blanca.p-4(data-aos="fade-up")
        SlyderA(tipo="b")
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              h4 Desinfección de la siembra
                p.mt-4 La siembra debe realizarse en un lugar cerrado y aislado de mosquitos. El suelo debe ser en cemento y estar desinfectado. Para la desinfección de la sala de siembra y herramientas puede utilizarse hipoclorito de sodio al 5 % diluido en agua (0.5 litros de hipoclorito en 20 litros de agua).
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img4.png', alt='Imagen decorativa')
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              h4 Protección personal
                p.mt-4 Los operarios que realizarán la actividad deberán tener bien limpias las manos y hacer uso de los respectivos elementos de protección personal (gorro, tapabocas, guantes de látex o de nitrilo, bata antifluídos y calzado desinfectado). 
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img5.png', alt='Imagen decorativa')
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              h4 Proceso sustrato pasteurizado
                p.mt-4 El proceso inicia con la corrección del pH, adicionando al sustrato pasteurizado de carbonato de calcio para pH ácido y de sulfato de calcio (yeso agrícola) para pH alcalino. En un porcentaje del 2% por cada kilo de compostaje, luego se mezcla y homogeniza. 
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img6.png', alt='Imagen decorativa')
          .row.px-3.pt-3
            .col-lg-6.mb-4.mb-md-0.align-content-center
              h4 Semilla
                p.mt-4 Se extiende el sustrato sobre la mesa desinfectada, colocando mecheros con alcohol sobre ésta, para mantener condiciones de asepsia en el ambiente y se aplica la semilla al voleo mientras se va dando vueltas al sustrato. Al momento de mezclar el sustrato con la semilla, debe hacerse lo más homogéneo posible, es decir que la semilla debe distribuirse en toda la mezcla. La cantidad recomendable de semilla es de 3-5 % del peso húmedo de sustrato.
            .col-lg-6.align-content-center
              figure
                img(src='@/assets/curso/temas/tema1/img7.png', alt='Imagen decorativa')
    .row.justify-content-center.my-3
      .col-lg-10
        .cajon.color-acento-contenido.p-4(style="background: #EAF7F6")
          p.mt-0.mb-0 En bolsas de plástico transparente se deposita el sustrato inoculado con la semilla del hongo, hasta cubrir la capacidad deseada de la bolsa, a las cuales se le hace varias aberturas o ranuras en el contorno 3-5 cm y cuatro en la base, con un bisturí desinfectado que permitan el drenaje y el intercambio de gases.  Seguidamente se cierran y se rotulan con la fecha de inoculación y el número de bolsa.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
