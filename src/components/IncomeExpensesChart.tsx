import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    month: "Jan",
    income: 5000,
  },
  {
    month: "Feb",
    income: 6500,
  },
  {
    month: "Mar",
    income: 6000,
  },
  {
    month: "Apr",
    income: 2000,
  },
  {
    month: "May",
    income: 6500,
  },
  {
    month: "Jun",
    income: 6000,
  },
  {
    month: "Jul",
    income: 4000,
  },
  {
    month: "Aug",
    income: 6000,
  },
  {
    month: "Sep",
    income: 4000,
  },
  {
    month: "Oct",
    income: 6000,
  },
  {
    month: "Nov",
    income: 4000,
  },
  {
    month: "Dec",
    income: 8000,
  },
];

const IandEChart = () => {
  return (
    <>
      <ResponsiveBar
        data={data}
        keys={["income"]}
        indexBy="month"
        margin={{ bottom: 50 }}
        padding={0.6}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors="#97c2fe"
        enableGridY={false}
        enableLabel={false}
        borderRadius={10}
        axisTop={null}
        axisRight={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        theme={{
          background: "#ffffff",
          textColor: "#8a98ba",
          fontSize: 11,
          tooltip: {
            container: {
              background: "#3579e2",
              color: "#ffffff",
            },
          },
        }}
      />
    </>
  );
};

export default IandEChart;
