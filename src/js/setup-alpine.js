import index from './alpine/index'
import about from './alpine/about'
import contact from './alpine/contact'

export default (Alpine) => {
  Alpine.data('index', index)
  Alpine.data('about', about)
  Alpine.data('contact', contact)
}
