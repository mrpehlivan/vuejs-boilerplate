// imports
import Hello from './components/boilerplate/index'
import NotFound from './components/NotFound'

// exports
export default function (router) {
    router.map({
        '/': {
            component: Hello
        },
        '*': {
            component: NotFound
        }
    })
}