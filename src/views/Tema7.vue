<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Canales de comercialización

    .row.justify-content-center.mb-3
      .col-lg-7.align-content-center
        p.my-3 La comercialización es la actividad que permite al productor hacer llegar un producto o servicio al consumidor con los beneficios de tiempo y lugar. Una buena comercialización es la que coloca al producto en un sitio y momento adecuado, para dar al consumidor la satisfacción que él espera de la compra.
        p.my-3 La presentación y comercialización del hongo presenta una gran importancia como lo es el proceso del cultivo de los hongos para la obtención de buenas cosechas. Debido a que un inadecuado sistema de abastecimiento en el mercado influye en las bajas ventas o en el prolongado almacenamiento del producto, resultando en un deterioro de la economía del cultivo en general.
        p.my-3 Los hongos (las fructificaciones) almacenados por largos períodos, sufren deterioros significativos, que les hacen perder su valor comercial, aun estando en condiciones adecuadas de refrigeración. El canal de distribución o comercialización es la ruta que toma un producto para pasar del productor a los consumidores finales. 
      .col-lg-5.col-md-8.align-content-center
        img.my-3(src='@/assets/curso/temas/tema7/img1.png', alt='Imagen decorativa')

    p.my-3 <b>Para el caso de las orellanas los canales son:</b>

    
    .row.justify-content-center.my-3
      .col-lg-10.col-md-12
        .row.justify-content-center.mb-3.mt-4.fnd
          .tarjeta.tarjeta--blanca.p-4
            .row.justify-content-center.px-3
              .col-lg-4.col-md-6.mb-4.mb-md-0.align-content-top(style="justify-items: center")
                p.text-center.p-3.text-light.mb-0.fondo-titulo-7 <b>Productor - Consumidor</b>
                .borde-tarjeta-t7
                  p.text-center Es una vía corta, simple y rápida. Se utiliza cuando el producto llega directamente al consumidor desde el punto de producción o comercialización, que ha establecido el productor, este se convierte en la mejor alternativa, porque se reducen los intermediarios.
              .col-lg-4.col-md-6.mb-4.mb-md-0.align-content-top(style="justify-items: center")
                p.text-center.p-3.text-light.mb-0.fondo-titulo-7 <b>Productor - mayorista - minorista - consumidor:</b>
                .borde-tarjeta-t7
                  p.text-center En este caso, se colocaría la producción a través de distribuidores o intermediarios comerciales, quienes se encargarían de colocarlas en centrales de abastos u otros puntos de venta.<br>También, se podría establecer algún convenio con empresas empacadoras de alimentos, para suministrar cantidades específicas de setas cada determinado tiempo.
              .col-lg-4.col-md-12.mb-4.mb-md-0.align-content-center
                h4.ps-3 Descripción del proceso
                p.ps-3 Por lo que es necesario que el productor antes de la cosecha conozca las alternativas de mercado y la presentación requerida, hacer contacto con centros de abasto, mercados y restaurantes para determinar cuánto, cómo, cuándo y a quién vender. 
                p.ps-3 No se debe descuidar la presentación final del hongo, debido a que un aspecto agradable y gustoso se convierte en excelente comercialización y valorización del producto.

        p.my-3 Sin embargo, la producción de hongos comestibles se comercializa a través de varios canales de distribución, teniendo en cuenta la localización geográfica y el nivel de ingresos de la población.
        b Los canales de distribución y comercialización son:

        .row.justify-content-center.my-3
          .col-lg-4.col-md-8
            img.my-3(src='@/assets/curso/temas/tema7/img2.png', alt='Imagen decorativa')
          .col-lg-1.d-lg-block.d-none
            img.my-3.me-0(src='@/assets/curso/temas/tema7/img3.svg', alt='Imagen decorativa')(style=" height: 390px; position: relative; right: -37px")
          .col-lg-7
            p(style="background: #B2AC97; padding: 1em") <b>Plazas de mercado.</b>
            p(style="background: #B2AC97; padding: 1em") <b>Puestos fijos.</b>
            p(style="background: #B2AC97; padding: 1em") <b>Comerciantes y procesadores.</b>
            p(style="background: #B2AC97; padding: 1em") <b>Restaurantes especializados en comida internacional.</b>
            p(style="background: #B2AC97; padding: 1em") <b>Supermercados (Cajas de compensación-cadenas de  supermercados).</b>
            p(style="background: #B2AC97; padding: 1em") <b>Hoteles y clubes</b>
        p.my-3 Los canales de comercialización de los hongos Orellana son fundamentales para impulsar su demanda. La introducción de ferias ecológicas y plataformas digitales promueve el acceso a consumidores interesados en productos frescos y sostenibles, aumentando la visibilidad y sostenibilidad del mercado.


</template>

<script>
export default {
  name: 'Tema7',
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
