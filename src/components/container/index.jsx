import PropTypes from "prop-types"



export function Container({ children }) {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.element
}