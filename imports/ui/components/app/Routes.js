import React from 'react'
import { Router, Redirect } from '@reach/router'

// Organisms
import { Page } from '../atoms/layout/Page'
import { Row } from '../atoms/layout/Row'
import { BigText } from '../atoms/text/BigText'

import {
  // Page
  Content,
  Logo,
  Preview,
  Template,
} from '/imports/ui/pages'

const NotFound = () => (
  <Page>
    <Row>
      <BigText warning>404: Page Not Found</BigText>
    </Row>
  </Page>
)

export const Routes = props => (
  <Router>
    <Redirect from="/" to="/content" noThrow />

    <Content path="content" {...props} />
    <Logo path="logo" {...props} />

    <Template path="template" {...props} />

    <Preview path="preview" {...props} />

    <NotFound default />
  </Router>
)
