import React from "react"

function Entry(props){
    return (<dl className="dictionary">
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emo}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>
        {props.means}
      </dd>
    </div>
  </dl>)
}

export default Entry;