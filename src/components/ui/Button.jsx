import PropTypes from 'prop-types'

const variants = ['primary', 'secondary', 'ghost']
const sizes = ['sm', 'md', 'lg']

function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  className = '',
  ...rest
}) {
  const classes = [
    'ui-button',
    `ui-button--${variant}`,
    `ui-button--${size}`,
    fullWidth ? 'ui-button--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} {...rest}>
      {icon ? <span className="ui-button__icon">{icon}</span> : null}
      <span>{children}</span>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(variants),
  size: PropTypes.oneOf(sizes),
  fullWidth: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string,
}

export default Button


