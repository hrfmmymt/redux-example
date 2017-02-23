import React, {Component} from 'react'

// stateless component
export const PostItem = (props) => (
  <div key={props.post.id}>
    <h3>{props.post.title}</h3>
    <p>{props.post.body}</p>
  </div>
)
