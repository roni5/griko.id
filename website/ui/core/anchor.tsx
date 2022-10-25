import Link from "next/link";
import type { ComponentProps, ComponentType } from "react";
import { forwardRef, Fragment } from "react";

export type AnchorProps = ComponentProps<"a"> & {
  external?: boolean;
};

// eslint-disable-next-line react/display-name
export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  //
  ({ children, external, href = "", ...rest }, ref) => {
    const isApi = href.startsWith("/api");
    const isHash = href.startsWith("#");
    const isRelative = href.startsWith("/");
    const isExternal = typeof external === "boolean" ? external : isApi || (!isHash && !isRelative);

    const Wrap = (isExternal ? Fragment : Link) as ComponentType<any>;
    const wrapProps = isExternal ? {} : { href, legacyBehavior: true };
    const linkProps = isExternal ? { target: "_blank" } : {};

    return (
      <Wrap {...wrapProps}>
        <a {...rest} {...linkProps} data-external-link={isExternal} href={href} ref={ref}>
          {children ?? (href ? trimHttp(href) : null)}
        </a>
      </Wrap>
    );
  },
);

export const AnchorCompat = (props) => {
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <Anchor {...props} />;
};

const trimHttp = (str: string) => {
  return str.replace(/https?:\/\//, "");
};
