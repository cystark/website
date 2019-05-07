import React from "react"

export default function AspectRatio(props) {
  const container = {
    position: 'relative',
    paddingBottom : `${(props.ratio) * 100}%`,
    width: '100%'
  }
  const content = {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }

  return <div style={container}>
    <div style={content}>
      {props.children}
    </div>
   </div>
};
