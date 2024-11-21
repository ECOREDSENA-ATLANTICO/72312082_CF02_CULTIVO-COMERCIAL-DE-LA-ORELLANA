<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Cosecha 

    p.my-3 La orellana una semana después de estar en la etapa de fructificación, se ha desarrollado completamente, y ha alcanzado el tamaño adecuado para su consumo o comercialización, que puede oscilar entre 5-20 cm; encontrándose racimos de orellanas en forma individual que estarán listas para cosecharse; en ambos casos el sombrero debe estar compacto, turgente, no flácido y sus orillas aún curvas hacia abajo, características de que el hongo ha alcanzado su madurez, sin embargo, además hay que considerar el tamaño y calidad de éste.

    .row.justify-content-center.my-3
      .col-lg-10.col-md-12
        .row.mt-3.mb-4.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Factores condicionantes

        .row.justify-content-center.my-3
          .col-lg-8.align-content-center
            p.my-3 La calidad de los carpóforos de la orellana reside básicamente en realizar la cosecha a tiempo y mantener el control en la iluminación y la ventilación para evitar tallos o pies largos.
            p.my-3 Los principales indicadores para determinar la calidad de los carpóforos son: tallo corto, sombrero convexo con margen liso, himenóforo con lamillas absolutamente blancas, consistencia dura y seca al tacto, sin restos de sustrato, daños mecánicos o provocados por insectos. Mientras que los carpóforos con características de menor calidad presentan aspecto blando, traslúcidos y amarillentos. Cuando se aprecia el tamaño, tanto grandes como pequeños son igualmente aceptables.
          .col-lg-4.col-md-8
            img.my-3(src='@/assets/curso/temas/tema4/img1.png', alt='Imagen decorativa')

    .row.justify-content-center.my-3
      .col-lg-10.col-md-10
        .row.mt-3.mb-4.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Métodos de cosecha
        p.my-3 La cosecha puede hacerse de forma manual utilizando dos métodos:

        .row.justify-content-center.mb-2
          .col-lg-5.col-md-6.align-content-center(data-aos="fade-right")
            figure
              img.my-3(src="@/assets/curso/temas/tema4/img2.png", alt="alt")
          .col-lg-7.justify-content-center.align-content-center
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Pie del hongo")
                .col-12
                  p.mb-2 Sujetando el pie del hongo y haciendo un esfuerzo de torsión para desprenderlo del sustrato, extrayendo la parte inferior del tallo para retirar restos de sustrato.
              .row(titulo="Cortar el tallo")
                .col-12
                  p.mb-2 Igualmente se puede cosechar cortando el tallo con un cuchillo desinfectado en la base del tallo en el punto de unión con el sustrato, teniendo especial cuidado que luego de cosechar, deben dejarse los orificios lo más limpio posible para disminuir de esta manera los riesgos de contaminación para lograr una siguiente oleada homogénea.
              .row(titulo="Canastillas")
                .col-12
                  p.mb-2 Una vez cortadas y seleccionadas las orellanas, son ubicadas en canastillas plásticas de interior totalmente liso, para evitar el daño del producto, éstas se deben manipular con el mejor cuidado evitando así roturas y deterioros; luego son enviadas a la sala de postcosecha.
              .row(titulo="Cosecha")
                .col-12
                  p.mb-2 La cosecha no necesariamente se concluye en un día, por lo que deberá hacerse una selección de hongos y cortar sólo los de máximo desarrollo.
              .row(titulo="Oleada de la cosecha")
                .col-12
                  p.mb-2 Normalmente se cosechan 3 oleadas por ciclo de producción, separadas cada una por dos semanas aproximadamente. En la primera oleada de la cosecha se acerca al 50 % de total de las orellanas. Algunos cultivadores prefieren mantener las bolsas 2 o 3 oleadas más, pero no se recomienda, debido a costos de operación y riesgos de contaminación.

        p.my-3 Después de cada oleada, debe realizarse una limpieza en el cultivo, donde no queden hongos en el suelo ni residuos de tallos en los orificios de la bolsa. Se recomienda aplicar hipoclorito de sodio disuelto en agua, al piso y paredes.

</template>

<script>
export default {
  name: 'Tema4',
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
