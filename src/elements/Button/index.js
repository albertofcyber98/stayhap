import React from 'react' // shortcut rfc
import { Link } from 'react-router-dom' // shortcut immr
import propTypes from 'prop-types'

export default function Button(props) {
    const className = [props.className]
  if (props.isPrimary) className.push("btn-primary")
  if (props.isLarge) className.push("btn-lg")
  if (props.isSmall) className.push("btn-sm")
  if (props.isBlock) className.push("btn-block")
  if (props.hasShadow) className.push("btn-shadow")

  const onClick = () => {
  if (props.onClick) props.onClick()
  }
  if (props.isDisabled || props.isLoading) {
    if(props.isDisabled) className.push("disabled")
    return (<span
      className={className.join(" ")}
      style={props.style}
    >
      {
        props.isLoading ? (<>
          <span className='spinner-border spinner-border-sm mx-5'></span>
          <span className='sr-only'>Loading..</span>
        </>) : (
            props.children
        )
      }
    </span>)
  }
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}>
          {props.children}
        </a>
      )
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style} onClick={onClick}>
        {props.children}
        </Link>
      )
    }
  }
  return (
    <button
      href={props.href}
      className={className.join(" ")}
      style={props.style}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
    type: propTypes.oneOf(["button", "link"]),
    // oneOf = dengan enum hanya terima properti button atau link
    onClick: propTypes.func,
    // Semisal button
    href: propTypes.string,
    target: propTypes.string,
    // untuk link eksternal
    className: propTypes.string,
    isExternal: propTypes.bool,
    isDisabled: propTypes.bool,
    // Semisal ada button disable atau link
    isLoading: propTypes.bool,
    // button akan ada loading 
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool
}
