import { useState } from 'react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Text from '../components/ui/Text'

const feedback = [
  {
    author: 'Product marketing',
    note: 'Cards feel confident, but need a compact variation for email summaries.',
    tone: 'positive',
  },
  {
    author: 'Support enablement',
    note: 'Buttons are easy to parse, would love a destructive preset for critical alerts.',
    tone: 'neutral',
  },
]

const roadmap = [
  { label: 'Calm states', due: 'Dec 02', owner: 'Ana' },
  { label: 'Rich text tokens', due: 'Dec 05', owner: 'Mikhail' },
  { label: 'Button motion audit', due: 'Dec 08', owner: 'Ivy' },
]

function InsightsPage() {
  const [selection, setSelection] = useState('Select any feedback or roadmap item.')

  return (
    <div className="page">
      <div className="page__intro">
        <Text variant="eyebrow">Research pulse</Text>
        <Text variant="title" as="h2">
          Insights
        </Text>
        <Text variant="lead" muted>
          How the reusable primitives are landing with teams and what experiments are queued up.
        </Text>
        <div className="page__actions">
          <Button variant="secondary">Schedule review</Button>
          <Button variant="ghost">Export notes</Button>
        </div>
      </div>

      <div className="card-grid">
        {feedback.map((item) => (
          <Card
            key={item.author}
            title={item.author}
            subtitle="Feedback"
            footer={
              <Text muted className={`tone-badge tone-badge--${item.tone}`}>
                {item.tone}
              </Text>
            }
            onClick={() => setSelection(`Feedback from ${item.author}`)}
          >
            <Text>{item.note}</Text>
          </Card>
        ))}
      </div>

      <Card
        title="Next experiments"
        subtitle="Roadmap"
        actions={<Button variant="primary">Log action</Button>}
      >
        <ul className="roadmap-list">
          {roadmap.map((item) => (
            <li key={item.label} className="roadmap-list__item">
              <div>
                <Text className="roadmap-list__label">{item.label}</Text>
                <Text muted>Owner: {item.owner}</Text>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelection(`Roadmap task: ${item.label} due ${item.due}`)}
              >
                Due {item.due}
              </Button>
            </li>
          ))}
        </ul>
      </Card>

      <Card subtitle="Selection" title="Currently focused">
        <Text>{selection}</Text>
      </Card>
    </div>
  )
}

export default InsightsPage

