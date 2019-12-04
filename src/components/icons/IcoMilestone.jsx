import React from "react";

const IcoMilestone = props => (
  <svg width="1.7em" height="1.7em" viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        stroke="#3E4144"
        strokeWidth={2}
        strokeLinecap="square"
        strokeDasharray={3}
        d="M2 12h4"
      />
      <path
        stroke="#3E4144"
        strokeWidth={2}
        strokeLinecap="square"
        strokeDasharray={1}
        d="M22 12h-4"
      />
      <path
        fill="#3E4144"
        fillRule="nonzero"
        d="M12.763 11h3.158v2h-3.158v3h-2.105v-3H7.5v-2h3.158V8h2.105z"
      />
    </g>
  </svg>
);

export default IcoMilestone;

