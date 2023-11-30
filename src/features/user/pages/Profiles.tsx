import { Card, Tabs } from '@mantine/core';

import { BiodataForm } from '../components';

export const Profiles: React.FC = () => {
  return (
    <main>
      <Card>
        <Card.Section p="lg" withBorder>
          <Tabs>
            <Tabs.List grow>
              <Tabs.Tab value="biodata">Biodata</Tabs.Tab>
              <Tabs.Tab value="manajemen">Manajemen</Tabs.Tab>
              <Tabs.Tab value="alat">Pengguna Alat</Tabs.Tab>
              <Tabs.Tab value="teknisi">Teknisi Rumah Sakit (IPSRS)</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Card.Section>

        <Card.Section p="lg">
          <BiodataForm />
        </Card.Section>
      </Card>
    </main>
  );
};
