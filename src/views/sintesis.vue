<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se ofrece una visión general sobre el proceso integral de siembra, cosecha y comercialización. El cultivo de hongos orellana sigue varias etapas fundamentales: comienza con la siembra o inoculación, seguida de la incubación, donde las condiciones controladas favorecen el desarrollo del micelio. Después, ocurre la fructificación, cuando los hongos alcanzan su madurez. La cosecha es un momento crítico, ya que debe realizarse en el momento óptimo para asegurar la mejor calidad. Posteriormente, el manejo postcosecha incluye técnicas como la deshidratación, un método eficaz para prolongar la vida útil del producto. Finalmente, los canales de comercialización permiten llevar el producto al mercado, garantizando que llegue en excelentes condiciones al consumidor final.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
