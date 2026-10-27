import {
  Example,
  ExampleWrapper,
} from "@/registry/bases/aria/components/example"
import { Center, Grid, Section, Stack } from "@/registry/bases/aria/ui/layout"

export default function LayoutExample() {
  return (
    <ExampleWrapper>
      <LayoutExampleStackAndGrid />
    </ExampleWrapper>
  )
}

function Box({ children }: { children: React.ReactNode }) {
  return (
    <Center className="h-16 rounded-lg bg-muted text-sm font-medium">
      {children}
    </Center>
  )
}

function LayoutExampleStackAndGrid() {
  return (
    <Example title="Stack and Grid">
      <Section className="max-w-lg">
        <Stack gap={6}>
          <Stack direction="row" gap={2} align="center" justify="between">
            <span className="text-sm font-medium">Stack</span>
            <span className="text-sm text-muted-foreground">row · between</span>
          </Stack>
          <Grid columns={3} gap={3}>
            <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
            <Box>4</Box>
            <Box>5</Box>
            <Box>6</Box>
          </Grid>
        </Stack>
      </Section>
    </Example>
  )
}
