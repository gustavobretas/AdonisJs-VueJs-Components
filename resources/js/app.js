import '../css/app.css'

import { createApp, defineAsyncComponent } from 'vue'

const app = createApp({})

const components = require.context('@/components', true, /\.vue$/i)

components.keys().map((key) => {
  const component = key.split('/').pop().split('.')[0]
  if (component.indexOf('__') === -1) {
    app.component(
      component,
      defineAsyncComponent(() => import('@/components/' + key.replace('./', '')))
    )
  }
})

app.mount('#app')
