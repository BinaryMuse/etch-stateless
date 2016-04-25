export default function stateless (etch, renderFn) {
  if (typeof etch === 'function') {
    throw new Error("The first parameter to stateless should be the Etch library")
  }

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
