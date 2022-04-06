import * as React from 'react';
import { Page, PageSection, Text, Title, TextArea, Grid, GridItem, Button } from '@patternfly/react-core';

function onClickSubmit() {
  console.log("Submit")
}

const Query: React.FunctionComponent = () => (
  <Page>
    <PageSection>
      <Title headingLevel="h1" size="lg">Welcome to our Text to Speech application!</Title>
    </PageSection>
    <PageSection>
      <Grid hasGutter={true}>
        <GridItem span={4}>
          <Text>Please enter the text you would like to hear, then press Submit:</Text>
        </GridItem>
        <GridItem span={8}></GridItem>
        <GridItem span={4}>
          <TextArea id="textEntry"></TextArea>
        </GridItem>
        <GridItem span={8}></GridItem>
        <GridItem span={4}>
          <Button variant='primary' onClick={onClickSubmit}>Submit</Button>
        </GridItem>
      </Grid>
    </PageSection>
  </Page>
)

export { Query as Query };
