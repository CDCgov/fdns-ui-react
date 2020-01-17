import React from "react";

const IcoPivChip = props => (
  <svg width="1.8em" height="1.8em" viewBox="0 0 22 24" {...props}>
    <defs>
      <linearGradient
        x1="16.523%"
        y1="2.345%"
        x2="88.967%"
        y2="97.625%"
        id="icoPIVChip_svg__a"
      >
        <stop stopColor="#FFF" stopOpacity={0.12} offset="0%" />
        <stop stopOpacity={0} offset="100%" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <rect
          y={0.46}
          width={14.407}
          height={16.004}
          rx={1.493}
          fill="#FFD353"
          transform="translate(4 3.5)"
        />
        <rect
          y={0.46}
          width={14.407}
          height={16.004}
          rx={1.493}
          fill="url(#icoPIVChip_svg__a)"
          stroke="#E4B93C"
          strokeWidth={0.5}
          transform="translate(4 3.5)"
        />
      </g>
      <path
        stroke="#E4B93C"
        strokeWidth={0.514}
        d="M9.72 19.65l2.815.15v-5.15H9.72zM12.414 4.188v5.047H9.73V4.188z"
      />
      <path
        stroke="#E4B93C"
        strokeWidth={0.571}
        d="M6.988 4.067l-.96 7.949.96 7.949M15.739 4.067l.96 7.949-.96 7.949"
      />
      <path
        stroke="#E4B93C"
        strokeWidth={0.514}
        d="M18.466 14.587H4.042M18.433 9.259H4.031"
      />
    </g>
  </svg>
);

export default IcoPivChip;

