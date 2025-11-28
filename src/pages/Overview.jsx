import { useState } from 'react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Text from '../components/ui/Text'

const stats = [
  { label: 'Active initiatives', value: '12', detail: '4 launching this week' },
  { label: 'Avg. response time', value: '2.3h', detail: 'On target for the sprint' },
  { label: 'Stakeholder score', value: '92', detail: '↑ 6 pts vs last week' },
]

const highlights = [
  {
    title: 'Northstar card refresh',
    description: 'Card component now supports inline actions and calm states.',
    status: 'Ready to ship',
  },
  {
    title: 'Button density presets',
    description: 'Small / medium / large presets reviewed with accessibility in mind.',
    status: 'Feedback needed',
  },
]

function OverviewPage() {
  const [lastSelection, setLastSelection] = useState('Tap a card to see quick details here.')

  return (
    <div className="page">
      <div className="page__intro">
        <Text variant="eyebrow">Design ops</Text>
        <Text variant="title" as="h2">
          Overview
        </Text>
        <Text variant="lead" muted>
          A quick snapshot of the system health, open initiatives, and highlights that need eyes
          this week.
        </Text>
        <div className="page__actions">
          <Button variant="primary">Add update</Button>
          <Button variant="secondary">Share summary</Button>
        </div>
      </div>

      <div className="card-grid">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            subtitle={stat.label}
            onClick={() => setLastSelection(`Metric clicked: ${stat.label}`)}
          >
            <Text variant="title" as="p">
              {stat.value}
            </Text>
            <Text muted>{stat.detail}</Text>
          </Card>
        ))}
      </div>

      <div className="card-list">
        {highlights.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            subtitle="Component highlight"
            footer={<Text muted>{item.status}</Text>}
            actions={<Button variant="ghost">Open</Button>}
            onClick={() => setLastSelection(`Highlight opened: ${item.title}`)}
          >
            <Text>{item.description}</Text>
          </Card>
        ))}
      </div>

      <Card subtitle="Activity" title="Last action">
        <Text>{lastSelection}</Text>
      </Card>
    </div>
  )
}

export default OverviewPage

