import React from "react";
import { Button, cn } from "@heroui/react";

export default function CustomButton({
  children,
  variant = "solid",
  size = "md",
  radius = "md",
  isLoading = false,
  isDisabled = false,
  isLoadingText = "",
  isIconOnly = false,
  isTruncated = false,
  isFullWidth = false,
  className,
  handleClick,
}) {
  return (
    <Button
      variant={variant}
      size={size}
      radius={radius}
      isLoading={isLoading}
      isDisabled={isDisabled}
      isLoadingText={isLoadingText}
      isIconOnly={isIconOnly}
      isTruncated={isTruncated}
      isFullWidth={isFullWidth}
      className={
        cn(
          className,
          "bg-forest text-white hover:bg-forest-700 transition"
        )
      }
      onPress={handleClick}
    >
      {children}
    </Button>
  );
}
