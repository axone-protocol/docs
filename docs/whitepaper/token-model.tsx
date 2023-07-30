import { ResponsiveLine } from '@nivo/line'
import React from 'react'
import { useColorMode } from '@docusaurus/theme-common'

const a = 200000000
const i = 0.0002
const c = 2.5
const bt = 0.66

function* srtdPoints(): Generator<{ x: number; y: number }> {
  for (let x = 0; x <= 1; x += 0.05) {
    const y = a * i * (c - x / bt);
    yield { x, y };
  }
}

export const srtdData = [
  {
    id: 'r',
    color: 'hsl(331, 70%, 50%)',
    data: [...srtdPoints()]
  }
]

function* srdyPercentPoints(): Generator<{ x: number; y: number }> {
  for (let x = 0; x <= 1; x += 0.05) {
    const y = 365 * i * (c - x / bt);
    yield { x, y };
  }
}

export const srdyPercentData = [
  {
    id: 'percentage of a',
    color: 'hsl(331, 70%, 50%)',
    data: [...srdyPercentPoints()]
  }
]

export const LinePlot = ({ caption, xLegend, yLegend, xFormat, yFormat, data }) => {
  const isDark = useColorMode().colorMode === 'dark'

  return (
    <figure>
      <center>
        <div className="plot" style={{ height: '380px', width: '570px', maxWidth: '100%' }}>
          <ResponsiveLine
            data={data}
            margin={{ top: 20, right: 20, bottom: 50, left: 80 }}
            lineWidth={3}
            curve='linear'
            xScale={{ 
              type: 'linear',
              min: 'auto',
              max: 'auto',
            }}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto'
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: xLegend,
              legendOffset: 36,
              legendPosition: 'middle',
              format: xFormat
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: yLegend,
              legendOffset: -60,
              legendPosition: 'end',
              format: yFormat
            }}
            yFormat={yFormat}
            xFormat={xFormat}
            markers={[
              {
                axis: 'x',
                legend: 'target',
                lineStyle: {
                  stroke: '#b0413e',
                  strokeDasharray: '4 4',
                  strokeWidth: 1
                },
                textStyle: {
                  fill: '#b0413e'
                },
                value: bt
              }
            ]}
            enableGridX={false}
            enableGridY={false}
            pointSize={0}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            theme={{
              textColor: isDark ? '#ffffff' : '#000000',
              tooltip: {
                container: {
                  background: isDark ? '#000000' : '#ffffff'
                }
              }
            }}
          />
        </div>
      </center>
      <center>
        <figcaption>
          <span className="math math-inline">{caption}</span>
        </figcaption>
      </center>
    </figure>
  )
}
