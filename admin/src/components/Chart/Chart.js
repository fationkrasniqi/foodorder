import React from 'react';
import './Chart.scss'
import {
  ResponsiveContainer,
  XAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from 'recharts'

function App({ title, data, dataKey, grid }) {
  return (
    <div className="chart box-shadow">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default App
