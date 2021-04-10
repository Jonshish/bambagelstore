import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Bam Bagel Baking Co.',
  description: 'Upstate New York boutique bagel shop!',
  keywords: 'bagels, baking, buy bagels, make bagel',
}

export default Meta
