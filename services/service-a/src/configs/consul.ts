const ConsulConfig = {
  host: process.env.CONSULT_HOST!,
  port: parseInt(process.env.CONSULT_PORT!, 10),
};

export default ConsulConfig;