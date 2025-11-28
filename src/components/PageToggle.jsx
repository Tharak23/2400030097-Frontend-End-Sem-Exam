import PropTypes from 'prop-types'

const options = [
  { id: 'overview', label: 'Overview' },
  { id: 'insights', label: 'Insights' },
]

function PageToggle({ activePage, onChange }) {
  return (
    <div className="page-toggle" role="tablist" aria-label="Page selection">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          role="tab"
          aria-selected={activePage === option.id}
          className={`page-toggle__button ${
            activePage === option.id ? 'is-active' : ''
          }`}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

PageToggle.propTypes = {
  activePage: PropTypes.oneOf(options.map((option) => option.id)).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default PageToggle


