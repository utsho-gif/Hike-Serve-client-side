import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
      <div>
        <Link
          style={{ color: match ? '#1C8D73' : '#bec3cc', textDecoration: 'none', fontWeight: match? '700' : '400' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/* {match && " (active)"} */}
      </div>
    );
  }

export default CustomLink;