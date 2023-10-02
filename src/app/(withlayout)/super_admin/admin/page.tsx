"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageAdminPage = () => {
  const { role } = getUserInfo() as any;

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <h1>Manage Admin Page</h1>
      <Link href="/super_admin/admin/create">
        <Button>Create Admin</Button>
      </Link>{" "}
    </div>
  );
};

export default ManageAdminPage;
