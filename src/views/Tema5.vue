<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Manejo postcosecha

    .row.justify-content-center.my-3
      .col-lg-7
        p.my-3 La postcosecha es la etapa en la cual la orellana recibe unos procesos adecuados para la conservación de la calidad, después de haber sido cosechados. Una vez cosechados los hongos se pueden consumir, comercializar en fresco o almacenar. Si el objetivo es la comercialización en fresco, ésta debe realizarse inmediatamente después de la cosecha, poniendo especial atención en el empaque: elegir un método que evite el maltrato ya que este disminuye la calidad y con ello el costo.
      .col-lg-5.col-md-8.align-content-center
        img.my-3(src='@/assets/curso/temas/tema5/img1.png', alt='Imagen decorativa')

    .row.justify-content-center.my-3
      .col-lg-7.col-md-8.align-content-center.order-lg-3.order-md-3
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-left")
          h5 Figura 4. 
          span <em>Tipos de empaque de las orellanas</em>
        img.my-3(src='@/assets/curso/temas/tema5/img2.png', alt=' Muestra los tipos de empaque de las orellanas. Los hongos perecederos deben almacenarse en canastillas plásticas cubiertas con papel adherible perforado, refrigerados a 5 °C por 4 días.')
      .col-lg-5.order-lg-3.order-md-1.align-content-center
        p.my-3 El tipo de empaque puede ser variado: bandejas pequeñas de icopor cubiertas con papel adherible, cajas o canastas de plástico, cajas de icopor o polietileno tereftalato (PET). Los hongos por ser perecederos, es recomendable refrigerarlas por un tiempo no mayor a 4 días dentro de una canastilla de plástico a 2 / 3 partes de su capacidad y cubiertas con papel adherible con pequeñas perforaciones a 5 °C.
    p.text-center.mt-0 Nota. Tipos de empaque de las orellanas. Fuente: Mundhongo (2017).

    h3(data-aos="fade-left").mb-3.mt-3.blue_icon Métodos de conservación 

    p.my-3 La conservación del hongo se realiza con el objetivo de mantener durante un tiempo considerable sus capacidades nutricionales y organolépticas, así como proporcionar una apariencia del producto que sea aceptable por el consumidor. 
    p.my-3 Los hongos cosechados deben consumirse frescos o conservarse mediante refrigeración, deshidratación o preparación de conservas, como se detalla a continuación:  

    .row.justify-content-center.mb-3.mt-4.fnd
      .tarjeta.tarjeta--blanca.p-4
        SlyderA(tipo="b")
          .row.px-3.pt-3.justify-content-center
            .col-lg-7.col-md-12.mb-4.mb-md-0.align-content-center
              h4 Refrigeración
                p.my-3.mt-4 La conservación de los hongos en cámaras de refrigeración es un buen método que permite mantener fresco durante un mayor tiempo el producto cosechado. Por lo que se requiere contar con un lugar diseñado para tal fin, para que la aireación, la temperatura y la humedad relativa se mantengan uniformes dentro de los límites convenientes.
                p La temperatura ideal de refrigeración de la orellana está entre 2 a 4ºC. Se recomienda refrigerar las orellanas lo antes posible, con el fin de detener el proceso de deterioro del producto y el aire de refrigeración es seco, por lo tanto, hay que cubrir las canastillas con papel adsorbente. De esta manera se puede garantizar una vida útil del hongo de 1 a 2 semanas. Es importante mantener la cadena de frío hasta llegar al consumidor. Por lo tanto, los carros o camiones de transporte deben tener ambiente refrigerado.
            .col-lg-5.col-md-12.align-content-center
              figure
                img(src='@/assets/curso/temas/tema5/img4.png', alt='Imagen decorativa')
          .row.px-3.pt-3.justify-content-center
            .col-lg-5.col-md-12.mb-4.mb-md-0.align-content-center
              h4 Secado o deshidratación
                p.mt-4 Es un método que permite alargar el tiempo de almacenamiento del hongo, al someter a altas temperaturas los carpóforos, que reducen el contenido de humedad y de esta manera inactivan enzimas y microorganismos, conservando las características organolépticas y nutritivas de la orellana.
            .col-lg-7.col-md-12.align-content-center
              figure
                img(src='@/assets/curso/temas/tema5/img5.png', alt='Imagen decorativa')
          .row.px-3.pt-3.justify-content-center
            .col-lg-5.col-md-12.mb-4.mb-md-0.align-content-center
              h4 Conservas
                p.mt-4 Este método consiste en preservar los hongos en una solución acuosa con una concentración elevada de sal que evitará el crecimiento de los agentes normales de putrefacción y permitirá la conservación por medio de las bacterias acido-lácticas, que producen una tersura de los encurtidos fermentados (Guzmán, Mata, Salmones, Soto, y Guzmán, L. 2010).
            .col-lg-7.col-md-12.align-content-center
              figure
                img(src='@/assets/curso/temas/tema5/img6.png', alt='Imagen decorativa')
</template>

<script>
export default {
  name: 'Tema5',
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
