import React from 'react'
import { Route, Redirect } from 'react-router-dom'


interface IRouteWrapper {
  path: string
  component: React.ComponentType
  isPrivate?: boolean
  exact?: boolean
}

const RouteWrapper: React.FC<IRouteWrapper> = ({
  path,
  component: Component,
  isPrivate,
  exact,
  ...rest
}: IRouteWrapper) => {

  return (
    <Route
      {...rest}
      exact={exact}
      render={(props: any) => (
        <div>
          <Component path={path} {...props} />
        </div>
      )}
    />
  )
}

export default RouteWrapper
