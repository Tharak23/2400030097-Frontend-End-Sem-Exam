import PropTypes from 'prop-types'

function Card({ title, subtitle, actions, footer, children, className = '', onClick }) {
  const hasHeader = title || subtitle || actions
  const isInteractive = typeof onClick === 'function'

  const classes = ['ui-card', isInteractive ? 'ui-card--interactive' : '', className]
    .filter(Boolean)
    .join(' ')

  const handleKeyDown = (event) => {
    if (!isInteractive) return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick(event)
    }
  }

  return (
    <section
      className={classes}
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={handleKeyDown}
    >
      {hasHeader ? (
        <header className="ui-card__header">
          <div>
            {subtitle ? <p className="ui-card__subtitle">{subtitle}</p> : null}
            {title ? <h3 className="ui-card__title">{title}</h3> : null}
          </div>
          {actions ? <div className="ui-card__actions">{actions}</div> : null}
        </header>
      ) : null}
      <div className="ui-card__body">{children}</div>
      {footer ? <footer className="ui-card__footer">{footer}</footer> : null}
    </section>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actions: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Card

