import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';


export default function UserList() {
  return (
  <LineChart
 width={300}
      xAxis={[{ data: [1, 2, 3, 5, 8, 95] }]}
      series={[
        {
          data: [2, 5, 2, 8, 1, 5],
          label: 'label 1',
        },{
          data: [4, 1, 3, 99, 3, 5],
          label: 'label 2',
        },
      ]}
      height={500}
    />
  )
}
