import { OrganizationList } from "@clerk/nextjs";
import React from "react";

export default function CreteOrganizationPage() {
  return (
    <div>
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
      />
    </div>
  );
}
