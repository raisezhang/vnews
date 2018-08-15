import ItemList from './ItemList.vue'

const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)
import footerModule from '../store/modules/footer'
// This is a factory function for dynamically creating root-level list views,
// since they share most of the logic except for the type of items to display.
// They are essentially higher order components wrapping ItemList.vue.
export default function createListView (type) {
  return {
    name: `${type}-view`,

    asyncData ({ store }) {
      store.registerModule('footer', footerModule)
      return store.dispatch('FETCH_LIST_DATA', { type })
    },

    title: camelize(type),

    render (h) {
      return h(ItemList, { props: { type }})
    }
  }
}
