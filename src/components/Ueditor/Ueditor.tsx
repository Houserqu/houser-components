import React, { Component } from "react"

interface Props {
  /**
   * Set this to change alert kind
   * @default info
   */
  id: string
}

class Ueditor extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { id } = this.props
    return <div>ueditor-{id}</div>
  }
}

export default Ueditor
