import api from "@/service/api";
import { Movement } from "@/types";
import { AxiosResponse } from "axios";

export async function getAllMovements(): Promise<AxiosResponse<Movement[]>> {
  const data = await api.get("/movement");
  return data;
}
