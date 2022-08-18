import axios, { AxiosResponse } from "axios";
import { getAgenda } from "../../src/services/agenda";
import { AgendaType } from "../../src/types/agenda";
import { expect } from "@jest/globals";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const agendas: AgendaType = {
  mentor: {
    name: "Max Mustermann",
    time_zone: "-03:00"
  },
  calendar: [
    {
      date_time: "2022-01-07 15:55:09 +0100"
    },
    {
      date_time: "2022-01-08 21:20:44 +0100"
    },
    {
      date_time: "2022-01-13 11:30:57 +0100"
    },
    {
      date_time: "2022-01-13 12:13:12 +0100"
    }
  ]
};

jest.mock("../../src/services/client", () => ({
  // Mock use of instance
  get: jest.fn(() => Promise.resolve(agendas))
}));

describe("Agenda API", () => {
  test("results returned from getAgenda should return agendas as results", async () => {
    //Prepare the response we want to get from axios
    const mockedResponse: AxiosResponse = {
      data: agendas,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {}
    };

    mockedAxios.get.mockReturnValue(mockedResponse);

    const result = await getAgenda();

    console.log("result", result);

    expect(result).toBe(mockedResponse.data);
  });
});
