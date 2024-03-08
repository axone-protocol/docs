import { ResponsiveLine } from '@nivo/line'
import React from 'react'
import { usePrismTheme } from '@docusaurus/theme-common'

const c = 3

const lineColor = 'hsl(331, 70%, 50%)' // TODO: use theme color

function* inflationPoints(): Generator<{ x: number; y: number }> {
  const step = 0.02
  for (let x = step; x <= 1; x += step) {
    const y = (1 / x) * c
    yield { x, y }
  }
}

export const inflationRateData = [
  {
    id: 'r',
    color: lineColor,
    data: [...inflationPoints()]
  }
]

export const LinePlot = ({ caption, xLegend, yLegend, xFormat, yFormat, data }) => {
  const prismTheme = usePrismTheme()

  return (
    <figure>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="plot" style={{ height: '380px', width: '570px', maxWidth: '100%' }}>
          <ResponsiveLine
            data={data}
            margin={{ top: 20, right: 20, bottom: 50, left: 80 }}
            lineWidth={3}
            curve="linear"
            xScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto'
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
                  fill: '#b0413e' // TODO: use theme color
                },
                value: c
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
              textColor: prismTheme.plain.color,
              tooltip: {
                container: {
                  background: prismTheme.plain.backgroundColor
                }
              }
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <figcaption>
          <span className="math math-inline">{caption}</span>
        </figcaption>
      </div>
    </figure>
  )
}
