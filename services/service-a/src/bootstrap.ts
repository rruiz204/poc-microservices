import { RegisterService } from "@consul/register";

export const Bootstrap = async () => {
  console.log("Starting bootstrap process...");

  await RegisterService();

  console.log("Bootstrap process completed");
};