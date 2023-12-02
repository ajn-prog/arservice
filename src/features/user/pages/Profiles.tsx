import { Card, Tabs } from '@mantine/core';

import { BiodataForm, EngineerForm, ManagementForm, SupporterForm } from '../components';

export const Profiles: React.FC = () => {
  return (
    <main>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-800">Profiles</h1>
      </div>
      <Card>
        <Card.Section p="lg" withBorder>
          <Tabs defaultValue="biodata">
            <Tabs.List grow mb="lg">
              <Tabs.Tab value="biodata">Biodata</Tabs.Tab>
              <Tabs.Tab value="manajemen">Manajemen</Tabs.Tab>
              <Tabs.Tab value="pengguna_alat">Pengguna Alat</Tabs.Tab>
              <Tabs.Tab value="teknisi">Teknisi Rumah Sakit (IPSRS)</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="biodata">
              <BiodataForm />
            </Tabs.Panel>
            <Tabs.Panel value="manajemen">
              <ManagementForm />
            </Tabs.Panel>
            <Tabs.Panel value="pengguna_alat">
              <SupporterForm />
            </Tabs.Panel>
            <Tabs.Panel value="teknisi">
              <EngineerForm />
            </Tabs.Panel>
          </Tabs>
        </Card.Section>
      </Card>
    </main>
  );
};
