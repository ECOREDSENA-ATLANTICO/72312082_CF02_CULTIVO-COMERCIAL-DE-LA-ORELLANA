<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija una opción según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué proceso inicia el cultivo de orellanas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Control de plagas.', esCorrecta: false },
            { id: 'b', texto: 'Fructificación.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Siembra o inoculación de la semilla.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Postcosecha.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué fase sigue a la siembra en el cultivo de orellanas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pasteurización.', esCorrecta: false },
            { id: 'b', texto: 'Incubación.', esCorrecta: false },
            { id: 'c', texto: 'Cosecha.', esCorrecta: true },
            { id: 'd', texto: 'Comercialización.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué se debe controlar para garantizar la inocuidad del producto final?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Humedad y peso.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Factores condicionantes, plagas y enfermedades.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Forma y tamaño.', esCorrecta: false },
            { id: 'd', texto: 'Humedad y peso.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la importancia del proceso de incubación en el cultivo de orellanas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asegurar la deshidratación del hongo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pasar de la fase vegetativa a la fase productiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Controlar la forma y tamaño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Establecer la comercialización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué término se refiere al tratamiento térmico para eliminar patógenos antes de la siembra?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Incubación.', esCorrecta: false },
            { id: 'b', texto: 'Cosecha.', esCorrecta: false },
            { id: 'c', texto: 'Pasteurización.', esCorrecta: true },
            { id: 'd', texto: 'Deshidratado', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué se busca al controlar plagas y enfermedades en el cultivo de orellanas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asegurar la inocuidad del producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mejora del tamaño del hongo.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Aumentar la humedad.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Garantizar la venta rápida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿En qué etapa se realiza la fructificación del hongo orellana?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Durante la incubación.', esCorrecta: true },
            { id: 'b', texto: 'Después de la cosecha.', esCorrecta: false },
            { id: 'c', texto: 'Durante la siembra.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Antes del control de plagas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué técnica asegura la eliminación de patógenos durante la etapa de desinfección?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Desinfección.', esCorrecta: true },
            { id: 'b', texto: 'Cosecha.', esCorrecta: false },
            { id: 'c', texto: 'Fructificación.', esCorrecta: false },
            { id: 'd', texto: 'Comercialización.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué actividad es fundamental para evitar accidentes en el cultivo de orellanas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Comercialización.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Promoción de la enfermedad.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Prevención de accidentes.', esCorrecta: true },
            { id: 'd', texto: 'Incubación.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el objetivo del manejo postcosecha en el cultivo de orellanas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asegurar un producto de excelente calidad.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar la humedad del hongo.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Facilitar el transporte.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Mejorar el color del hongo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué práctica ayuda a extender la vida útil de los hongos Orellana después de la cosecha?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenarlos a temperatura ambiente.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Colocarlos al sol.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Secarlos o refrigerarlos rápidamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Guardarlos en envases cerrados sin ventilación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es el principal método de conservación postcosecha de hongos frescos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Congelación.', esCorrecta: false },
            { id: 'b', texto: 'Fermentación.', esCorrecta: false },
            { id: 'c', texto: 'Deshidratación.', esCorrecta: true },
            { id: 'd', texto: 'Secado al sol.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de los siguientes factores afecta directamente la calidad de los hongos en postcosecha?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Color y sabor.', esCorrecta: false },
            { id: 'b', texto: 'Tamaño y forma.', esCorrecta: false },
            { id: 'c', texto: 'Humedad y temperatura.', esCorrecta: true },
            { id: 'd', texto: 'Método de siembra.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué condición ambiental favorece la fructificación en los hongos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Alta humedad.', esCorrecta: true },
            { id: 'b', texto: 'Alta luz solar.', esCorrecta: false },
            { id: 'c', texto: 'Baja humedad.', esCorrecta: false },
            { id: 'd', texto: 'Exceso de agua.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cómo se llama la estructura de los hongos que se forma en la fase de fructificación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Raíz.', esCorrecta: false },
            { id: 'b', texto: 'Cuerpo fructífero.', esCorrecta: true },
            { id: 'c', texto: 'Esporángio.', esCorrecta: false },
            { id: 'd', texto: 'Filamento.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es un desafío común en la comercialización de hongos Orellana?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Exceso de oferta.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Almacenamiento a largo plazo.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Falta de demanda.', esCorrecta: false },
            { id: 'd', texto: 'Resistencia al clima.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué aspecto es crucial en la presentación del producto para el consumidor?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Durabilidad del empaque.', esCorrecta: false },
            { id: 'b', texto: 'Color de la caja.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Apariencia y frescura del hongo.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Precio bajo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué herramienta se usa para la inoculación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Sembradora.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Inoculador o jeringa de esporas.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Pala de jardín.', esCorrecta: false },
            { id: 'd', texto: 'Aspersor de agua.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Por qué es importante la esterilización del sustrato antes de inocular?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Para mejorar el color.', esCorrecta: false },
            { id: 'b', texto: 'Para evitar contaminación.', esCorrecta: true },
            { id: 'c', texto: 'Para facilitar la cosecha.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Para reducir el tiempo de fructificación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿En qué tipo de contenedor es preferible almacenar los hongos después de la cosecha?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Bolsas de plástico sin perforar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cajas de cartón con perforaciones.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Frascos de vidrio.', esCorrecta: false },
            { id: 'd', texto: 'Bolsas selladas al vacío.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
