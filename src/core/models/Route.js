export class Route {
  required = ['name', 'path', 'component']

  constructor(options) {
    this.name = options.name
    this.path = options.path
    this.redirect = options.redirect
    // aliases is not iterable
    if (options.alias) {
      this.alias = options.alias
    }
    this.component = options.component
    this.meta = options.meta
    this.options = options.options
    this.children = options.children
    this.checkRequiredProperties()
  }

  checkRequiredProperties() {
    this.required.forEach((key) => {
      if (!this[key])
        console.warn(
          `Invalid Route "${key}" property in: `,
          this,
          `Receiving ${this[key]}`
        )
    })
  }
}
