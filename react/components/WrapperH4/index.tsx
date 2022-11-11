import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['wrapperH4']

interface WrapperH4 {
  children: React.FC
}

const WrapperH4: React.FC<WrapperH4> = ({ children }) => {
  const handles = useCssHandles(CSS_HANDLES)

  return <h4 className={`${handles.wrapperH4} mt0 mb0`}>{children}</h4>
}

export default WrapperH4