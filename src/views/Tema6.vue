<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Proceso de deshidratación 

    p.my-3 Es un proceso por medio del cual el hongo pierde agua para que los niveles de deterioro fisiológico se bajen a condiciones mínimas, incluyendo el crecimiento de microorganismo y cambios químicos. Esta técnica de conservación es generalmente utilizada cuando el hongo se comercializa en lugares lejanos y cuando éstos son utilizados como ingredientes en otros productos procesados.

    .row.justify-content-end.my-3
      .col-lg-11.col-md-12
        .row.justify-content-center.my-3
          .col-lg-7.align-content-center.order-lg-1.order-md-1
            p.my-3 El secado es un proceso muy útil para la conservación de los hongos contando con que el nivel de humedad final sea lo suficientemente bajo para no permitir el crecimiento de microorganismos perjudiciales. Por medio de la deshidratación de los hongos partidos en trozos, rasgados en el sentido de las laminillas, se deshidratan con aire que entre más seco y más caliente esté, mayor será la velocidad de secado, hasta obtener una humedad del 10 al 12 %, quedando un producto final de muy buena calidad en términos de estructura, volumen, color y apariencia general.
          .col-lg-5.col-md-8.align-content-center.order-lg-1.order-md-3
            .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-left")
              h5 Figura 5. 
              span <em>Hongos deshidratados</em>
            img.my-3(src='@/assets/curso/temas/tema6/img1.png', alt='Muestra los hongos deshidratados. El secado reduce la humedad de los hongos al 10-12 %, garantizando su conservación y calidad estructural, volumen y apariencia.')
        p.text-center.mt-0 Nota. Tipos de empaque de las orellanas. Fuente: Mundhongo (2017).
    p.my-3 Luego se deben conservar en empaques a prueba de humedad y de esta manera, su vida útil puede superar los 30 días (Guarín y Ramírez. 2004).
    h3(data-aos="fade-left").mb-3.mt-3.ps-4.blue_icon Formas de deshidratación 

    p.my-3 Los hongos se pueden deshidratar en forma natural o mediante el uso de sistemas artificiales.
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img2.png')})`}"
        )

      .bloque-texto-g__texto.p-4(data-aos="zoom-in")
        p.mb-0 <b>El secado natural o al aire libre:</b> consiste en exponer los hongos a la acción de los factores climáticos de un lugar. Este sistema de secado ha sido ampliamente utilizado desde la antigüedad. Sin embargo, por estar sujeto a los cambios climáticos, no es posible ejercer un control sobre su desarrollo.<br>La principal ventaja del secado natural sobre otros métodos de secado es que no se requiere de grandes inversiones y el costo de secado es reducido.
    p.my-3 Por otro lado, sus principales desventajas son:

    .row.justify-content-center.mb-2
      .col-lg-3.col-md-5.align-content-center(data-aos="fade-right")
        figure
          img.my-3(src="@/assets/curso/temas/tema6/img3.png", alt="alt")
      .col-lg-9.justify-content-center.align-content-center
        ul.mt-0
          li
            span El largo tiempo de secado.
        ul.mt-0
          li
            span Dependencia de las condiciones ambientales (temperatura, humedad relativa, velocidad del aire, radiación solar, etc.).
        ul.mt-0
          li
            span Dificultad de alcanzar contenidos de humedad menores a los correspondientes a la humedad de equilibrio del lugar.
        ul.mt-0
          li
            span Mayor exposición del producto a daños producidos por agentes biológicos.
        ul.mt-0
          li
            span Necesidad de grandes espacios para secar el producto.
    p.mb-3 Según Guzmán (2010), <b>este proceso se puede realizar de diferentes maneras:</b>

    
    .row.justify-content-center
      .col-lg-10.col-md-12
        .row.mt-3.mb-4.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema6/img4.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Al ambiente

        p.my-3 Colocando bajo el sol los hongos en recipientes de poca profundidad de madera o plástico y con una rejilla en el fondo, que permita la circulación del aire.

        .row.justify-content-center.my-3
          .col-lg-7.align-content-center
            p Los recipientes se colocan inclinadas sobre uno de sus lados para favorecer la aireación y se cambian de inclinación y de orientación para que reciban directamente el sol. Los recipientes se cubren con mosquiteros o mantas que eviten la contaminación por insectos o polvo. Sin embargo, existen diversos modelos de deshidratadores con aprovechamiento de calor solar.
          .col-lg-5.col-md-8.align-content-center
            .titulo-sexto.color-acento-contenido.mb-0(data-aos="fade-left")
              h5 Figura 6. 
              span <em>Secador con aprovechamiento del calor solar y acumulador de calor</em>
            img.my-3(src='@/assets/curso/temas/tema6/img5.png', alt='Muestra el secador con aprovechamiento del calor solar y acumulador de calor. Los hongos se secan al sol en recipientes ventilados, inclinados y cubiertos con mosquiteros, evitando polvo e insectos.')
        p.text-center.mt-0 Nota. El IPP presenta su deshidratador solar para la Agricultura Familiar (2017).
        
        .row.mt-3.mb-4.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema6/img4.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Secado artificial

        p.my-3 El secado artificial surge como respuesta a las deficiencias del secado natural.<br>Por medio de equipos e instalaciones especiales, se pueden crear en recintos cerrados condiciones climáticas diferentes a las atmosféricas normales, sobre las que se puede ejercer un control. El secado artificial permite obtener productos deshidratados de mejor calidad que los obtenidos mediante el secado natural.


        .row.justify-content-center.my-3
          .col-lg-7.col-md-8.align-content-center
            .titulo-sexto.color-acento-contenido.my-2(data-aos="fade-left")
              h5 Figura 7. 
              span <em>Horno deshidratador</em>
            img.my-3(src='@/assets/curso/temas/tema6/img6.png', alt='Muestra como el horno deshidratador permite secar hongos rápidamente, independientemente del clima, hasta que estén quebradizos y sin humedad residual.')
          .col-lg-5.align-content-center
            p Si bien los costos directos del secado artificial son mucho más altos que los del secado natural, las ventajas de espacio, velocidad de secado, independencia de las condiciones ambientales y operación día y noche, lo justifican ampliamente. La manera de detectar si los hongos están bien secos, es al tacto, ya que deben de tener consistencia quebradiza. Si éstos se encuentran flexibles, significa que todavía contienen agua. Por lo anterior, debe evitarse almacenar hongos parcialmente secos en recipientes cerrados.
        p.text-center.mt-0 Nota. Secado artificial, Fuente: Alibaba.com (2017).

        p.my-3 Los recipientes contenedores apropiados para presentar los hongos en el mercado son las bolsas de plástico bien cerradas o frascos de boca ancha. Las principales ventajas del secado artificial son:

        .row.justify-content-center.align-items-center.mb-3.p-4(data-aos="zoom-in")
          .col-lg-8(data-aos="flip-left")
            SlyderF.custom(columnas="col-lg-6 col-md-6")
              .tarjeta.tarjeta--slyder.p-4.fnd-4.justify-content-start
                p.mb-0 El secado artificial permite obtener productos deshidratados de mejor calidad.
              .tarjeta.tarjeta--slyder.p-4.fnd-4.justify-content-start
                p.mb-0 Reducción considerable del tiempo de secado de un producto.
              .tarjeta.tarjeta--slyder.p-4.fnd-4.justify-content-start
                p.mb-0 Producción de materias primas de alta calidad.
              .tarjeta.tarjeta--slyder.p-4.fnd-4.justify-content-start
                p.mb-0 Necesidad de un área de secado más pequeña.
              .tarjeta.tarjeta--slyder.p-4.fnd-4.justify-content-start
                p.mb-0 Mediante el establecimiento de condiciones climáticas especiales se pueden alcanzar contenidos de humedad tan bajos como sean requeridos.
          .col-lg-4.col-md-6.mb-4(data-aos="fade-right")
            figure
              img.my-3(src="@/assets/curso/temas/tema6/img7.png")



</template>

<script>
export default {
  name: 'Tema6',
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
