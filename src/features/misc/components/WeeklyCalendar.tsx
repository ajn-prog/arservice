import { ActionIcon } from '@mantine/core';
import { useState } from 'react';

import { dayjs } from '@/lib/dayjs';
import { useGenerateColor } from '@/utils/color';
import { clsx } from '@/utils/format';
import { timeDiff } from '@/utils/time';

type Schedule = {
  colorId?: number;
  day: 'senin' | 'selasa' | 'rabu' | 'kamis' | 'jumat' | 'sabtu' | 'minggu';
  startTime: string; // HH:mm:ss
  endTime: string; // HH:mm:ss
  title: string;
  description: React.ReactNode;
};

type Props = {
  schedules: Schedule[];
};

export const WeeklyCalendar: React.FC<Props> = ({ schedules }) => {
  const [selected, setSelected] = useState<Date>(new Date());
  const color = useGenerateColor();

  function getDayNumber(day: string) {
    const days: { [key: string]: number } = {
      senin: 1,
      selasa: 2,
      rabu: 3,
      kamis: 4,
      jumat: 5,
      sabtu: 6,
      minggu: 7,
    };

    const lowercaseDayName = day.toLowerCase();

    return days[lowercaseDayName] || 0;
  }

  function getColStyle(day: string) {
    switch (getDayNumber(day)) {
      case 1:
        return 'sm:col-start-1';
      case 2:
        return 'sm:col-start-2';
      case 3:
        return 'sm:col-start-3';
      case 4:
        return 'sm:col-start-4';
      case 5:
        return 'sm:col-start-5';
      case 6:
        return 'sm:col-start-6';
      case 7:
        return 'sm:col-start-7';
      default:
        return '';
    }
  }

  const DaysButton = () => {
    const start = dayjs(selected).startOf('weeks');

    return (
      <>
        {Array(7)
          .fill(0)
          .map((_, i) => {
            const current = start.add(i, 'day');

            return (
              <div key={i} className="flex flex-col items-center justify-center">
                <ActionIcon
                  onClick={() => setSelected(current.toDate())}
                  radius="lg"
                  color={current.isSame(selected, 'day') ? 'primary' : 'dark'}
                  variant={current.isSame(selected, 'day') ? 'light' : 'transparent'}
                >
                  {current.format('dd')}
                </ActionIcon>
              </div>
            );
          })}
      </>
    );
  };

  return (
    <div className="isolate flex h-[720px] max-h-[720px] overflow-y-auto flex-auto flex-col bg-white rounded-md shadow-md">
      <div
        className="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
        style={{ width: '165%' }}
      >
        <div className="sticky top-0 z-30 flex-none bg-white shadow-sm ring-1 ring-black ring-opacity-5 sm:pr-8">
          <div className="grid grid-cols-7 py-2 text-sm leading-6 text-gray-600 sm:hidden">
            <DaysButton />
          </div>

          <div className="-mr-px hidden grid-cols-7 border-r border-gray-200 text-sm leading-6 text-gray-700 sm:grid divide-x divide-gray-200">
            <div className="col-end-1 w-14"></div>
            <div className="flex items-center justify-center py-3 font-bold">Senin</div>
            <div className="flex items-center justify-center py-3 font-bold">Selasa</div>
            <div className="flex items-center justify-center py-3 font-bold">Rabu</div>
            <div className="flex items-center justify-center py-3 font-bold">Kamis</div>
            <div className="flex items-center justify-center py-3 font-bold">Jumat</div>
            <div className="flex items-center justify-center py-3 font-bold">Sabtu</div>
            <div className="flex items-center justify-center py-3 font-bold">Minggu</div>
          </div>
        </div>

        <div className="flex flex-auto">
          <div className="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-200"></div>
          <div className="grid flex-auto grid-cols-1 grid-rows-1">
            <div
              className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-200"
              style={{ gridTemplateRows: 'repeat(38, minmax(3.5rem, 1fr))' }}
            >
              <div className="row-end-1 h-7"></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  04:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  05:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  06:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  07:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  08:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  09:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  10:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  11:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  12:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  13:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  14:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  15:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  16:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  17:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  18:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  19:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  20:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  21:00
                </div>
              </div>
              <div></div>
              <div>
                <div className="sticky left-0 z-20 -ml-16 pr-1 -mt-3 w-14 text-right text-xs leading-5 text-gray-600">
                  22:00
                </div>
              </div>
              <div></div>
            </div>

            <div className="col-start-1 col-end-2 row-start-1 hidden grid-cols-7 grid-rows-1 sm:grid sm:grid-cols-7 divide-x divide-gray-200">
              <div className="col-start-1 row-span-full"></div>
              <div className="col-start-2 row-span-full"></div>
              <div className="col-start-3 row-span-full"></div>
              <div className="col-start-4 row-span-full"></div>
              <div className="col-start-5 row-span-full"></div>
              <div className="col-start-6 row-span-full"></div>
              <div className="col-start-7 row-span-full"></div>
              <div className="col-start-8 row-span-full w-8"></div>
            </div>

            <div
              className="col-start-1 col-end-2 row-start-1 grid grid-cols-1 sm:grid-cols-7 sm:pr-8"
              style={{ gridTemplateRows: '1.75rem repeat(228, minmax(0px, 1fr)) auto' }}
            >
              {schedules.map((schedule, i) => {
                const low = timeDiff(schedule.startTime, '04:00:00', 'hour-decimal');
                const highDiff = timeDiff(schedule.startTime, schedule.endTime, 'hour-decimal');
                const high = highDiff < 0.5 ? 0.5 : highDiff;

                return (
                  <div
                    key={i}
                    className={clsx(
                      'relative mt-px',
                      getColStyle(schedule.day),
                      schedule.day == dayjs(selected).format('dddd').toLowerCase()
                        ? 'flex'
                        : 'hidden md:flex'
                    )}
                    style={{
                      gridRow: `${2 + 6 * (low * 2)} / span ${6 * high * 2}`,
                    }}
                  >
                    <div
                      className="absolute opacity-80 inset-1 flex flex-col overflow-y-auto rounded-lg p-2 text-xs leading-5 cursor-pointer"
                      style={{ background: color(schedule.colorId ?? 3)[1] }}
                    >
                      <p style={{ color: color(schedule.colorId ?? 3)[6] }}>
                        <span>{dayjs(schedule.startTime, 'HH:mm:ss').format('HH:mm')}</span>
                        <span> - </span>
                        <span>{dayjs(schedule.endTime, 'HH:mm:ss').format('HH:mm')}</span>
                      </p>
                      <p
                        className="font-bold text-sm mb-1.5"
                        style={{ color: color(schedule.colorId ?? 3)[6] }}
                      >
                        {schedule.title}
                      </p>
                      {schedule.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
