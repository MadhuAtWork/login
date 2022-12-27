import React from 'react';
import Tabs from '../Components/Tabs';
import Table from '../Components/Table';

function ApplicationDetails() {
  return (
    <>
       <Tabs tab1='Opportunities' tab1Details=<Table Heading="Application Details" /> tab2='Application' tab3='Opportunity' tab4='Primary Borrower' tab5='Co-Borrower' tab6='KYC' tab7='History' />
    </>
  );
}

export default ApplicationDetails;
