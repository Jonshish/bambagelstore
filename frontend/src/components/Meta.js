import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords, image, metaImage }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
      <meta name="image" content={image} />
      <meta property="og:image" content={metaImage} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Bam Bagel Baking Co.',
  description: 'Upstate New York boutique bagel shop!',
  keywords: 'bagels, baking, buy bagels, make bagel',
  image: '/frontend/public/images/bagelwork.jpg',
  metaImage: '/frontend/public/images/bagelwork.jpg',
}

export default Meta
