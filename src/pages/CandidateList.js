import React, { useState, useEffect } from "react"
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'
import CandidateService from "../services/candidateService"

export default function Candidates() {
  const [candidates, setCandidates] = useState([])

  useEffect(() => {
    let candidateService = new CandidateService()
    candidateService.getCandidates().then(result => setCandidates(result.data.data))
  })

  return (
    <div>
      <Table singleLine>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>İsim</TableHeaderCell>
            <TableHeaderCell>Soyisim</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>

          {
            candidates.map(candidate => (
              <TableRow key={candidate.id}>
                <TableCell>{candidate.firstName}</TableCell>
                <TableCell>{candidate.lastName}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}