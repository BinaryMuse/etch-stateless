const etch = require('etch')

export default function stateless (renderFn) {
  class EtchStateless {
    constructor (props, children) {
      this.props = props
      this.children = children
      etch.initialize(this)
    }

    update (props, children) {
      this.props = props
      this.children = children
      return etch.update(this)
    }

    render () {
      return renderFn(this.props, this.children)
    }
  }

  return EtchStateless
}
