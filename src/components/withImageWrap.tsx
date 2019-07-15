import React from "react"
import AspectRatio from "../components/AspectRatio"

interface CustomProps {
  ratio: number
}

const withImageWrap = <T extends React.Component, OriginalProps extends {}>(
  WrappedComponent: React.ComponentClass<OriginalProps>
) => {
  type PrivateProps = { forwardedRef: React.RefObject<T> }

  type Props = OriginalProps & PrivateProps & CustomProps

  class WithImageWrap extends React.Component<Props> {
    constructor(props: any) {
      super(props)
    }

    render() {
      const { forwardedRef, ...restTemp } = this.props as PrivateProps
      const rest = restTemp as OriginalProps & CustomProps
      const { ratio, ...props } = rest
      return (
        <AspectRatio ratio={ratio}>
          <WrappedComponent {...rest} ref={forwardedRef} />
        </AspectRatio>
      )
    }
  }

  const RefForwardingFactory = (props: Props, ref: T) => {
    return <WithImageWrap {...props} forwardedRef={ref} />
  }

  return React.forwardRef<T, OriginalProps & CustomProps>(
    RefForwardingFactory as any
  )
}

export default withImageWrap
