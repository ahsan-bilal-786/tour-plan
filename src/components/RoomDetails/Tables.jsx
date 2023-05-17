import React, { Fragment } from "react";
import map from "lodash/map";
import { faker } from "@faker-js/faker";
import Container from "components/ParkLanding/elements/Container";

const createObj = (icon, label, value) => {
  return {
    Icon: Fragment,
    label,
    value,
  };
};

const data = [
  createObj(Fragment, faker.random.word(), faker.random.words(2)),
  createObj(Fragment, faker.random.word(), faker.random.words(2)),
  createObj(Fragment, faker.random.word(), faker.random.words(2)),
  createObj(Fragment, faker.random.word(), faker.random.words(2)),
  createObj(Fragment, faker.random.word(), faker.random.words(2)),
  createObj(Fragment, faker.random.word(), faker.random.words(2)),
  createObj(Fragment, faker.random.word(), faker.random.words(2)),
];

const TableComponents = () => {
  return (
    <div className="flex-1">
      {map(data, ({ Icon, ...row }, key) => (
        <div className={`flex flex-row min-h-[54px] items-center ${key%2 === 1 ? "bg-tp-gray-400" : ""} `} key={key}>
          <div className="flex-1 font-medium xs:text-[11px] md:text-13 pl-4 uppercase">
            <Icon />
            {row.label}
          </div>
          <div className="flex-1  font-bold md:text-15 md:text-lg">{row.value}</div>
        </div>
      ))}
    </div>
  );
};

const Tables = () => {
  return (
    <Container
      bg="bg-white"
      className="md:pt-[98px] xs:pb-11 md:pb-[102px]"
    >
      <div className="flex xs:flex-col md:flex-row gap-10 justify-between mb-38">
        <TableComponents />
        <TableComponents />
      </div>
      <p className="font-normal xs:text-15 md:text-lg leading-7">To request this room, provide Disney with the following text:</p>
      <p className="font-normal xs:text-15 md:text-lg leading-7 text-tp-purple">
        Bldg The Lion King,Flr 1,E-facing
        room.Exmple:6534,6532,6536,6530,6538,6528
      </p>
    </Container>
  );
};

export default Tables;
