import React from "react";
import { faker } from "@faker-js/faker";
import Container from "components/Search/elements/Container";

const RowWrapper = ({ children }) => (
  <div className="flex flex-col md:flex-row ">{children}</div>
);
const CellWrapper = ({ className, children }) => (
  <div className={`flex-1 flex flex-row border border-grey p-3 ${className}`}>
    {children}
  </div>
);
const Title = ({ children }) => (
  <div className="flex-1 font-bold text-sm text-gray-900">{children}</div>
);
const Value = ({ children }) => (
  <div className="flex-1 text-sm text-gray-700">{children}</div>
);

const TableRow = () => {
  return (
    <div className="flex flex-col mb-5">
      <RowWrapper>
        <CellWrapper>
          <Title>Name</Title>
          <Value>{faker.name.fullName()}</Value>
        </CellWrapper>
        <CellWrapper>
          <Title>SetASide Code</Title>
          <Value>SBA</Value>
        </CellWrapper>
      </RowWrapper>
      <RowWrapper>
        <CellWrapper>
          <Title>Sol#</Title>
          <Value>uih77unjkn78g7788un</Value>
        </CellWrapper>
        <CellWrapper>
          <Title>Agency</Title>
          <Value>{faker.company.name()}</Value>
        </CellWrapper>
      </RowWrapper>
      <RowWrapper>
        <CellWrapper>
          <Title>Type</Title>
          <Value>Solicitation</Value>
        </CellWrapper>
        <CellWrapper>
          <Title>Office</Title>
          <Value>{faker.company.name()}</Value>
        </CellWrapper>
      </RowWrapper>
      <RowWrapper>
        <CellWrapper>
          <Title>PostedDate</Title>
          <Value>3/15/23</Value>
        </CellWrapper>
        <CellWrapper>
          <Title>NAICS</Title>
          <Value>33721</Value>
        </CellWrapper>
      </RowWrapper>
      <RowWrapper>
        <CellWrapper>
          <Title>Due Date</Title>
          <Value>2023-02-28T12:00:00-08:00</Value>
        </CellWrapper>
        <CellWrapper>
          <Title>Link</Title>
          <Value>
            <a href="http://www.google.com" alt="google">
              http://www.google.com
            </a>
          </Value>
        </CellWrapper>
      </RowWrapper>
      <RowWrapper>
        <CellWrapper className="!flex-col gap-y-2">
          <Title>Description</Title>
          <Value>{faker.lorem.paragraphs()}</Value>
        </CellWrapper>
      </RowWrapper>
    </div>
  );
};

const TableDesign = () => {
  return (
    <>
      <Container
        bg="bg-white"
        className="xs:pt-[51px] md:pt-[100px] xs:pb-[69px] md:pb-[117px]"
      >
        <h1 class="flex mb-7 text-2xl justify-center sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
          Results
        </h1>
        <div className="">
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </div>
      </Container>
    </>
  );
};

export default TableDesign;
