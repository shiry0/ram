import type { ReactNode } from "react";

type AssetPlaceholderProps = {
  path: string;
  role: string;
  className?: string;
  children: ReactNode;
};

export function AssetPlaceholder({ path, role, className = "", children }: AssetPlaceholderProps) {
  return (
    <figure
      className={`asset-placeholder ${className}`}
      data-asset-path={path}
      aria-label={role}
    >
      <div className="asset-placeholder__art" aria-hidden="true">
        {children}
      </div>
      <figcaption aria-hidden="true">placeholder - {path}</figcaption>
    </figure>
  );
}
