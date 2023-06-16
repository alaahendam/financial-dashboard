import { createSlice } from "@reduxjs/toolkit";
// Define the initial mood value
const getRandomData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push(Math.floor(Math.random() * 100));
  }
  return data;
};
const initialState = {
  pieChartData: getRandomData(5),
  columnChartData: [
    {
      name: "Net Profit",
      data: getRandomData(9),
    },
    {
      name: "Revenue",
      data: getRandomData(9),
    },
    {
      name: "Free Cash Flow",
      data: getRandomData(9),
    },
  ],
  areaChartData: [
    {
      name: "series-1",
      data: getRandomData(8),
    },
    {
      name: "series-2",
      data: getRandomData(8),
    },
    {
      name: "series-3",
      data: getRandomData(8),
    },
  ],
  multipleRadialbarChartData: getRandomData(3),
  singleAreaChartData: getRandomData(9),
};

export const ChartsDataSlice = createSlice({
  name: "chartsData",
  initialState,
  reducers: {
    updateChartsData: (state, action) => {
      state.pieChartData = getRandomData(5);
      state.columnChartData = [
        {
          name: "Net Profit",
          data: getRandomData(9),
        },
        {
          name: "Revenue",
          data: getRandomData(9),
        },
        {
          name: "Free Cash Flow",
          data: getRandomData(9),
        },
      ];
      state.areaChartData = [
        {
          name: "series-1",
          data: getRandomData(8),
        },
        {
          name: "series-2",
          data: getRandomData(8),
        },
        {
          name: "series-3",
          data: getRandomData(8),
        },
      ];
      state.multipleRadialbarChartData = getRandomData(3);
      state.singleAreaChartData = getRandomData(9);
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateChartsData } = ChartsDataSlice.actions;

export default ChartsDataSlice.reducer;
