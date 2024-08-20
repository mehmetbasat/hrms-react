import React from "react";
import { Grid, GridColumn, } from "semantic-ui-react";
import Candidates from "../pages/CandidateList";
import Cities from "./Cities";
import Jobs from "./Jobs";

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Cities />
                    </Grid.Column>
                    <GridColumn width={12}>
                        <Candidates />
                    </GridColumn>
                </Grid.Row>

            </Grid>

            <Grid>
                <Grid.Column width={1}>
                    <Jobs />
                </Grid.Column>

            </Grid>
        </div>
    )
}