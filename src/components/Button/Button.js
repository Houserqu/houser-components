import React, { Component } from "react"
import PropTypes from "prop-types"

class Button extends Component {
  state = {
    disabled: false
  }

  render() {
    return <button>提交</button>
  }
}

Button.propTypes = {
  /** 是否禁用 */
  disabled: PropTypes.bool
}

export default Button
