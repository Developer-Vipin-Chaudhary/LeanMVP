import { Request, Response } from "express";
import sequelize from "../config/db";
import User from "../models/user";

// Define the data type for the line chart
interface LineChartDataPoint {
  name: string;
  ty: number;
  ly: number;
  amt: number;
}

const LineChartdata: LineChartDataPoint[] = [
  { name: "Jan", ty: 4000, ly: 2400, amt: 2400 },
  { name: "Feb", ty: 3000, ly: 1398, amt: 2210 },
  { name: "Mar", ty: 2000, ly: 9800, amt: 2290 },
  { name: "Apr", ty: 2780, ly: 3908, amt: 2000 },
  { name: "May", ty: 1890, ly: 4800, amt: 2181 },
  { name: "Jun", ty: 2390, ly: 3800, amt: 2500 },
  { name: "Jul", ty: 3490, ly: 4300, amt: 2100 },
];

const BarChartData = [
  {
    name: "Linux",
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mac",
    pv: 1398,
    amt: 2210,
  },
  {
    name: "IOS",
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Window",
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Android",
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Other",
    pv: 3800,
    amt: 2500,
  },
];

const PieChartData = [
  { name: "United States", value: 400 },
  { name: "Canada", value: 300 },
  { name: "Mexico", value: 300 },
  { name: "Other", value: 200 },
];
interface AuthRequest extends Request {
  userId?: string;
}

export const getdata = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ LineChartdata, BarChartData, PieChartData });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getUser = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findByPk(req.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
