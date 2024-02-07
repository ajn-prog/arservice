import { Button } from '@mantine/core';
import { Page, Text, View, Document, PDFViewer, Image } from '@react-pdf/renderer';
import { IconArrowLeft } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';

import { LoadingScreen } from '@/components/elements';

import { useService } from '../api';

const DescriptionItem = ({ title, description }: { title: string; description?: string }) => (
  <View style={{ display: 'flex', flexDirection: 'row', fontSize: 9, marginBottom: 4 }}>
    <View style={{ width: '40%' }}>
      <Text>{title}</Text>
    </View>
    <View style={{ padding: '0 12px' }}>
      <Text>:</Text>
    </View>
    <View>
      <Text>{description}</Text>
    </View>
  </View>
);

export const ServicePrint: React.FC = () => {
  const { id } = useParams<'id'>();
  const { data, isLoading, isError } = useService({ id: id as string });
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="mt-48">
        <LoadingScreen />
      </div>
    );

  if (isError)
    return (
      <div className="mt-48 text-center">
        <h1 className="text-lg font-bold mb-2">Service tidak ditemukan</h1>
        <Button onClick={() => navigate(-1)} leftSection={<IconArrowLeft size={14} />}>
          Kembali
        </Button>
      </div>
    );

  return (
    <PDFViewer width="100%" height={720}>
      <Document>
        <Page size="A4" style={{ fontFamily: 'Helvetica' }}>
          <View style={{ margin: '0.5cm 1cm' }}>
            <Image
              source="/images/service-header.png"
              style={{ width: '17.95cm', height: '1.76cm' }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'Helvetica-Bold',
                width: '100%',
                fontSize: 10,
                padding: '12px 1.5cm',
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 10 }}>F/OPR/ENG/031</Text>
              <Text>ENG-AJN/CVPMCM/____/2024</Text>
            </View>
          </View>

          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontFamily: 'Helvetica-Bold', fontSize: 9, textAlign: 'center' }}>
              CUSTOMER VISIT/ PREVENTIVE MAINTENANCE/ CORRECTIVE MAINTENANCE
            </Text>
          </View>

          <View style={{ margin: '0 2cm', fontSize: 9, lineHeight: 1.5 }}>
            <View style={{ marginBottom: 8 }}>
              <DescriptionItem title="Pekerjaan" description={data.type_service} />
              <DescriptionItem
                title="Nomor Berkas Permintaan Customer Visit/ Preventive Maintenance/ Corrective Maintenance"
                description="-"
              />
              <DescriptionItem title="Nama Teknisi" description={data.type_service} />
              <DescriptionItem
                title="Nama Alat"
                description={data.installbase_detail.product.name}
              />
              <DescriptionItem
                title="Part Number/ Serial Number"
                description={data.installbase_detail.serial_number}
              />
              <DescriptionItem title="Software Version (Jika Ada)" description="-" />
              <DescriptionItem title="Nama Instansi" description={data.customer.name} />
              <DescriptionItem title="Alamat Instansi" description={data.customer.address} />
              <DescriptionItem title="Ruang Penempatan Alat" description={data.placement_space} />
              <DescriptionItem title="Pelanggan" description={data.pic_name} />
              <DescriptionItem title="Nomor Telepon Pelanggan" description={data.pic_phone} />
              <DescriptionItem title="Nomor Kontrak/ Nomor Surat Pesanan" description="-" />
            </View>

            <Text>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dengan ini teknisi sudah melakukan{' '}
              <Text
                style={{
                  textDecoration: data.type_service == 'Customer Visit' ? 'line-through' : 'none',
                }}
              >
                Customer Visit/{' '}
              </Text>
              <Text
                style={{
                  textDecoration:
                    data.type_service == 'Preventive Maintenance' ? 'line-through' : 'none',
                }}
              >
                Preventive Maintenance/{' '}
              </Text>
              <Text
                style={{
                  textDecoration:
                    data.type_service == 'Corective Maintenance' ? 'line-through' : 'none',
                }}
              >
                Corrective Maintenance
              </Text>
              pada instansi pelanggan diatas, untuk detailnya dapat dilihat pada keterangan dibawah:
            </Text>

            <View style={{ margin: '4px 0' }}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Masalah:</Text>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 10,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
            </View>
            <View style={{ margin: '4px 0' }}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Tindakan:</Text>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 10,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
            </View>
            <View style={{ margin: '4px 0' }}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Hasil:</Text>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 10,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
            </View>
            <View style={{ margin: '4px 0' }}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Saran:</Text>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 10,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
            </View>
            <View style={{ margin: '4px 0' }}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>Keterangan:</Text>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 10,
                }}
              ></View>
              <View
                style={{
                  borderBottom: 1,
                  borderStyle: 'solid',
                  borderColor: 'black',
                  width: '100%',
                  height: 12,
                }}
              ></View>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                textAlign: 'center',
                justifyContent: 'space-between',
                marginTop: 16,
                marginBottom: 16,
              }}
            >
              <View style={{ width: '25%' }}>
                <Text>Disetujui</Text>
                <View
                  style={{
                    marginTop: 36,
                    borderBottom: 1,
                    borderStyle: 'solid',
                    borderColor: 'black',
                    width: '100%',
                    height: 10,
                  }}
                ></View>
              </View>
              <View style={{ width: '25%' }}>
                <Text>Mengetahui</Text>
                <View
                  style={{
                    marginTop: 36,
                    borderBottom: 1,
                    borderStyle: 'solid',
                    borderColor: 'black',
                    width: '100%',
                    height: 10,
                  }}
                ></View>
              </View>
              <View style={{ width: '25%' }}>
                <Text>PT. Arkan Jaya Nusantara</Text>
                <Text
                  style={{
                    marginTop: 36,
                  }}
                >
                  {data.engineer.name}
                </Text>
              </View>
            </View>

            <View style={{ color: 'orange' }}>
              <Text style={{ fontFamily: 'Helvetica-Bold' }}>PT. ARKAN JAYA NUSANTARA</Text>
              <Text>Ruby Commercial - Summarecon Bekasi</Text>
              <Text>
                Blok TB No. 11 Jl. Boulevard Selatan, Marga Mulya Kota Bekasi, Jawa Barat 17142,
                Indonesia
              </Text>
              <Text style={{ marginBottom: 12 }}>
                T. +62 21 3970 5555
                mail.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info@ajn-Indonesia.co.id
              </Text>
              <Text>www.ajn-Indonesia.co.id</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
