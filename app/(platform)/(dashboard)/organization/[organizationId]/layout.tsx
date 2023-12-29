import OrgControl from "./_components/OrgControl";

export default function OrganizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrgControl />

      {children}
    </>
  );
}
