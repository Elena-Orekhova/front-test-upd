import React from "react";

export type ImageProps = React.ComponentPropsWithoutRef<"img"> & {
  width?: number | string;
  height?: number | string;
  size?: "s" | "m";
};

export const Image = ({
  src,
  alt,
  width,
  height,
  className,
  size,
  ...props
}: ImageProps) => (
  <img
    src={src}
    alt={alt}
    className={className(className, `size-${size}`)}
    width={width}
    height={height}
    {...props}
  />
);
