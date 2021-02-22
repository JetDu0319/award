import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { ErrorProps } from 'award';

const ErrorLoading = withRouter((props: any) => {
  return <p>loading...{props.routerError ? 'routerError' : props.location.pathname}</p>;
});

class ErrorComponent extends React.Component<ErrorProps> {
  public static async getInitialProps(ctx: any) {
    ctx.loading = <ErrorLoading />;
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 300);
    });
    return {
      name: 'getInitialProps'
    };
  }

  public render() {
    return <p>hello error{this.props.data.name}</p>;
  }
}

export default ErrorComponent;
