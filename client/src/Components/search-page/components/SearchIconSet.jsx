import loadable from "@loadable/component";
import React from "react";
import Icon from "../../../reusable/icons/Icon";
import Loading from "../../../reusable/icons/Loading.jsx";
import { getIcons } from "../../../utils/getIcons";

export default function SearchIconSet({ icon, query }) {
  const IconSet = loadable.lib(() => getIcons(icon.id));
  return (
    <IconSet fallback={<Loading/>}>
      {({ default: icons }) => {
        const found = Object.keys(icons)
          .filter(name => name.toLowerCase().includes(query))
        return (
          <>
            {found.map(name => {
              return <Icon
                key={name}
                icon={icons[name]}
                name={name}
              />
      })}
          </>
        )
      }}
    </IconSet>
  );
}