import { Container, Row, Col } from "reactstrap"
import React, { FunctionComponent } from "react"
import ContentLoader from "react-content-loader"
import Layout from "../components/layout"
import { useAuth0 } from "../utils/auth"

const Profile: FunctionComponent = () => {
  const { loading, user } = useAuth0()
  return (
    <Layout>
      <Container fluid="true" className="container-fluid px-auto mx-auto">
        <Row className="pb-5 mx-auto justify-content-center flex-column">
          <Col className="mx-auto my-auto justify-content-center">
            {loading || !user ? (
              <Row className="mx-auto my-3 justify-content-center">
                <ProfilePlaceholder type="user" />
              </Row>
            ) : (
              <>
                <Row className="mx-auto my-3 justify-content-center">
                  <img
                    src={user.picture}
                    alt="Profile"
                    className="rounded-circle profile-picture mx-auto my-auto"
                    width="200px"
                  />
                </Row>
                <Row className="mx-auto my-auto justify-content-center">
                  <h2>{user.name}</h2>
                </Row>
                <Row className="mx-auto my-auto justify-content-center">
                  <small>
                    <a
                      href={`https://duckduckgo.com/?q=map+${user["https://example.com/geoip"].latitude}%2C+${user["https://example.com/geoip"].longitude}&t=ffab&atb=v199-1&ia=web&iaxm=maps`}
                    >
                      {user["https://example.com/geoip"].city_name},{" "}
                      {user["https://example.com/geoip"].country_name}
                    </a>
                  </small>
                </Row>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Profile

export const ProfilePlaceholder: FunctionComponent<{ type: string }> = ({
  type,
}) => {
  if (type && type === "screenshot") {
    return (
      <div className="w-full">
        <ContentLoader
          speed={3}
          width={382}
          height={238}
          viewBox="0 0 382 238"
          backgroundColor="RGBA(0, 86, 179, 0.1)"
          foregroundColor="RGBA(0, 86, 179, 0.2)"
        >
          <rect x="0" y="0" rx="1" ry="1" width="382" height="238" />
        </ContentLoader>
      </div>
    )
  }
  return (
    <div className="w-full">
      <ContentLoader
        speed={2}
        width={600}
        height={300}
        viewBox="0 0 600 300"
        backgroundColor="RGBA(0, 86, 179, 0.1)"
        foregroundColor="RGBA(0, 86, 179, 0.2)"
      >
        <rect x="50" y="250" rx="3" ry="3" width="500" height="6" />
        <rect x="50" y="272" rx="3" ry="3" width="430" height="6" />
        <rect x="50" y="288" rx="3" ry="3" width="480" height="6" />
        <circle cx="300" cy="110" r="100" />
      </ContentLoader>
    </div>
  )
}
