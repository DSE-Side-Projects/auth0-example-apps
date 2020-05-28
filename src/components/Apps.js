import { Row } from "reactstrap"
import App from "./App"
import ContentLoader from "react-content-loader"
import React from "react"

const Apps = ({ apps }) => {
  if (!apps || apps === undefined) {
    return <ContentPlaceholder />
  }
  return (
    <Row className="mx-auto" style={{ width: 90 + "%" }}>
      {apps.map((app) => (
        <App app={app} key={app.node.slug.current} />
      ))}
    </Row>
  )
}

export default Apps

export const ContentPlaceholder = () => {
  return (
    <ContentLoader
      speed={2}
      width={1000}
      height={600}
      viewBox="0 0 1180 600"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="3" ry="3" width="380" height="230" />
      <rect x="5" y="250" rx="3" ry="3" width="280" height="50" />
      <rect x="5" y="320" rx="3" ry="3" width="350" height="18" />
      <rect x="5" y="350" rx="3" ry="3" width="280" height="18" />
      <rect x="5" y="380" rx="3" ry="3" width="340" height="18" />
      <rect x="140" y="420" rx="3" ry="3" width="100" height="35" />
      <rect x="40" y="480" rx="3" ry="3" width="300" height="40" />

      <rect x="400" y="0" rx="3" ry="3" width="380" height="230" />
      <rect x="405" y="250" rx="3" ry="3" width="280" height="50" />
      <rect x="405" y="320" rx="3" ry="3" width="350" height="18" />
      <rect x="405" y="350" rx="3" ry="3" width="280" height="18" />
      <rect x="405" y="380" rx="3" ry="3" width="340" height="18" />
      <rect x="540" y="420" rx="3" ry="3" width="100" height="35" />
      <rect x="440" y="480" rx="3" ry="3" width="300" height="40" />

      <rect x="800" y="0" rx="3" ry="3" width="380" height="230" />
      <rect x="805" y="250" rx="3" ry="3" width="280" height="50" />
      <rect x="805" y="320" rx="3" ry="3" width="350" height="18" />
      <rect x="805" y="350" rx="3" ry="3" width="280" height="18" />
      <rect x="805" y="380" rx="3" ry="3" width="340" height="18" />
      <rect x="940" y="420" rx="3" ry="3" width="100" height="35" />
      <rect x="840" y="480" rx="3" ry="3" width="300" height="40" />
    </ContentLoader>
  )
}
