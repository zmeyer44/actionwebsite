import React from "react"
import theme from "../../theme"
import {
  BtnWrapper,
  BtnWrapperAlt,
  BtnWrapperFunction,
} from "./styled.components"

const Button = ({ children, alt, fun, ...props }) => {
  if (fun) {
    return (
      <BtnWrapperFunction {...props}>
        <span>{children}</span>
      </BtnWrapperFunction>
    )
  }
  if (!alt) {
    return (
      <BtnWrapper {...props}>
        <span>{children}</span>
      </BtnWrapper>
    )
  } else {
    return (
      <BtnWrapperAlt {...props}>
        <span>{children}</span>
      </BtnWrapperAlt>
    )
  }
}

Button.defaultProps = {
  textColor: theme.colors.white,
  backgroundColor: theme.colors.primary,
}

export default Button
