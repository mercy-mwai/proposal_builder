"use client"
import React from 'react'
import {FormWizard} from "@/components/form-wizard";
import { Suspense } from 'react';

function CreateProposalContent(){
    return(
        <div className='min-h-screen bg-gray-50'>
            <FormWizard />
        </div>
    )
}

export default function createProposalPage(){
  return (
    <Suspense fallback= {<div>Loading...</div>}>
        <CreateProposalContent />
    </Suspense>
  )
}

 