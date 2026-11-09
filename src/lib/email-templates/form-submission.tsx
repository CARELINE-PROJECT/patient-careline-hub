import React from 'react'
import { Body, Container, Head, Heading, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  formLabel?: string
  reference?: string
  fields?: { label: string; value: string }[]
}

const Email = ({ formLabel = 'Formulaire', reference = '', fields = [] }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>{`Nouvelle demande : ${formLabel} ${reference}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>CARELINE</Text>
        <Heading style={h1}>Nouvelle demande · {formLabel}</Heading>
        {reference ? <Text style={muted}>Référence : {reference}</Text> : null}
        <Section style={box}>
          {fields.map((f) => (
            <Text key={f.label} style={row}><strong>{f.label} :</strong> {f.value || '—'}</Text>
          ))}
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => `Careline · ${d['formLabel'] ?? 'Nouvelle demande'} ${d['reference'] ?? ''}`.trim(),
  displayName: 'Nouvelle demande (secrétariat)',
  to: 'secretariat@careline.doctor',
  previewData: { formLabel: 'Contact', reference: 'CM-123456', fields: [{ label: 'Nom', value: 'Jeanne Martin' }, { label: 'Email', value: 'jeanne@example.com' }] },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '600px' }
const brand = { color: '#0f766e', fontWeight: 700, letterSpacing: '2px', fontSize: '13px' }
const h1 = { color: '#0b3b4a', fontSize: '20px', margin: '8px 0 4px' }
const muted = { color: '#64748b', fontSize: '13px' }
const box = { borderTop: '1px solid #e2e8f0', marginTop: '16px', paddingTop: '8px' }
const row = { color: '#0f172a', fontSize: '14px', lineHeight: '22px', margin: '6px 0', whiteSpace: 'pre-wrap' as const }
