import PropTypes from 'prop-types'

const variantTagMap = {
  title: 'h2',
  lead: 'p',
  eyebrow: 'p',
  label: 'p',
  body: 'p',
}

function Text({
  children,
  variant = 'body',
  as,
  muted = false,
  className = '',
  ...rest
}) {
  const Tag = as || variantTagMap[variant] || 'p'
  const classes = ['ui-text', `ui-text--${variant}`, muted ? 'ui-text--muted' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.keys(variantTagMap)),
  as: PropTypes.elementType,
  muted: PropTypes.bool,
  className: PropTypes.string,
}

export default Text


